import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { FeaturedProject } from "../data/projects";

export function ProjectCard({
  project,
  open,
  onToggle,
}: {
  project: FeaturedProject;
  open: boolean;
  onToggle: () => void;
}) {
  const contentId = `project-content-${project.id}`;
  return (
    <article
      className={`relative rounded-[28px] border border-white/70 px-5 pb-12 pt-5 text-neutral-950 transition-[box-shadow,background-color] duration-500 sm:rounded-[36px] sm:px-8 sm:pt-6 dark:border-white/10 dark:text-neutral-100 ${project.color} ${project.glow}`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={onToggle}
        className="group block w-full cursor-pointer rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-neutral-700 dark:focus-visible:outline-white"
      >
        <span className="flex min-h-10 items-start justify-between gap-4 border-b border-white/80 pb-4 text-xs text-neutral-600 sm:text-lg dark:border-white/20 dark:text-neutral-300">
          <span className="shrink-0 font-medium">{project.name}</span>
          <span className="text-right">{project.category}</span>
        </span>
        <span className="sr-only">
          {open ? "Collapse" : "Expand"} {project.id} project
        </span>
        <span
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <span className="min-h-0 overflow-hidden">
            <span className="flex items-start justify-between gap-5 pt-6 sm:pt-7">
              <span className="text-xl font-semibold leading-[1.5] tracking-[-0.025em] sm:text-[29px]">
                {project.title}
              </span>
              <ArrowRight
                aria-hidden="true"
                size={29}
                strokeWidth={1.5}
                className={`mt-2 shrink-0 transition-transform duration-500 motion-reduce:transition-none ${open ? "-rotate-45" : "rotate-0"}`}
              />
            </span>
          </span>
        </span>
      </button>
      <div
        id={contentId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="grid gap-7 pt-7 sm:gap-8 sm:pt-8">
            <section aria-labelledby={`skills-${project.id}`}>
              <h3
                id={`skills-${project.id}`}
                className="mb-4 text-sm font-semibold"
              >
                Skills used
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby={`achievements-${project.id}`}>
              <h3
                id={`achievements-${project.id}`}
                className="mb-4 text-sm font-semibold"
              >
                What I achieved
              </h3>
              <dl className="grid gap-5 pb-3 sm:grid-cols-2 sm:gap-8">
                {project.highlights.map((highlight) => (
                  <div key={highlight.title}>
                    <dt className="text-base font-semibold tracking-[-0.02em]">
                      {highlight.title}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {highlight.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 mb-2 inline-flex items-center gap-2 border-b border-neutral-500/50 pb-1 text-sm transition-colors hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 dark:hover:text-white"
            >
              Visit website <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
