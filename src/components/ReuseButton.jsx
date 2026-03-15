'use client';

import { useRouter } from 'next/navigation';
import { useSquare } from '@/context/SquareContext';

export default function ReuseButton({ postId }) {
  const router = useRouter();
  const { reuseTrip } = useSquare();

  const handleReuse = () => {
    const tripId = reuseTrip(postId);
    if (tripId) {
      router.push(`/trip/${tripId}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleReuse}
      className="inline-flex items-center gap-2 rounded-button bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-dark"
    >
      <span>📋</span>
      <span>一键复用此方案</span>
    </button>
  );
}
