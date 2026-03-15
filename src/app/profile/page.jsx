'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import UserProfileCard from '@/components/UserProfileCard';
import ThemeToggle from '@/components/ThemeToggle';
import { useApp } from '@/context/AppContext';

export default function ProfilePage() {
  const { user, logout } = useApp();

  return (
    <>
      <Header title="个人中心" />
      <main className="px-4 py-6">
        <UserProfileCard />
        <div className="mt-6 space-y-2">
          <Link
            href="/my-trips"
            className="flex items-center justify-between rounded-card border border-slate-200 bg-white px-4 py-3 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark"
          >
            <span className="text-slate-900 dark:text-white">我的行程</span>
            <span className="text-slate-400">→</span>
          </Link>
          <div className="flex items-center justify-between rounded-card border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
            <span className="text-slate-900 dark:text-white">主题</span>
            <ThemeToggle className="p-0" />
          </div>
          <button
            type="button"
            className="w-full rounded-card border border-slate-200 bg-white px-4 py-3 text-left text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            设置（预留）
          </button>
        </div>
        {user ? (
          <button
            type="button"
            onClick={logout}
            className="mt-6 w-full rounded-button border border-red-200 py-3 text-red-600 dark:border-red-800 dark:text-red-400"
          >
            退出登录
          </button>
        ) : (
          <div className="mt-6 flex gap-3">
            <Link
              href="/login"
              className="flex-1 rounded-button bg-accent py-3 text-center font-medium text-white hover:bg-accent-dark"
            >
              登录
            </Link>
            <Link
              href="/register"
              className="flex-1 rounded-button border border-slate-200 py-3 text-center font-medium text-slate-700 dark:border-slate-600 dark:text-slate-300"
            >
              注册
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
