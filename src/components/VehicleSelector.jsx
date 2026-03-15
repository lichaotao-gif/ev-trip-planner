'use client';

const options = [
  { value: 'tesla', label: 'Tesla', desc: '特斯拉' },
  { value: 'other', label: 'Other EV', desc: '其他电动车' },
];

export default function VehicleSelector({ value, onChange }) {
  return (
    <div className="block">
      <span className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400">
        车型
      </span>
      <div className="flex gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 rounded-card border-2 px-4 py-3 text-left transition ${
              value === opt.value
                ? 'border-accent bg-accent/10 text-accent dark:bg-accent/20'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-500'
            }`}
          >
            <span className="block font-medium">{opt.label}</span>
            <span className="block text-xs opacity-80">{opt.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
