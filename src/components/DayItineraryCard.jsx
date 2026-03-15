'use client';

import { useState } from 'react';

export default function DayItineraryCard({ day }) {
  const [open, setOpen] = useState(day.day === 1);
  if (!day) return null;
  return (
    <div className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="font-medium text-slate-900 dark:text-white">
          Day {day.day} · {day.date}
        </span>
        <span className="text-slate-500 dark:text-slate-400">
          {day.driveKm} km · {Math.round(day.driveMinutes / 60)}h
        </span>
        <span className="text-lg">{open ? '▼' : '▶'}</span>
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 dark:border-slate-700">
          <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
            <strong className="text-slate-700 dark:text-slate-300">路线：</strong>
            {day.route}
          </p>
          {day.chargeStops?.length > 0 && (
            <p className="mb-2 text-sm">
              <strong className="text-slate-700 dark:text-slate-300">充电：</strong>
              <span className="text-slate-600 dark:text-slate-400">⚡ {day.chargeStops.join('、')}</span>
            </p>
          )}
          {day.sights?.length > 0 && (
            <p className="mb-2 text-sm">
              <strong className="text-slate-700 dark:text-slate-300">景点：</strong>
              <span className="text-slate-600 dark:text-slate-400">🏛️ {day.sights.join('、')}</span>
            </p>
          )}
          {day.foods?.length > 0 && (
            <p className="mb-2 text-sm">
              <strong className="text-slate-700 dark:text-slate-300">美食：</strong>
              <span className="text-slate-600 dark:text-slate-400">🍜 {day.foods.join('、')}</span>
            </p>
          )}
          {day.hotel && (
            <p className="text-sm">
              <strong className="text-slate-700 dark:text-slate-300">酒店：</strong>
              <span className="text-slate-600 dark:text-slate-400">🛏️ {day.hotel}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
