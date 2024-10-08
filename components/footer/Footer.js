'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n';
import DarkModeToggle from './DarkModeToggle';

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
    <footer className="container mx-auto px-4 fixed bottom-0 left-0 right-0 bg-gradient-to-b from-background/0 via-background/70 to-background/100 h-24 flex flex-col justify-end">
      <div className="flex justify-between items-center text-sm pb-2">
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link href={link.url} key={link.url} className="text-gray-600 hover:text-orange-600 dark:text-gray-400">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          {langs.map(({ code, name, path, isCurrent }, index) => (
            <>
              {index > 0 && <span className="mx-1">|</span>}
              {isCurrent ?
                <span className="text-orange-600">{name}</span> :
                <Link href={path} key={code} className={`text-gray-600 hover:text-orange-600 dark:text-gray-400 ${isCurrent ? 'font-bold' : ''}`}>{name}</Link>
              }
            </>
          ))}
          <DarkModeToggle />
        </div>
      </div>
    </footer>
  );
}