const iconMap = {
  hotel: '🛏️',
  charging: '⚡',
  road: '🛣️',
  food: '🍜',
  ticket: '🎫',
  other: '📦',
};

export default function ExpenseCard({ item }) {
  if (!item) return null;
  const icon = iconMap[item.icon] || '📦';
  return (
    <div className="flex items-center justify-between rounded-card border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="font-medium text-slate-900 dark:text-white">{item.name}</p>
          {item.percent != null && (
            <p className="text-xs text-slate-500 dark:text-slate-400">占比 {item.percent}%</p>
          )}
        </div>
      </div>
      <p className="font-semibold text-slate-900 dark:text-white">
        ¥{item.amount?.toLocaleString()}
      </p>
    </div>
  );
}
