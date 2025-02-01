const pug = require('pug');
const fs = require('fs');
const path = require('path');
const fetch = require('sync-fetch')
const woff2base64 = require('woff2base64');


const site_config = {
  src_dir: 'src',
  dist_dir: 'dist',
  static_copy_dir: 'static', // Within the src_dir
  static_inject_dir: 'static_inject', // Same
  langs: ['en', 'de'],
}

const fonts = { /* Fonts expected to be in woff2 and ttf format as backup. Path without extension. */
  'Josefin Sans': 'fonts/Josefin_Sans/JosefinSans-VariableFont_wght',
  'Albert Sans': 'fonts/Albert_Sans/AlbertSans-VariableFont_wght',
}


// Cleanup ---------------------------------------------------------------------

async function cleanup() {
  console.log(`Cleaning up the ${site_config.dist_dir} directory...`)
  await fs.promises.rm(site_config.dist_dir, { recursive: true, force: true });
  await fs.promises.mkdir(site_config.dist_dir, { recursive: true });
}

// Generate fonts for inline use -----------------------------------------------

function generateFonts() {
  const font_options = {
    'fontFaceTemplate': 'url(<%=uri%>) format("<%=format%>")',
    'banner': ''
  }

  resultCSS = ''

  for (const [fontName, fontPath] of Object.entries(fonts)) {
    const fontData = { [fontName + '.woff2']: fs.readFileSync(path.join(site_config.src_dir, site_config.static_copy_dir, fontPath + '.woff2')) }
    const { woff2 } = woff2base64(fontData, { fontFamily: fontName, ...font_options });
    const css = `@font-face { font-family: "${fontName}"; src: ${woff2}, url("${site_config.static_copy_dir}/${fontPath}.ttf") format("ttf"); }\n`
    resultCSS += css
  }

  return resultCSS
}

// Copy static files -----------------------------------------------------------

async function copyStaticFiles() {
  console.log(`Copying static files from ${site_config.static_copy_dir} to ${site_config.dist_dir}...`)
  await fs.promises.cp(
    path.join(site_config.src_dir, site_config.static_copy_dir), 
    path.join(site_config.dist_dir, site_config.static_copy_dir), 
    {recursive: true}
  );
}

// Pug compilation ------------------------------------------------------------

function injectFontsFilter() {
  return generateFonts()
}

function fetchFilter(data, {url}) {
  console.log(`Fetching ${url}...`)
  const result = fetch(url).text()
  return result
}

async function compilePug() {
  console.log(`Rendering the ${site_config.src_dir}/index.pug file...`)
  const pugFile = path.join(__dirname, site_config.src_dir, 'index.pug');
  const html = pug.renderFile(pugFile, {
    filters: {
      inject_fonts: injectFontsFilter,
      fetch: fetchFilter,
    },
    config: site_config,
    require: require,
    pug_render: pug.render
  });

  return html;
}

// File splitting ------------------------------------------------------------

async function splitHTMLFiles(htmlContent) {
  // Use regex here to be more resilient to HTML errors
  const fileMatches = htmlContent.match(/<file-split\s+route="([^"]+)">([\s\S]*?)<\/file-split>/g) || [];
  
  console.log(`Generating ${fileMatches.length} files...`);

  for (const match of fileMatches) {
      const routeMatch = match.match(/route="([^"]+)"/);
      const contentMatch = match.match(/<file-split[^>]+>([\s\S]*?)<\/file-split>/);

      if (!routeMatch || !contentMatch) continue;

      const route = routeMatch[1];
      const fileContent = contentMatch[1].trim();

      const fullPath = path.join(site_config.dist_dir, route.replace(/^\//, ''), 'index.html');
      
      await fs.promises.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.promises.writeFile(fullPath, fileContent);
      
      console.log(`Created file: ${fullPath}`);
  }
}

// Main ------------------------------------------------------------------------

async function main() {
  await cleanup();
  generateFonts();
  await copyStaticFiles();
  await compilePug().then(splitHTMLFiles);
}

main();