'use client';

import Header from '@/components/Header';
import TripForm from '@/components/TripForm';
import Link from 'next/link';
import { mockRecommendedRoutes } from '@/lib/mockData';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const { lastGeneratedTripId } = useApp();

  return (
    <>
      <Header title="EV Trip Planner" />
      <main className="px-4 py-6">
        <div className="mb-6 text-center">
          <h2 className="mb-1 text-xl font-semibold text-slate-900 dark:text-white">
            智能规划你的电车旅行
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            为补能、风景和停留节奏做好安排
          </p>
        </div>
        <div className="mb-6 rounded-card border border-slate-200 bg-white p-5 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark">
          <TripForm />
        </div>
        {lastGeneratedTripId && (
          <div className="mb-6">
            <Link
              href={`/trip/${lastGeneratedTripId}`}
              className="block rounded-card border border-slate-200 bg-white p-3 text-center text-sm font-medium text-accent shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark"
            >
              查看最近一次行程 →
            </Link>
          </div>
        )}
        <section>
          <h3 className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-400">
            推荐路线
          </h3>
          <div className="space-y-2">
            {mockRecommendedRoutes.map((r) => (
              <Link
                key={r.id}
                href={`/trip/t1`}
                className="flex items-center justify-between rounded-card border border-slate-200 bg-white px-4 py-3 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark"
              >
                <span className="font-medium text-slate-900 dark:text-white">
                  {r.origin} → {r.destination}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                  {r.tag} · {r.days}天
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
