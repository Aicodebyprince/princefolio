
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Button } from './ui/button';
import { ArrowLeft, Rss, LayoutTemplate, Code, Menu, GraduationCap, Briefcase, Swords, Layers, Puzzle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { Skeleton } from './ui/skeleton';

// Dynamically import components for lazy loading
const AllProjectsSection = dynamic(() => import('./sections/explore/all-projects'));
const AllExperiencesSection = dynamic(() => import('./sections/explore/all-experiences'));
const JourneySectionExplore = dynamic(() => import('./sections/explore/journey'));
const ProblemSolvingSection = dynamic(() => import('./sections/explore/problem-solving'));
const HackathonsSection = dynamic(() => import('./sections/explore/hackathons'));
const AllServicesSection = dynamic(() => import('./sections/explore/all-services'));
const DesignSection = dynamic(() => import('./sections/explore/designs'));
const BlogSection = dynamic(() => import('./sections/explore/blog'));

type ExploreViewProps = {
  onBackClick: () => void;
  initialTab?: string;
};

const LoadingSkeleton = () => (
    <div className="space-y-8">
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


const ExploreView = ({ initialTab = 'projects' }: ExploreViewProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [searchParams, activeTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.replace(`/explore?tab=${tabId}`, { scroll: false });
  }

  const navItems = [
    { id: 'projects', label: 'All Projects', icon: <Code className="w-5 h-5" /> },
    { id: 'experience', label: 'My Experience', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'journey', label: 'My Journey', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'problem-solving', label: 'Problem Solving', icon: <Puzzle className="w-5 h-5" /> },
    { id: 'hackathons', label: 'Hackathons', icon: <Swords className="w-5 h-5" /> },
    { id: 'services', label: 'Services', icon: <Layers className="w-5 h-5" /> },
    { id: 'designs', label: 'Design Templates', icon: <LayoutTemplate className="w-5 h-5" /> },
    { id: 'blog', label: 'Blog', icon: <Rss className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <AllProjectsSection />;
      case 'experience':
        return <AllExperiencesSection />;
      case 'journey':
        return <JourneySectionExplore />;
      case 'problem-solving':
        return <ProblemSolvingSection />;
      case 'hackathons':
        return <HackathonsSection />;
      case 'services':
        return <AllServicesSection />;
      case 'designs':
        return <DesignSection />;
      case 'blog':
        return <BlogSection />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white h-screen w-screen flex antialiased overflow-hidden">
      {/* Sidebar */}
      <nav className={cn(
        "bg-gray-900/50 backdrop-blur-lg border-r border-white/10 transition-all duration-300 ease-in-out flex-col hidden md:flex",
        isSidebarOpen ? 'w-64' : 'w-20'
      )}>
        <div className={cn("flex items-center border-b border-white/10 transition-all", isSidebarOpen ? 'p-4 h-16 justify-between' : 'p-4 h-16 justify-center')}>
          <span className={cn("font-bold text-lg gradient-text", !isSidebarOpen && "hidden")}>Explore</span>
          <Button variant="ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:bg-white/10">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex-grow p-2 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'secondary' : 'ghost'}
              onClick={() => handleTabChange(item.id)}
              className={cn(
                'w-full flex items-center justify-start text-sm font-medium rounded-lg transition-colors',
                activeTab === item.id ? 'bg-white/10' : 'hover:bg-white/10',
                isSidebarOpen ? 'px-4 py-3' : 'px-0 py-3 justify-center'
              )}
            >
              {item.icon}
              <span className={cn('ml-3 transition-opacity', !isSidebarOpen && 'hidden')}>{item.label}</span>
            </Button>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
           <Button onClick={() => router.push('/')} variant="ghost" className={cn('w-full flex items-center justify-start hover:bg-white/10', !isSidebarOpen && 'justify-center')}>
              <ArrowLeft className="w-5 h-5" />
              <span className={cn('ml-3', !isSidebarOpen && 'hidden')}>Back to Portfolio</span>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pan"></div>
        <div className="relative z-10 p-6 md:p-12">
           <Suspense fallback={<LoadingSkeleton />}>
            {renderContent()}
          </Suspense>
        </div>
      </main>

      {/* Mobile Bottom Bar */}
       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-white/10 z-50">
           <div className="flex justify-around items-center p-2">
               {navItems.slice(0, 5).map((item) => (
                   <Button
                       key={item.id}
                       variant="ghost"
                       onClick={() => handleTabChange(item.id)}
                       className={cn(
                           'flex flex-col items-center justify-center h-16 w-16 rounded-lg transition-colors text-xs',
                           activeTab === item.id ? 'text-accent' : 'text-gray-400'
                       )}
                   >
                       {item.icon}
                       <span className="mt-1">{item.label.split(' ')[0]}</span>
                   </Button>
               ))}
           </div>
       </div>


      <style jsx>{`
        .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        @keyframes pan {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
        }
        .animate-pan {
            animation: pan 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExploreView;
