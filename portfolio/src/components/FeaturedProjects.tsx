import { useState } from "react";
import { featuredProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const [openProject, setOpenProject] = useState<string | null>("rideme");
  function toggleProject(id: string) {
    setOpenProject((current) => (current === id ? null : id));
  }
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="pb-16 pt-16 sm:pb-24 sm:pt-20"
    >
      <h2
        id="projects-heading"
        className="text-center text-[clamp(28px,3.5vw,42px)] font-semibold leading-tight tracking-[-0.025em]"
      >
        <span className="text-neutral-600 dark:text-neutral-400">Some</span> Of
        My Featured{" "}
        <span className="text-neutral-600 dark:text-neutral-400">Projects</span>
      </h2>
      <div className="isolate mx-auto mt-16 max-w-[900px] sm:mt-24">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={index === 0 ? "relative" : "relative -mt-8"}
          >
            <ProjectCard
              project={project}
              open={openProject === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
