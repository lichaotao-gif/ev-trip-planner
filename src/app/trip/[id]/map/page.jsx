'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import MapFilterBar from '@/components/MapFilterBar';
import MapPoiCard from '@/components/MapPoiCard';
import { useApp } from '@/context/AppContext';

export default function TripMapPage() {
  const params = useParams();
  const { getTripById } = useApp();
  const trip = getTripById(params.id);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('map');
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedPoi, setSelectedPoi] = useState(null);

  const pois = useMemo(() => {
    const list = trip?.poiList?.length ? trip.poiList : trip?.itineraryDays?.flatMap((d) => d.pois || []) || [];
    const byDay = selectedDay ? list.filter((p) => p.day === selectedDay) : list;
    if (filter === 'all') return byDay;
    return byDay.filter((p) => p.type === filter);
  }, [trip, filter, selectedDay]);

  if (!trip) {
    return (
      <>
        <Header title="行程地图" showBack />
        <main className="px-4 py-8 text-center text-slate-500">行程不存在</main>
      </>
    );
  }

  return (
    <>
      <Header title="行程地图" showBack />
      <main className="px-4 py-4">
        <div className="mb-4 rounded-card border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
          <p className="font-medium text-slate-900 dark:text-white">{trip.title}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {trip.origin} → {trip.destination} · {trip.days} 天 · {trip.totalDistance} km
          </p>
        </div>
        {trip.itineraryDays?.length > 1 && (
          <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
            {trip.itineraryDays.map((d) => (
              <button
                key={d.day}
                type="button"
                onClick={() => setSelectedDay(d.day)}
                className={`shrink-0 rounded-button px-3 py-2 text-sm font-medium ${
                  selectedDay === d.day ? 'bg-accent text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                }`}
              >
                Day {d.day}
              </button>
            ))}
          </div>
        )}
        <MapFilterBar
          value={filter}
          onChange={setFilter}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        {viewMode === 'map' && (
          <div className="relative mt-4 flex h-72 items-center justify-center rounded-card border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-slate-500 dark:text-slate-400">
              地图区域（可接入高德/Mapbox 展示路线与点位）
            </p>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {pois.slice(0, 6).map((poi) => (
                <button
                  key={poi.id}
                  type="button"
                  onClick={() => setSelectedPoi(poi)}
                  className="rounded-button bg-white px-3 py-1.5 text-xs shadow dark:bg-slate-800"
                >
                  {poi.name}
                </button>
              ))}
            </div>
          </div>
        )}
        {viewMode === 'list' && (
          <div className="mt-4 space-y-2">
            {pois.length === 0 ? (
              <p className="py-8 text-center text-slate-500 dark:text-slate-400">该筛选下暂无点位</p>
            ) : (
              pois.map((poi) => (
                <button
                  key={poi.id}
                  type="button"
                  onClick={() => setSelectedPoi(poi)}
                  className="w-full text-left"
                >
                  <MapPoiCard poi={poi} />
                </button>
              ))
            )}
          </div>
        )}
        {selectedPoi && (
          <div className="fixed bottom-24 left-4 right-4 z-50">
            <MapPoiCard poi={selectedPoi} onClose={() => setSelectedPoi(null)} />
          </div>
        )}
      </main>
    </>
  );
}
