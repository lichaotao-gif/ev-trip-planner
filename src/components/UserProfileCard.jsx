'use client';

import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function UserProfileCard() {
  const { user } = useApp();
  const displayName = user?.nickname || '未登录';
  const avatar = user?.avatar;

  return (
    <div className="rounded-card border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-2xl text-slate-600 dark:bg-slate-700 dark:text-slate-400">
          {avatar ? (
            <img src={avatar} alt="" className="h-full w-full object-cover" />
          ) : (
            '👤'
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-slate-900 dark:text-white">{displayName}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {user ? `车型：${user.vehicleType === 'tesla' ? 'Tesla' : '其他 EV'}` : '登录后同步行程'}
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2 border-t border-slate-100 pt-3 dark:border-slate-700">
        <Link
          href="/my-trips"
          className="flex-1 rounded-button bg-slate-100 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
        >
          我的行程
        </Link>
      </div>
    </div>
  );
}
