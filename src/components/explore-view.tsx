'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowLeft, Rss, LayoutTemplate, Code } from 'lucide-react';
import { allProjects, blogs, designTemplates } from '@/lib/data'; // Assuming you create this in data.ts
import AllProjectsSection from './sections/explore/all-projects';
import BlogSection from './sections/explore/blog';
import DesignSection from './sections/explore/designs';

type ExploreViewProps = {
  onBackClick: () => void;
};

const ExploreView = ({ onBackClick }: ExploreViewProps) => {
  const [activeTab, setActiveTab] = useState('projects');

  const navItems = [
    { id: 'projects', label: 'All Projects', icon: <Code /> },
    { id: 'blog', label: 'Blog', icon: <Rss /> },
    { id: 'designs', label: 'Design Templates', icon: <LayoutTemplate /> },
  ];

  return (
    <div className="bg-black text-white h-screen w-screen flex flex-col antialiased">
      {/* Header */}
      <header className="flex-shrink-0 p-4 flex items-center justify-between border-b border-white/10 relative z-20">
        <Button onClick={onBackClick} variant="ghost" className="hover:bg-white/10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Site
        </Button>
        <div className="flex items-center space-x-2">
            {navItems.map((item) => (
                <Button 
                    key={item.id}
                    variant={activeTab === item.id ? "secondary" : "ghost"}
                    onClick={() => setActiveTab(item.id)}
                    className={`rounded-full ${activeTab === item.id ? 'bg-white/20' : 'hover:bg-white/10'}`}
                >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                </Button>
            ))}
        </div>
        <div className="w-40"></div> {/* Spacer */}
      </header>

      {/* Content */}
      <main className="flex-grow overflow-y-auto relative">
         <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
         <div className="relative z-10 p-8 md:p-12">
            {activeTab === 'projects' && <AllProjectsSection />}
            {activeTab === 'blog' && <BlogSection />}
            {activeTab === 'designs' && <DesignSection />}
         </div>
      </main>
       <style jsx>{`
        .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default ExploreView;