'use client';

import React from 'react';
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import Footer from "@/components/footer";
import JourneySection from '@/components/sections/journey';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleExploreClick = (tab: string = 'projects') => {
    router.push(`/explore?tab=${tab}`);
  };

  return (
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
  );
}
