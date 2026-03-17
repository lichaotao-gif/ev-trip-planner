const SummaryIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-slate-600 dark:text-slate-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export default function TripSummaryCard({ trip }) {
  if (!trip) return null;
  const items = [
    { label: '总里程', value: `${trip.totalDistance} km` },
    { label: '驾驶时长', value: `${Math.round(trip.totalDriveTime / 60)} 小时` },
    { label: '充电次数', value: `${trip.totalChargeStops} 次` },
    { label: '预计费用', value: `¥${trip.estimatedCost?.toLocaleString()}` },
  ];
  return (
    <div className="rounded-card border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-slate-100/80 shadow-sm dark:border-slate-600/50 dark:from-slate-700/80 dark:to-slate-800">
          <SummaryIcon />
        </span>
        <h2 className="font-semibold text-slate-900 dark:text-white">{trip.title}</h2>
      </div>
      <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
        {trip.origin} → {trip.destination} · {trip.days} 天
      </p>
      <div className="grid grid-cols-2 gap-3">
        {items.map(({ label, value }) => (
          <div key={label} className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-700/50">
            <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
            <p className="font-medium text-slate-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
