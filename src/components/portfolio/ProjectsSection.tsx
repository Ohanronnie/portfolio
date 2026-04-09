import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { type PortfolioProject, portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ProjectItem({ project, index }: { project: PortfolioProject; index: number }) {
  const reveal = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const hasLiveDemo = project.link && project.link !== "#";

  return (
    <div
      ref={reveal.ref}
      className={`reveal group border-t border-[#2D2D2D]/10 py-12 transition-all duration-500 px-6 -mx-6 hover:border-l-4 hover:border-l-[#C65D3B] hover:bg-white/40 ${reveal.isVisible ? "visible" : ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-start">
        <div className="md:col-span-4 pt-1">
          <span className="font-['JetBrains_Mono'] text-xs text-[#C65D3B] mb-2 block tracking-widest">
            {String(index + 1).padStart(2, "0")} / PROJECT
          </span>
          <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] group-hover:text-[#C65D3B] transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <div className="md:col-span-8">
          <p className="text-[#2D2D2D]/70 leading-relaxed mb-6 font-['Inter']">{project.description}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
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

          <div className="flex items-center gap-5 flex-wrap">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs font-bold tracking-widest border-b border-[#2D2D2D] pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300"
            >
              VIEW DETAILS
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {hasLiveDemo ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs tracking-widest text-[#2D2D2D]/70 hover:text-[#C65D3B] transition-colors duration-300"
              >
                LIVE SITE
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectsSectionProps {
  limit?: number;
  title?: string;
  showViewAll?: boolean;
}

export function ProjectsSection({
  limit,
  title = "Selected Projects",
  showViewAll = false,
}: ProjectsSectionProps) {
  const heading = useScrollReveal();
  const projects = typeof limit === "number" ? portfolioData.projects.slice(0, limit) : portfolioData.projects;
  const hasMoreProjects = projects.length < portfolioData.projects.length;

  return (
    <section id="projects">
      <div
        ref={heading.ref}
        className={`flex items-end justify-between mb-12 reveal ${heading.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-4">
          <span className="heading-line h-px bg-[#2D2D2D]" />
          {title}
        </h2>
        <span className="font-['JetBrains_Mono'] text-xs text-[#2D2D2D]/50 tracking-widest hidden sm:block">
          2023 — {new Date().getFullYear()}
        </span>
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectItem key={project.id} project={project} index={i} />
        ))}
        <div className="border-t border-[#2D2D2D]/10" />
      </div>

      {showViewAll && hasMoreProjects ? (
        <div className="mt-8 flex justify-end">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs font-bold tracking-widest border-b border-[#2D2D2D] pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      ) : null}
    </section>
  );
}
