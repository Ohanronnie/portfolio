const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "Push notifications", "API integration"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "Rust", "Axum / Actix Web"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "SQLx", "TypeORM", "Prisma"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "AWS", "GitHub Actions", "Caddy", "Nginx"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-[900px] scroll-mt-28 pb-12 pt-4 sm:pb-16"
    >
      <h2
        id="skills-heading"
        className="mb-10 text-center text-[30px] font-semibold tracking-[-0.025em] sm:mb-14 sm:text-[36px]"
      >
        My Skills
      </h2>
      <div className="grid grid-cols-1 gap-y-10 text-center sm:grid-cols-3 sm:gap-10 lg:grid-cols-5 sm:text-left">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-base font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 text-sm leading-relaxed text-neutral-600 sm:block sm:space-y-2.5 dark:text-neutral-400">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
