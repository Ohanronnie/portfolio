import { FileUser } from "lucide-react";
import { ArtPrint } from "./ArtPrint";
import sculpture from "../assets/obsidian-sculpture.jpg";
import landscape from "../assets/basalt-landscape.jpg";
import resume from "../assets/resume.pdf";

export function MyStory() {
  return (
    <section>
      <div
        id="story"
        aria-labelledby="story-heading"
        className="scroll-mt-28 py-12 sm:py-16"
      >
        <h2
          id="story-heading"
          className="mb-10 text-center text-[30px] font-semibold tracking-[-0.025em] sm:mb-14 sm:text-[36px]"
        >
          My Story
        </h2>
        <div className="mx-auto max-w-[960px]">
          <p className="text-base leading-[1.65] tracking-[-0.015em] text-neutral-600 sm:text-[22px] dark:text-neutral-400">
            <span className="text-neutral-950 dark:text-neutral-100">
              I’m Paul, a software developer working across web, mobile, and
              backend systems. I enjoy turning complex requirements into
              software people can use every day.
            </span>{" "}
            My work spans logistics, healthcare, and e-commerce, connecting
            customer apps, internal tools, APIs, and the data behind them.
          </p>
          <div
            className="relative mx-auto mb-20 mt-10 aspect-[1.15] max-w-[700px] sm:mb-28 sm:mt-14 sm:aspect-[1.3]"
            aria-label="Two overlapping dark art prints"
          >
            <ArtPrint
              image={landscape}
              alt="Moonlit basalt cliffs reflected in a still dark ocean"
              className="left-[3%] top-[12%] -rotate-10"
            />
            <ArtPrint
              image={sculpture}
              alt="An obsidian sculpture illuminated by silver rim light"
              className="right-[2%] top-[2%] rotate-[8deg]"
            />
          </div>
          <p className="mb-7 text-base leading-[1.65] tracking-[-0.015em] text-neutral-600 sm:text-[22px] dark:text-neutral-400">
            <span className="text-neutral-950 dark:text-neutral-100">
              I care about how software works, and how it holds up over time.
            </span>{" "}
            I work with React, React Native, TypeScript, and Node.js, alongside
            Rust with Actix Web, Axum, and SQLx. I focus on clear architecture,
            maintainable code, and dependable services, from database queries to
            deployment.
          </p>
          <p className="mb-8 text-base leading-[1.65] tracking-[-0.015em] text-neutral-600 sm:text-[22px] dark:text-neutral-400">
            My background in Computer Engineering at the Federal University
            Oye-Ekiti (FUOYE) shapes how I approach engineering: understand the
            problem, break it into manageable parts, and build a solution that
            works as a whole.
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-3 rounded-full border border-black bg-neutral-900 px-6 text-sm text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-neutral-700"
          >
            View My Resume{" "}
            <FileUser size={18} strokeWidth={1.5} className="-rotate-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
