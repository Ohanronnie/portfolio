import { portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function SkillsTicker() {
  const reveal = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  const skills = [...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills];

  return (
    <section
      ref={reveal.ref}
      className={`border-t border-b border-[#2D2D2D]/10 py-8 mb-32 overflow-hidden bg-white/30 reveal-scale ${reveal.isVisible ? "visible" : ""}`}
    >
      <div className="flex gap-12 animate-scroll whitespace-nowrap font-['JetBrains_Mono'] text-sm tracking-widest text-[#2D2D2D]/60 uppercase">
        {skills.map((skill, i) => (
          <span key={i} className="flex items-center gap-4 group cursor-default hover:text-[#C65D3B] transition-colors duration-200">
            {skill}
            <span className="w-1.5 h-1.5 rounded-full bg-[#C65D3B] group-hover:scale-150 transition-transform duration-200" />
          </span>
        ))}
      </div>
    </section>
  );
}
