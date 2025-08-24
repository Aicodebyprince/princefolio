'use client';

import React from 'react';
import ExploreView from '@/components/explore-view';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ExplorePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'projects';

  return <ExploreView onBackClick={() => router.push('/')} initialTab={initialTab} />;
}
