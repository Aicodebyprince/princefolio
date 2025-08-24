
'use client';

import React, { Suspense } from 'react';
import ExploreView from '@/components/explore-view';
import { useRouter, useSearchParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => (
    <div className="space-y-8 p-12">
        <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-12 w-1/2 mx-auto" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Skeleton className="h-64 rounded-2xl" />
            <Skeleton className="h-64 rounded-2xl" />
            <Skeleton className="h-64 rounded-2xl" />
        </div>
    </div>
);

// This component uses the hook and must be wrapped in Suspense
const ExplorePageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'projects';

  return <ExploreView onBackClick={() => router.push('/')} initialTab={initialTab} />;
};

export default function ExplorePage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ExplorePageContent />
    </Suspense>
  );
}
