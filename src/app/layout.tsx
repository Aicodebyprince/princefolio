
"use client";

import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AnimatedBackground from '@/components/animated-background';
import ScrollProgress from '@/components/scroll-progress';
import { TransitionProvider, TransitionContext } from '@/context/transition-context';
import TransitionScreen from '@/components/transition-screen';
import { useContext } from 'react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

// Note: Metadata is not used in a client component, but we can keep it here for reference.
const metadata: Metadata = {
  title: 'Prince Sherathiya - Developer',
  description: 'Portfolio of Prince Sherathiya, a developer and Computer Science student.',
};

const AppContent = ({ children }: { children: React.ReactNode }) => {
  const { isTransitioning } = useContext(TransitionContext);
  // Hide content during the transition animation to prevent flashes of old/new pages.
  return (
    <div className={cn({ 'opacity-0': isTransitioning })}>
      {children}
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-white bg-black">
        <TransitionProvider>
          <AnimatedBackground />
          <ScrollProgress />
          <TransitionScreen />
          <AppContent>{children}</AppContent>
          <Toaster />
        </TransitionProvider>
      </body>
    </html>
  );
}
