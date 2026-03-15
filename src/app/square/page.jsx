'use client';

import Header from '@/components/Header';
import SquareTripCard from '@/components/SquareTripCard';
import { useSquare } from '@/context/SquareContext';
import Link from 'next/link';

export default function SquarePage() {
  const { squarePosts } = useSquare();

  return (
    <>
      <Header title="广场" />
      <main className="px-4 py-6">
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
          浏览其他用户分享的行程，点赞、收藏、评论，或一键复用、寻找搭子
        </p>
        {squarePosts.length === 0 ? (
          <div className="rounded-card bg-slate-100 py-12 text-center text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <p className="mb-2">暂无分享</p>
            <p className="text-sm">去规划一趟行程并发布到广场吧</p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-button bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              去规划
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {squarePosts.map((post) => (
              <SquareTripCard key={post.postId} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
