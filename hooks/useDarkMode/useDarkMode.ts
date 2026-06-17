'use client';

import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') || 'dark';
    const active = savedTheme === 'dark';
    setIsDark(active);
    document.documentElement.classList.toggle('dark', active);
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;
      window.localStorage.setItem('theme', next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  return { isDark, toggleTheme };
}
