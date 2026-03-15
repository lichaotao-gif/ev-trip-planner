'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login(email, password);
    setLoading(false);
    router.push('/profile');
  };

  return (
    <>
      <Header title="登录" showBack />
      <main className="flex min-h-[80vh] flex-col px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="mb-1 text-xl font-semibold text-slate-900 dark:text-white">
            欢迎回来
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            登录后同步并管理你的行程
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm text-slate-600 dark:text-slate-400">
              手机号 / 邮箱
            </span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="请输入"
              className="w-full rounded-card border border-slate-200 bg-white px-4 py-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-slate-600 dark:text-slate-400">密码</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入"
              className="w-full rounded-card border border-slate-200 bg-white px-4 py-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              required
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-button bg-accent py-3 font-medium text-white hover:bg-accent-dark disabled:opacity-60"
          >
            {loading ? '登录中…' : '登录'}
          </button>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            还没有账号？{' '}
            <Link href="/register" className="text-accent hover:underline">
              立即注册
            </Link>
          </p>
        </form>
        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            className="rounded-button border border-slate-200 py-2.5 text-sm text-slate-600 dark:border-slate-600 dark:text-slate-400"
          >
            Apple 登录（预留）
          </button>
          <button
            type="button"
            className="rounded-button border border-slate-200 py-2.5 text-sm text-slate-600 dark:border-slate-600 dark:text-slate-400"
          >
            微信登录（预留）
          </button>
          <Link
            href="/"
            className="rounded-button border border-slate-200 py-2.5 text-center text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400"
          >
            游客体验，暂不登录
          </Link>
        </div>
      </main>
    </>
  );
}
