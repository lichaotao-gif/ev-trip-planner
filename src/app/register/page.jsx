'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { useApp } from '@/context/AppContext';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    register(email, password, nickname);
    setLoading(false);
    router.push('/profile');
  };

  return (
    <>
      <Header title="注册" showBack />
      <main className="flex min-h-[80vh] flex-col px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="mb-1 text-xl font-semibold text-slate-900 dark:text-white">
            创建账号
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            保存并管理你的电车旅行计划
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm text-slate-600 dark:text-slate-400">昵称</span>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="选填"
              className="w-full rounded-card border border-slate-200 bg-white px-4 py-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </label>
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
            {loading ? '注册中…' : '注册'}
          </button>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            已有账号？{' '}
            <Link href="/login" className="text-accent hover:underline">
              去登录
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
