'use client';

const filters = [
  { key: 'all', label: '全部', icon: '📍' },
  { key: 'charging', label: '充电', icon: '⚡' },
  { key: 'food', label: '美食', icon: '🍜' },
  { key: 'sight', label: '景点', icon: '🏛️' },
  { key: 'hotel', label: '酒店', icon: '🛏️' },
];

export default function MapFilterBar({ value, onChange, viewMode, onViewModeChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => onChange(f.key)}
            className={`shrink-0 rounded-button px-3 py-2 text-sm font-medium transition ${
              value === f.key
                ? 'bg-accent text-white'
                : 'bg-white text-slate-600 shadow-card dark:bg-slate-800 dark:text-slate-400 dark:shadow-card-dark'
            }`}
          >
            {f.icon} {f.label}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onViewModeChange('map')}
          className={`flex-1 rounded-button py-2 text-sm ${viewMode === 'map' ? 'bg-accent text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'}`}
        >
          地图
        </button>
        <button
          type="button"
          onClick={() => onViewModeChange('list')}
          className={`flex-1 rounded-button py-2 text-sm ${viewMode === 'list' ? 'bg-accent text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'}`}
        >
          列表
        </button>
      </div>
    </div>
  );
}
