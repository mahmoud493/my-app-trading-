'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '../../hooks/useDarkMode/useDarkMode';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-[#0b1527] px-4 py-3 text-sm text-white transition hover:border-accent/30"
    >
      {isDark ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      {isDark ? 'Sombre' : 'Clair'}
    </button>
  );
}
