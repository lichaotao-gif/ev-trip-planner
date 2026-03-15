'use client';

import { useState } from 'react';
import { useSquare } from '@/context/SquareContext';

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('zh-CN');
}

export default function CompanionSection({ postId, requests, onAdd }) {
  const { addCompanionRequest, currentUserId } = useSquare();
  const [message, setMessage] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = message.trim();
    if (!text) return;
    if (!currentUserId) {
      alert('请先登录后发布找搭子');
      return;
    }
    addCompanionRequest(postId, text);
    setMessage('');
    setShowInput(false);
    onAdd?.();
  };

  return (
    <div className="rounded-card border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">寻找搭子</h3>
      {requests?.length > 0 && (
        <ul className="mb-3 space-y-2">
          {requests.map((r) => (
            <li
              key={r.id}
              className="rounded-lg bg-slate-50 p-2 text-sm dark:bg-slate-700/50"
            >
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {r.nickname}
              </span>
              <span className="text-slate-500 dark:text-slate-400"> · {formatTime(r.createdAt)}</span>
              <p className="mt-1 text-slate-600 dark:text-slate-400">{r.message}</p>
            </li>
          ))}
        </ul>
      )}
      {showInput ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="例如：4 月初出发，有同行的吗"
            className="w-full rounded-button border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            rows={2}
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowInput(false)}
              className="rounded-button border border-slate-200 px-3 py-1.5 text-sm dark:border-slate-600"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={!message.trim()}
              className="rounded-button bg-accent px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
            >
              发布
            </button>
          </div>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setShowInput(true)}
          className="rounded-button bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
        >
          + 我要找搭子
        </button>
      )}
    </div>
  );
}
