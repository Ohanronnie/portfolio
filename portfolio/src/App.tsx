import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { MyStory } from "./components/MyStory";
import { ContactSection } from "./components/ContactSection";
import { SkillsSection } from "./components/SkillsSection";

export function App() {
  const [dark, setDark] = useState(false);
  const [contactRun, setContactRun] = useState(0);
  const [contactStep, setContactStep] = useState(-1);
  useEffect(() => {
    if (!contactRun) return;
    setContactStep(0);
    const timers = [
      setTimeout(() => setContactStep(-1), 500),
      setTimeout(() => setContactStep(1), 1000),
      setTimeout(() => setContactStep(-1), 1500),
      setTimeout(() => setContactStep(2), 2000),
      setTimeout(() => setContactStep(-1), 2500),
      setTimeout(() => setContactStep(3), 3000),
      setTimeout(() => setContactStep(-1), 3500),
      setTimeout(() => setContactStep(4), 4000),
      setTimeout(() => setContactStep(-1), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [contactRun]);
  function showContact() {
    setContactRun((run) => run + 1);
    document.getElementById("contact")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }
  return (
    <div className={dark ? "dark" : ""}>
      <div
        id="home"
        className="min-h-screen bg-white font-sans text-neutral-950 antialiased transition-colors selection:bg-green-100 dark:bg-neutral-950 dark:text-neutral-100 motion-reduce:transition-none"
      >
        <Navigation
          dark={dark}
          contactStep={contactStep}
          onToggleTheme={() => setDark(!dark)}
        />
        <main className="mx-auto w-[calc(100%-40px)] max-w-[1050px] pb-4 pt-4 sm:w-[calc(100%-80px)] sm:pt-8">
          <Hero onContactClick={showContact} />
          <FeaturedProjects />
          <SkillsSection />
          <MyStory />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
