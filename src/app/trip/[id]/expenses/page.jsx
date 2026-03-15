'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import ExpenseList from '@/components/ExpenseList';
import { useApp } from '@/context/AppContext';

export default function TripExpensesPage() {
  const params = useParams();
  const { getTripById } = useApp();
  const trip = getTripById(params.id);
  const expenses = trip?.expenses || [];
  const total = expenses.reduce((sum, e) => sum + (e.amount || 0), 0);

  if (!trip) {
    return (
      <>
        <Header title="费用明细" showBack />
        <main className="px-4 py-8 text-center text-slate-500">行程不存在</main>
      </>
    );
  }

  return (
    <>
      <Header title="费用明细" showBack />
      <main className="px-4 py-6">
        <div className="mb-6 rounded-card border border-slate-200 bg-white p-5 text-center shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark">
          <p className="text-sm text-slate-500 dark:text-slate-400">预计总费用</p>
          <p className="mt-1 text-3xl font-bold text-accent">¥{total.toLocaleString()}</p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            人均约 ¥{Math.round(total / 2)} · 电车相比油车约省 ¥200+
          </p>
        </div>
        <ExpenseList expenses={expenses} />
        <div className="mt-6 rounded-card border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
          <h3 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            预算建议
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            以上为估算值，住宿与餐饮可按实际档次调整；充电费以当前电价估算，高速费以常见路线估算。
          </p>
        </div>
      </main>
    </>
  );
}
