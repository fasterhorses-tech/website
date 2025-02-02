## How does this work?

There is a single `index.pug` file, from which a lot of HTML with crucial resources
already embedded is generated via `index.js`.
Since round trip times can be pretty bad on slow connections, we are inlining some
things that are necessary to display the page directly. (Fonts, CSS and HTMX)

This creates a single HTML file which is roughly 140kb unzipped.
(Some less necessary resources are lazy loaded, like the logo and Alpine.js)

General principles:

- try using as few and as expressive lines of code as possible
- try to keep small snippets of website code close to each other, so that it's easier to find and modify them
- try to keep the site as simple as possible, but allow for i18n and lazy loading and small interactivity
- use folders for navigation, but allow for dynamic loading of subpages using HTMX

Tech stack:

- JS script for static site generation in general (see `package.json` and `index.js`)
- Pug for templating (see `src/index.pug`)
- CSS3 for styling (see `src/static_inject/global.css`)
- HTMX for dynamic content loading (yes, this can be done with a static site)
- Alpine.js for small interactivity
- pug related small tools and helpers in `src/_site.pug`

## Light/dark mode

The site automatically switches between light and dark mode depending on the OS's setting.
We're using the CSS `prefers-color-scheme` media query to detect the OS's setting, and 
the 'color-scheme' property to set the site's color scheme.

We're also using the CSS 'light-dark()' function to invert the colors of the site for dark mode.
Sometimes this is not enough however, so besides that, we're also using Alpine.js to allow the
user to manually switch between light and dark mode.
In that case, the "theme-switched" event is dispatched (carrying the theme as a parameter).

## NB

- nodemon is complex shit, just use onchange, does what we need
- for serving the files, use http-server, simple and works
