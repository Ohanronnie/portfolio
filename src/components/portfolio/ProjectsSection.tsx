import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ProjectItem({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) {
  const reveal = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={reveal.ref}
      className={`reveal group border-t border-[#2D2D2D]/10 py-12 flex flex-col md:flex-row gap-8 md:items-start transition-all duration-500 px-6 -mx-6 hover:border-l-4 hover:border-l-[#C65D3B] hover:bg-white/40 ${reveal.isVisible ? "visible" : ""}`}
    >
      <div className="w-full md:w-1/4 pt-1">
        <span className="font-['JetBrains_Mono'] text-xs text-[#C65D3B] mb-2 block tracking-widest">
          0{index + 1} / PROJECT
        </span>
        <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] group-hover:text-[#C65D3B] transition-colors duration-300">
          {project.title}
        </h3>
      </div>

      <div className="w-full md:w-1/2">
        <p className="text-[#2D2D2D]/70 leading-relaxed mb-6 font-['Inter']">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {project.tech.map(t => (
            <div
              key={t}
              className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#2D2D2D]/60 hover:text-[#C65D3B] transition-colors duration-200 cursor-default"
            >
              <span className="w-1 h-1 rounded-full bg-[#C65D3B]" />
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/4 flex md:justify-end items-start pt-1">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs font-bold tracking-widest border-b border-[#2D2D2D] pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300 group-hover:translate-x-2"
        >
          VIEW CASE <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const heading = useScrollReveal();

  return (
    <section id="projects">
      <div
        ref={heading.ref}
        className={`flex items-end justify-between mb-12 reveal ${heading.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-4">
          <span className="heading-line h-px bg-[#2D2D2D]" />
          Selected Projects
        </h2>
        <span className="font-['JetBrains_Mono'] text-xs text-[#2D2D2D]/50 tracking-widest hidden sm:block">
          2023 — {new Date().getFullYear()}
        </span>
      </div>

      <div className="flex flex-col">
        {portfolioData.projects.map((project, i) => (
          <ProjectItem key={project.id} project={project} index={i} />
        ))}
        <div className="border-t border-[#2D2D2D]/10" />
      </div>
    </section>
  );
}
