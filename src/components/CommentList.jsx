'use client';

function formatTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const diff = now - d;
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小时前`;
  return d.toLocaleDateString('zh-CN');
}

export default function CommentList({ comments }) {
  if (!comments?.length) {
    return (
      <p className="py-4 text-center text-sm text-slate-500 dark:text-slate-400">暂无评论</p>
    );
  }

  return (
    <ul className="space-y-3">
      {comments.map((c) => (
        <li
          key={c.id}
          className="rounded-card border border-slate-100 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50"
        >
          <div className="mb-1 flex items-center justify-between">
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {c.nickname || '匿名'}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {formatTime(c.createdAt)}
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">{c.content}</p>
        </li>
      ))}
    </ul>
  );
}
