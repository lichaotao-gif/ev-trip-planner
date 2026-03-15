'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: '规划', icon: '🗺️' },
  { href: '/my-trips', label: '行程', icon: '📋' },
  { href: '/profile', label: '我的', icon: '👤' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const isTripPage = pathname.startsWith('/trip');
  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (isAuthPage) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 py-2 dark:border-slate-700 dark:bg-slate-900/95 safe-bottom">
      {items.map(({ href, label, icon }) => {
        const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 rounded-button px-4 py-2 text-sm transition ${
              active
                ? 'text-accent font-medium'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
