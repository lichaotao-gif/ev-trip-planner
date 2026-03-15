'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`rounded-button inline-flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${className}`}
      aria-label="切换主题"
    >
      {theme === 'dark' ? (
        <>
          <span className="text-lg">☀️</span>
          <span>浅色</span>
        </>
      ) : (
        <>
          <span className="text-lg">🌙</span>
          <span>深色</span>
        </>
      )}
    </button>
  );
}
