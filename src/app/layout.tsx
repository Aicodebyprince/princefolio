import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AnimatedBackground from '@/components/animated-background';
import ScrollProgress from '@/components/scroll-progress';
import { TransitionProvider } from '@/context/transition-context';
import TransitionScreen from '@/components/transition-screen';

export const metadata: Metadata = {
  title: 'Prince Sherathiya - Developer',
  description: 'Portfolio of Prince Sherathiya, a developer and Computer Science student.',
};

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
          {children}
          <Toaster />
        </TransitionProvider>
      </body>
    </html>
  );
}
