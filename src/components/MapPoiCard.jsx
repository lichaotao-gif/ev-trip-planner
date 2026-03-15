import { POI_TYPE_LABELS } from '@/lib/types';

const iconMap = { charging: '⚡', food: '🍜', sight: '🏛️', hotel: '🛏️' };

export default function MapPoiCard({ poi, onClose }) {
  if (!poi) return null;
  const icon = iconMap[poi.type] || '📍';
  return (
    <div className="rounded-card border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark">
      <div className="mb-2 flex items-start justify-between">
        <span className="text-2xl">{icon}</span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
          >
            ✕
          </button>
        )}
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white">{poi.name}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {POI_TYPE_LABELS[poi.type] || poi.type}
      </p>
      {poi.address && (
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{poi.address}</p>
      )}
      {poi.recommendReason && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          推荐：{poi.recommendReason}
        </p>
      )}
      {poi.stayDuration > 0 && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
          建议停留 {poi.stayDuration} 分钟
        </p>
      )}
    </div>
  );
}
