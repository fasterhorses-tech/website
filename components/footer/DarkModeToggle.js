'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Half2Icon } from '@radix-ui/react-icons';


export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
      className="ml-4 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 group"
      aria-label="Toggle theme"
    >
      {/* <Half2Icon className="w-4 h-4 group-hover:scale-x-[-1]" /> */}
      <Half2Icon className="w-4 h-4" />
    </Link>
  );
}