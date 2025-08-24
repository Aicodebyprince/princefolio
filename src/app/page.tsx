'use client';

import React, { useState, useEffect } from 'react';
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import Footer from "@/components/footer";
import TransitionScreen from '@/components/transition-screen';
import ExploreView from '@/components/explore-view';
import JourneySection from '@/components/sections/journey';

export default function Home() {
  const [isExploring, setIsExploring] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [showExploreView, setShowExploreView] = useState(false);
  const [initialTab, setInitialTab] = useState('projects');

  const handleExploreClick = (tab = 'projects') => {
    setInitialTab(tab);
    setShowTransition(true);
    setTimeout(() => {
      setShowTransition(false);
      setIsExploring(true);
      setShowExploreView(true);
    }, 1000); // Duration of the transition animation
  };

  const handleBackClick = () => {
    setShowExploreView(false);
    setTimeout(() => {
      setIsExploring(false);
    }, 500);
  };
  
  useEffect(() => {
    if (isExploring) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isExploring]);

  return (
    <>
      {showTransition && <TransitionScreen />}
      
      <div className={`transition-opacity duration-500 ${showExploreView ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow relative z-10">
            <HeroSection onExploreClick={() => handleExploreClick('projects')} />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection onExploreClick={() => handleExploreClick('projects')} />
            <ExperienceSection />
            <JourneySection onExploreClick={() => handleExploreClick('journey')} />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
      
      {isExploring && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${showExploreView ? 'opacity-100' : 'opacity-0'}`}>
           <ExploreView onBackClick={handleBackClick} initialTab={initialTab} />
        </div>
      )}
    </>
  );
}
