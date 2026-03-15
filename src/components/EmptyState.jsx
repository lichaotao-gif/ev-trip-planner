export default function EmptyState({ icon = '📭', title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-card bg-slate-50 px-6 py-12 text-center dark:bg-slate-800/50">
      <span className="mb-3 text-5xl">{icon}</span>
      <h3 className="mb-1 text-lg font-medium text-slate-800 dark:text-slate-200">
        {title}
      </h3>
      {description && (
        <p className="mb-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
