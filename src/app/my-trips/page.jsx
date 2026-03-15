'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SavedTripCard from '@/components/SavedTripCard';
import EmptyState from '@/components/EmptyState';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function MyTripsPage() {
  const { savedTrips, unsaveTrip } = useApp();
  const [filter, setFilter] = useState('all');
  const filtered =
    filter === 'all'
      ? savedTrips
      : savedTrips.filter((t) => t.status === filter);

  return (
    <>
      <Header title="我的行程" />
      <main className="px-4 py-6">
        <div className="mb-4 flex gap-2">
          {['all', 'upcoming', 'ongoing', 'completed'].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-button px-3 py-2 text-sm font-medium ${
                filter === f ? 'bg-accent text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
              }`}
            >
              {f === 'all' ? '全部' : f === 'upcoming' ? '未出发' : f === 'ongoing' ? '进行中' : '已完成'}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <EmptyState
            icon="📋"
            title={savedTrips.length === 0 ? '还没有保存的行程' : '暂无符合的行程'}
            description={
              savedTrips.length === 0
                ? '在行程详情页点击「加入我的行程」即可保存'
                : '试试切换筛选条件'
            }
            action={
              <Link
                href="/"
                className="rounded-button bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dark"
              >
                去规划一趟
              </Link>
            }
          />
        ) : (
          <div className="space-y-4">
            {filtered.map((trip) => (
              <SavedTripCard
                key={trip.tripId}
                trip={trip}
                onDelete={unsaveTrip}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
