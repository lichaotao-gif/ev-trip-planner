'use client';

import { useSquare } from '@/context/SquareContext';

export default function LikeButton({ postId, likeCount, likedByUserIds }) {
  const { likePost, currentUserId } = useSquare();
  const liked = currentUserId && likedByUserIds?.includes(currentUserId);

  return (
    <button
      type="button"
      onClick={() => likePost(postId)}
      className={`inline-flex items-center gap-1.5 rounded-button px-3 py-2 text-sm transition ${
        liked
          ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-600'
      }`}
    >
      <span>{liked ? '❤️' : '🤍'}</span>
      <span>点赞</span>
      <span className="font-medium">{likeCount ?? 0}</span>
    </button>
  );
}
