'use client';

import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);

      const handleChange = (e) => setIsDarkMode(e.matches);
      darkModeMediaQuery.addEventListener('change', handleChange);

      return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return isDarkMode;
}

export default useDarkMode; 