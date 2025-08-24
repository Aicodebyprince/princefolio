'use client';

import React from 'react';
import ExploreView from '@/components/explore-view';
import { useRouter } from 'next/navigation';

export default function ExplorePage() {
  const router = useRouter();

  // The 'initialTab' logic can be handled via search params if needed in the future.
  // For now, we'll just show the default tab.
  return <ExploreView onBackClick={() => router.push('/')} initialTab="projects" />;
}
