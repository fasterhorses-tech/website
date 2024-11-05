'use client'

import { useTheme } from 'next-themes'
import { Half2Icon } from '@radix-ui/react-icons'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 group"
      aria-label="Toggle theme"
    >
      <Half2Icon className="w-4 h-4 group-hover:scale-x-[-1]" />
    </button>
  );
}