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
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative z-10">
        <HeroSection onExploreClick={() => {}} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onExploreClick={() => {}} />
        <ExperienceSection />
        <JourneySection onExploreClick={() => {}} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
