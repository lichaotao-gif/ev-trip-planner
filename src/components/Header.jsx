'use client';

import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header({ title = 'EV Trip Planner', showBack = false, right }) {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/90 safe-top">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {showBack && (
          <button
            type="button"
            onClick={() => router.back()}
            className="flex shrink-0 items-center justify-center rounded-button p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label="返回"
          >
            <span className="text-xl">←</span>
          </button>
        )}
        <h1 className="truncate text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h1>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {right}
        <ThemeToggle />
      </div>
    </header>
  );
}
