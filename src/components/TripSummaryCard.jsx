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
      <div className="mb-3 flex items-center justify-between">
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
