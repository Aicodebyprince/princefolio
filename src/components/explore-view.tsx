'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowLeft, Rss, LayoutTemplate, Code, Menu, GraduationCap, Briefcase, Swords } from 'lucide-react';
import AllProjectsSection from './sections/explore/all-projects';
import BlogSection from './sections/explore/blog';
import DesignSection from './sections/explore/designs';
import { cn } from '@/lib/utils';
import JourneySectionExplore from './sections/explore/journey';
import AllExperiencesSection from './sections/explore/all-experiences';
import { useRouter, useSearchParams } from 'next/navigation';
import HackathonsSection from './sections/explore/hackathons';

type ExploreViewProps = {
  onBackClick: () => void;
  initialTab?: string;
};

const ExploreView = ({ onBackClick, initialTab = 'projects' }: ExploreViewProps) => {
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
    { id: 'hackathons', label: 'Hackathons', icon: <Swords className="w-5 h-5" /> },
    { id: 'blog', label: 'Blog', icon: <Rss className="w-5 h-5" /> },
    { id: 'designs', label: 'Design Templates', icon: <LayoutTemplate className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <AllProjectsSection />;
      case 'experience':
        return <AllExperiencesSection />;
      case 'journey':
        return <JourneySectionExplore />;
      case 'hackathons':
        return <HackathonsSection />;
      case 'blog':
        return <BlogSection />;
      case 'designs':
        return <DesignSection />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white h-screen w-screen flex antialiased overflow-hidden">
      {/* Sidebar */}
      <nav className={cn(
        "bg-gray-900/50 backdrop-blur-lg border-r border-white/10 transition-all duration-300 ease-in-out flex flex-col",
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
           <Button onClick={onBackClick} variant="ghost" className={cn('w-full flex items-center justify-start hover:bg-white/10', !isSidebarOpen && 'justify-center')}>
              <ArrowLeft className="w-5 h-5" />
              <span className={cn('ml-3', !isSidebarOpen && 'hidden')}>Back to Portfolio</span>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pan"></div>
        <div className="relative z-10 p-8 md:p-12">
          {renderContent()}
        </div>
      </main>

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
