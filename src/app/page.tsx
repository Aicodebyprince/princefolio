import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import EducationSection from "@/components/sections/education";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import WeeklyJourneySection from "@/components/sections/weekly-journey";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <WeeklyJourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
