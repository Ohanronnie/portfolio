import { portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function EducationSection() {
  const heading = useScrollReveal();
  const card = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="education">
      <div
        ref={heading.ref}
        className={`flex items-end justify-between mb-12 reveal ${heading.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-4">
          <span className="heading-line h-px bg-[#2D2D2D]" />
          Education
        </h2>
      </div>

      <div
        ref={card.ref}
        className={`reveal border border-[#2D2D2D]/10 p-8 sm:p-10 transition-all duration-500 ${card.isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-3">
          <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans']">{portfolioData.education.institution}</h3>
          <span className="font-['JetBrains_Mono'] text-xs text-[#2D2D2D]/50 tracking-widest">{portfolioData.education.year}</span>
        </div>
        <p className="text-[#C65D3B] font-['JetBrains_Mono'] text-xs tracking-widest uppercase">{portfolioData.education.degree}</p>
      </div>
    </section>
  );
}
