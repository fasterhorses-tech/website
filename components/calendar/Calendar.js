'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Calendar({ url }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ height: '600px' }} /> // Placeholder while loading
  }

  return (
    <iframe
      src={url}
      style={{
        border: '1px solid var(--orange-600)',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        filter: resolvedTheme === 'dark' ? 'invert(90%)' : 'none', 
      }}
      width="100%"
      height="600"
    ></iframe>
  )
}