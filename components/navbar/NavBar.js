'use client'

import Link from "next/link"
import { useTranslation } from "@/i18n"

export default function NavBar({ lang, links }) {
  const { tURL } = useTranslation(lang);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 bg-gradient-to-b from-background/100 via-background/70 to-background/0`}>
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-16 absolute top-0 left-4 right-4">
          <Link href={tURL("/")} className="text-xl font-semibold leading-5 hover:text-orange-600 dark:text-white">
            <div>faster<span className="text-orange-600">horses</span><span className="font-thin">.tech</span></div>
          </Link>
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link href={link.url} key={link.url} className="hover:text-orange-600 text-lg dark:text-gray-300 dark:hover:text-orange-500">
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}