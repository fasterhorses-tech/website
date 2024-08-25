'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n';

export default function Footer({ lang, languages, links }) {
  // Remove the language prefix from the path (this is a bit complex since there
  // might or might not be a leading and trailing slash, hence the regex)
  const re = new RegExp(`^\/*${lang}\/*`, 'g');
  const langs = languages
    .map(({ code, name }) => {
      const { tURL } = useTranslation(code);
      return { 
        code, 
        name, 
        path: tURL(usePathname().replace(re, '')),
        isCurrent: code === lang
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

  return (
    <footer className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link href={link.url} key={link.url} className="text-gray-600 hover:text-gray-800">
              {link.text}
            </Link>
          ))}
        </div>
        <div>
          {langs.map(({ code, name, path, isCurrent }, index) => (
            <>
              {index > 0 && <span className="mx-1">|</span>}
              <Link href={path} key={code} className={`text-gray-600 hover:text-gray-800 ${isCurrent ? 'font-bold' : ''}`}>{name}</Link>
            </>
          ))}
        </div>
      </div>
    </footer>
  );
}