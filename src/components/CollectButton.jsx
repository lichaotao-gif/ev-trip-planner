'use client';

import { useSquare } from '@/context/SquareContext';

export default function CollectButton({ postId, collectCount, collectedByUserIds }) {
  const { collectPost, currentUserId } = useSquare();
  const collected = currentUserId && collectedByUserIds?.includes(currentUserId);

  return (
    <button
      type="button"
      onClick={() => collectPost(postId)}
      className={`inline-flex items-center gap-1.5 rounded-button px-3 py-2 text-sm transition ${
        collected
          ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600'
      }`}
    >
      <span>{collected ? '⭐' : '☆'}</span>
      <span>收藏</span>
      <span className="font-medium">{collectCount ?? 0}</span>
    </button>
  );
}
