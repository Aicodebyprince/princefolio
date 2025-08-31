
'use client';

import React, { useContext } from 'react';
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import Footer from "@/components/footer";
import JourneySection from '@/components/sections/journey';
import ServicesSection from '@/components/sections/services';
import { useRouter } from 'next/navigation';
import { TransitionContext } from '@/context/transition-context';

export default function Home() {
  const { handleTransition } = useContext(TransitionContext);

  const handleExploreClick = (tab: string = 'projects') => {
    handleTransition(`/explore?tab=${tab}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleTransition} />
      <main className="flex-grow relative z-10">
        <HeroSection onExploreClick={handleExploreClick} onNavigate={handleTransition} />
        <AboutSection />
        <SkillsSection />
        <ServicesSection onExploreClick={() => handleExploreClick('services')} />
        <ProjectsSection onExploreClick={() => handleExploreClick('projects')} />
        <ExperienceSection onExploreClick={() => handleExploreClick('experience')} />
        <JourneySection onExploreClick={() => handleExploreClick('journey')} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
