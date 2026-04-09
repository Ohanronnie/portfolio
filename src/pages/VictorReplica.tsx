import { useState } from "react";
import {
  MobileMenu,
  Navbar,
  HeroSection,
  SkillsTicker,
  ServicesSection,
  ProjectsSection,
  ExperienceSection,
  Footer,
} from "../components/portfolio";

export function VictorReplica() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#2D2D2D] font-sans pb-20">
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <Navbar onMenuOpen={() => setMobileMenuOpen(true)} />

      <main className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <SkillsTicker />

        <div className="space-y-32 mb-32">
          <ServicesSection />
          <ProjectsSection limit={3} showViewAll />
          <ExperienceSection />
        </div>

        <Footer />
      </main>
    </div>
  );
}
