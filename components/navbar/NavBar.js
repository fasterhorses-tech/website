'use client'

import Link from "next/link"
import { useTranslation } from "@/i18n"

export default function NavBar({ lang, links }) {
  const { tURL } = useTranslation(lang);

  return (
    <header className="text-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href={tURL("/")} className="text-xl font-semibold leading-5 hover:text-orange-600">
            <div>the <span className="text-orange-600">good</span> software<br/>company</div>
          </Link>
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link href={link.url} key={link.url} className="hover:text-orange-600 text-lg">
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}