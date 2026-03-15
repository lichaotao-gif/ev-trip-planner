'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import VehicleSelector from './VehicleSelector';

export default function TripForm({ onGenerate }) {
  const router = useRouter();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('3');
  const [vehicleType, setVehicleType] = useState('tesla');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // 演示：直接跳转到已有行程详情，实际可调 API 生成
    setTimeout(() => {
      if (onGenerate) onGenerate({ origin, destination, days, vehicleType });
      router.push('/trip/t1');
      setLoading(false);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-400">
          出发地
        </span>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="例如：北京"
          className="w-full rounded-card border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
          required
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-400">
          目的地
        </span>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="例如：上海"
          className="w-full rounded-card border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
          required
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-400">
          旅行天数
        </span>
        <input
          type="number"
          min="1"
          max="30"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full rounded-card border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </label>
      <VehicleSelector value={vehicleType} onChange={setVehicleType} />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-button bg-accent py-3.5 font-medium text-white shadow-card transition hover:bg-accent-dark disabled:opacity-60 dark:shadow-card-dark"
      >
        {loading ? '生成中…' : '开始生成行程'}
      </button>
    </form>
  );
}
