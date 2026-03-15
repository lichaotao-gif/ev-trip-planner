'use client';

import Link from 'next/link';
import { getTripById } from '@/lib/mockData';

function formatDate(iso) {
  const d = new Date(iso);
  const now = new Date();
  const diff = now - d;
  if (diff < 86400000) return '今天';
  if (diff < 86400000 * 2) return '昨天';
  if (diff < 86400000 * 7) return `${Math.floor(diff / 86400000)} 天前`;
  return d.toLocaleDateString('zh-CN');
}

export default function SquareTripCard({ post }) {
  if (!post) return null;
  const trip = getTripById(post.tripId);

  return (
    <Link
      href={`/square/${post.postId}`}
      className="block rounded-card border border-slate-200 bg-white p-4 shadow-card transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark dark:hover:border-slate-600"
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-900 dark:text-white line-clamp-1">
          {trip?.title || post.tripId}
        </h3>
      </div>
      {trip && (
        <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
          {trip.origin} → {trip.destination} · {trip.days} 天 · {trip.totalDistance} km
        </p>
      )}
      <div className="mb-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>👤 {post.author?.nickname || '匿名'}</span>
        <span>·</span>
        <span>{formatDate(post.publishedAt)}</span>
      </div>
      <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
        <span>❤️ {post.likeCount ?? 0}</span>
        <span>⭐ {post.collectCount ?? 0}</span>
        <span>💬 {post.commentCount ?? 0}</span>
        <span>👥 {post.companionCount ?? 0} 找搭子</span>
      </div>
    </Link>
  );
}
