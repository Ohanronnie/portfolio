import { portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ExperienceItem({ exp, index }: { exp: typeof portfolioData.experience[0]; index: number }) {
  const reveal = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={reveal.ref}
      className={`relative group reveal ${reveal.isVisible ? "visible" : ""}`}
    >
      <div
        className={`absolute -left-[54px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
          reveal.isVisible
            ? "bg-[#C65D3B] border-[#C65D3B] scale-100"
            : "bg-[#F4F0E8] border-[#2D2D2D] scale-75"
        } group-hover:scale-125`}
      />
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
        <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] group-hover:text-[#C65D3B] transition-colors duration-300">
          {exp.company}
        </h3>
        <span className="font-['JetBrains_Mono'] text-xs text-[#2D2D2D]/50 tracking-widest">{exp.period}</span>
      </div>
      <div className="text-[#C65D3B] font-['JetBrains_Mono'] text-xs tracking-widest mb-3 uppercase">{exp.role}</div>
      <p className="text-[#2D2D2D]/70 font-['Inter'] leading-relaxed max-w-lg">
        {exp.description}
      </p>
    </div>
  );
}

export function ExperienceSection() {
  const heading = useScrollReveal();
  const timeline = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="experience">
      <div
        ref={heading.ref}
        className={`flex items-end justify-between mb-12 reveal ${heading.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-4">
          <span className="heading-line h-px bg-[#2D2D2D]" />
          Experience
        </h2>
      </div>

      <div ref={timeline.ref} className="relative ml-3 space-y-12 pl-12">
        <div className={`timeline-line ${timeline.isVisible ? "animate" : ""}`} />
        {portfolioData.experience?.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} index={i} />
        ))}

        {/* Education entry */}
        <div className={`relative group reveal ${timeline.isVisible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
          <div
            className={`absolute -left-[54px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
              timeline.isVisible
                ? "bg-[#2D2D2D] border-[#2D2D2D] scale-100"
                : "bg-[#F4F0E8] border-[#2D2D2D] scale-75"
            } group-hover:scale-125`}
          />
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] group-hover:text-[#C65D3B] transition-colors duration-300">
              {portfolioData.education.institution}
            </h3>
            <span className="font-['JetBrains_Mono'] text-xs text-[#2D2D2D]/50 tracking-widest">{portfolioData.education.year}</span>
          </div>
          <div className="text-[#C65D3B] font-['JetBrains_Mono'] text-xs tracking-widest mb-3 uppercase">
            {portfolioData.education.degree}
          </div>
        </div>
      </div>
    </section>
  );
}
