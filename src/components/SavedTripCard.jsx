'use client';

import Link from 'next/link';

const statusMap = {
  draft: '草稿',
  upcoming: '未出发',
  ongoing: '进行中',
  completed: '已完成',
};

export default function SavedTripCard({ trip, onDelete }) {
  if (!trip) return null;
  return (
    <div className="rounded-card border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark">
      <div className="mb-2 flex items-start justify-between">
        <h3 className="font-semibold text-slate-900 dark:text-white">{trip.title}</h3>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400">
          {statusMap[trip.status] || trip.status}
        </span>
      </div>
      <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
        {trip.origin} → {trip.destination} · {trip.days} 天 · {trip.totalDistance} km
      </p>
      {trip.startDate && (
        <p className="mb-3 text-xs text-slate-400 dark:text-slate-500">出行日期：{trip.startDate}</p>
      )}
      <div className="flex flex-wrap gap-2">
        <Link
          href={`/trip/${trip.tripId}`}
          className="rounded-button bg-accent px-3 py-1.5 text-sm font-medium text-white hover:bg-accent-dark"
        >
          查看详情
        </Link>
        <Link
          href={`/trip/${trip.tripId}/map`}
          className="rounded-button border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          查看地图
        </Link>
        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(trip.tripId)}
            className="rounded-button border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            删除
          </button>
        )}
      </div>
    </div>
  );
}
