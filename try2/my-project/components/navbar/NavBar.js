'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NavBar({ links }) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-12">
          <div className="text-lg font-semibold">the good software company</div>
          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <Button variant="ghost" asChild key={link.url} size="sm">
                <Link href={link.url}>{link.text}</Link>
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}