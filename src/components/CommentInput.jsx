'use client';

import { useState } from 'react';
import { useSquare } from '@/context/SquareContext';

export default function CommentInput({ postId, onSent }) {
  const { addComment, currentUserId } = useSquare();
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = content.trim();
    if (!text) return;
    if (!currentUserId) {
      alert('请先登录后再评论');
      return;
    }
    addComment(postId, text);
    setContent('');
    onSent?.();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={currentUserId ? '说点什么…' : '登录后评论'}
        className="flex-1 rounded-button border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        maxLength={500}
      />
      <button
        type="submit"
        disabled={!content.trim()}
        className="rounded-button bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        发送
      </button>
    </form>
  );
}
