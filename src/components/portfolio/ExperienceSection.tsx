import { portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ExperienceItem({ exp, isLast }: { exp: typeof portfolioData.experience[0]; isLast: boolean }) {
  const reveal = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={reveal.ref}
      className={`relative group reveal ${reveal.isVisible ? "visible" : ""}`}
    >
      {!isLast ? (
        <div className="absolute -left-[49px] top-[18px] w-px h-[calc(100%+36px)] bg-[#2D2D2D]/15" />
      ) : null}
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
      {exp.highlights?.length ? (
        <ul className="mt-4 space-y-2 max-w-2xl">
          {exp.highlights.map(point => (
            <li key={point} className="flex items-start gap-2.5 text-[#2D2D2D]/70 font-['Inter'] text-sm leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C65D3B]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
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
        {portfolioData.experience?.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} isLast={i === portfolioData.experience.length - 1} />
        ))}
      </div>
    </section>
  );
}
