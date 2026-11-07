import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import { profile } from "../data/profile";
import { ArtworkSeal } from "./ArtworkSeal";

export function ContactSection() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 pb-16 pt-12 sm:pb-28 sm:pt-16"
    >
      <div className="mx-auto max-w-[960px]">
        <p className="mb-5 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Contact Me · Let’s work together
        </p>
        <div className="mb-8 flex items-start justify-between gap-4">
          <h2
            id="contact-heading"
            className="text-[27px] font-semibold leading-[1.5] tracking-[-0.02em] sm:text-[36px]"
          >
            <span className="text-neutral-600 dark:text-neutral-400">Your</span>{" "}
            Idea, Built Into Software
            <br />
            <span className="text-neutral-600 dark:text-neutral-400">
              Let’s
            </span>{" "}
            Build It Together
          </h2>
          <div className="hidden min-[460px]:block">
            <ArtworkSeal />
          </div>
        </div>
        <p className="mb-8 text-sm leading-[1.85] text-neutral-600 sm:text-base dark:text-neutral-400">
          Have a product to build, a backend to improve, or a workflow to
          automate? I can help with web and mobile development, API
          integrations, and the services that keep everything connected. Let’s
          talk about what you need and how to build it.
        </p>
        <h3 className="mb-5 text-lg font-semibold leading-[1.6] tracking-[-0.015em] sm:text-[23px]">
          Building Something <em className="font-serif font-normal">New?</em>
          <br />
          Let’s Talk Through{" "}
          <em className="font-serif font-normal">Your Ideas.</em>
        </h3>
        <p className="mb-5 text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
          Tell me about the problem, your goals, and where you need a developer
          to help.
        </p>
        <a
          href={`mailto:${profile.email}?subject=Let’s%20build%20something`}
          className="flex min-h-12 w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-[24px] border border-black bg-neutral-900 px-5 py-3 text-center text-xs text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-sm dark:border-neutral-700"
        >
          <span>
            Drop me an email at <span className="italic">{profile.email}</span>
          </span>
          <Mail size={17} strokeWidth={1.5} aria-hidden="true" />
        </a>
        <div
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6"
          aria-label="Contact platforms"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center gap-2 rounded-xl py-4 text-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 dark:hover:bg-neutral-800"
          >
            <Mail size={19} aria-hidden="true" /> Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl py-4 text-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 dark:hover:bg-neutral-800"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-[19px]"
              fill="currentColor"
            >
              <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
            </svg>{" "}
            GitHub
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl py-4 text-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 dark:hover:bg-neutral-800"
          >
            <span aria-hidden="true" className="text-xl">
              𝕏
            </span>{" "}
            Twitter <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl py-4 text-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 dark:hover:bg-neutral-800"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
