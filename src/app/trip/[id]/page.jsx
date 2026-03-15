'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import TripSummaryCard from '@/components/TripSummaryCard';
import DayItineraryCard from '@/components/DayItineraryCard';
import { useApp } from '@/context/AppContext';
import { useSquare } from '@/context/SquareContext';

export default function TripDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { getTripById, isSaved, saveTrip, unsaveTrip } = useApp();
  const { publishToSquare } = useSquare();
  const trip = getTripById(params.id);

  if (!trip) {
    return (
      <>
        <Header title="行程详情" showBack />
        <main className="px-4 py-8 text-center text-slate-500">行程不存在</main>
      </>
    );
  }

  const saved = isSaved(trip.tripId);

  return (
    <>
      <Header title="行程详情" showBack />
      <main className="px-4 py-6">
        <TripSummaryCard trip={trip} />
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => (saved ? unsaveTrip(trip.tripId) : saveTrip(trip.tripId))}
            className={`rounded-button px-4 py-2.5 text-sm font-medium ${
              saved
                ? 'border border-slate-200 text-slate-600 dark:border-slate-600 dark:text-slate-400'
                : 'bg-accent text-white hover:bg-accent-dark'
            }`}
          >
            {saved ? '已加入我的行程' : '加入我的行程'}
          </button>
          <Link
            href={`/trip/${trip.tripId}/map`}
            className="rounded-button border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            查看地图
          </Link>
          <Link
            href={`/trip/${trip.tripId}/expenses`}
            className="rounded-button border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            费用明细
          </Link>
          <button
            type="button"
            className="rounded-button border border-slate-200 px-4 py-2.5 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400"
          >
            编辑
          </button>
          <button
            type="button"
            onClick={() => {
              const postId = publishToSquare(trip.tripId);
              if (postId) router.push(`/square/${postId}`);
              else alert('请先登录后再发布到广场');
            }}
            className="rounded-button border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            🌐 发布到广场
          </button>
          <button
            type="button"
            className="rounded-button border border-slate-200 px-4 py-2.5 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400"
          >
            分享
          </button>
        </div>
        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
            每日行程
          </h2>
          <div className="space-y-3">
            {trip.itineraryDays?.map((day) => (
              <DayItineraryCard key={day.day} day={day} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
