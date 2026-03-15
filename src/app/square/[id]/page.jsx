'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import TripSummaryCard from '@/components/TripSummaryCard';
import DayItineraryCard from '@/components/DayItineraryCard';
import LikeButton from '@/components/LikeButton';
import CollectButton from '@/components/CollectButton';
import CommentList from '@/components/CommentList';
import CommentInput from '@/components/CommentInput';
import CompanionSection from '@/components/CompanionSection';
import ReuseButton from '@/components/ReuseButton';
import { useSquare } from '@/context/SquareContext';
import { getTripById } from '@/lib/mockData';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('zh-CN');
}

export default function SquareDetailPage() {
  const params = useParams();
  const { getSquarePostById } = useSquare();
  const post = getSquarePostById(params.id);
  const trip = post ? getTripById(post.tripId) : null;

  if (!post) {
    return (
      <>
        <Header title="行程详情" showBack />
        <main className="px-4 py-8 text-center text-slate-500">该分享不存在</main>
      </>
    );
  }

  return (
    <>
      <Header title="广场 · 行程详情" showBack />
      <main className="px-4 py-6">
        <div className="mb-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>👤 {post.author?.nickname || '匿名'}</span>
          <span>{formatDate(post.publishedAt)} 发布</span>
        </div>

        {trip && <TripSummaryCard trip={trip} />}

        <div className="mt-4 flex flex-wrap gap-2">
          <ReuseButton postId={post.postId} />
          <Link
            href={`/trip/${post.tripId}/map`}
            className="rounded-button border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            查看地图
          </Link>
        </div>

        <div className="mt-6 flex gap-2">
          <LikeButton
            postId={post.postId}
            likeCount={post.likeCount}
            likedByUserIds={post.likedByUserIds}
          />
          <CollectButton
            postId={post.postId}
            collectCount={post.collectCount}
            collectedByUserIds={post.collectedByUserIds}
          />
        </div>

        {trip?.itineraryDays?.length > 0 && (
          <section className="mt-6">
            <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
              每日行程
            </h2>
            <div className="space-y-3">
              {trip.itineraryDays.map((day) => (
                <DayItineraryCard key={day.day} day={day} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
            寻找搭子
          </h2>
          <CompanionSection
            postId={post.postId}
            requests={post.companionRequests}
          />
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
            评论 ({post.commentCount ?? 0})
          </h2>
          <CommentInput postId={post.postId} />
          <div className="mt-3">
            <CommentList comments={post.comments} />
          </div>
        </section>
      </main>
    </>
  );
}
