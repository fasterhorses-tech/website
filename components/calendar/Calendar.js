'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Calendar({ url }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setMounted(true)
    // Set height to 60% of viewport height
    setHeight(window.innerHeight * 0.6)
    
    const handleResize = () => {
      setHeight(window.innerHeight * 0.6)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return <div style={{ height: height || '60vh' }} /> // Placeholder while loading
  }

  return (
    <iframe
      src={url}
      style={{
        border: '1px solid gray',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        filter: resolvedTheme === 'dark' ? 'invert(90%)' : 'none',
        height: height || '60vh'
      }}
      width="100%"
    ></iframe>
  )
}