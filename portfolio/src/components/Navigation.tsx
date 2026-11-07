import { FileUser, House, Mail, Moon, Sun } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import { profile } from "../data/profile";
import resume from "../assets/resume.pdf";

const iconLink =
  "grid size-9 shrink-0 place-items-center rounded-full transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 sm:size-10 dark:hover:bg-neutral-800";

export function Navigation({
  dark,
  contactStep,
  onToggleTheme,
}: {
  dark: boolean;
  contactStep: number;
  onToggleTheme: () => void;
}) {
  return (
    <header className="pointer-events-none sticky top-0 z-50 flex justify-center px-4 pt-5 sm:pt-8">
      <nav
        aria-label="Main navigation"
        className={`${contactStep >= 0 ? "!border-green-400 !shadow-[0_0_24px_#86efac80]" : ""} transition-[border-color,box-shadow] duration-500 pointer-events-auto flex w-full max-w-[420px] items-center justify-between rounded-full border border-neutral-200/70 bg-white/70 p-2 shadow-[0_4px_24px_#00000008] backdrop-blur-sm sm:w-auto sm:max-w-none sm:gap-4 sm:px-3 dark:border-neutral-700/60 dark:bg-neutral-950/70`}
      >
        <a
          href="#home"
          aria-label="Home"
          className="flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-100 text-sm sm:h-10 sm:w-auto sm:bg-transparent sm:px-2 sm:text-[15px] dark:bg-neutral-800 sm:dark:bg-transparent"
        >
          <span className="hidden sm:inline">Home</span>{" "}
          <House size={19} strokeWidth={1.5} />
        </a>
        <span
          aria-hidden="true"
          className="mx-1 hidden h-6 w-px bg-neutral-100 sm:block dark:bg-neutral-800"
        />
        <a
          href={profile.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="X profile"
          className={`${iconLink} ${contactStep === 0 ? "motion-safe:-translate-y-2 motion-safe:scale-125" : ""} transition-[translate,scale,background-color,color] duration-[500ms] ease-in-out`}
        >
          <span className="text-[25px] leading-none">𝕏</span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className={`${iconLink} ${contactStep === 1 ? "motion-safe:-translate-y-2 motion-safe:scale-125" : ""} transition-[translate,scale,background-color,color] duration-[500ms] ease-in-out`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-[21px]"
            fill="currentColor"
          >
            <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
          </svg>
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email Paul"
          title={profile.email}
          className={`${iconLink} ${contactStep === 2 ? "motion-safe:-translate-y-2 motion-safe:scale-125" : ""} transition-[translate,scale,background-color,color] duration-[500ms] ease-in-out`}
        >
          <Mail size={21} strokeWidth={1.6} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className={`${iconLink} ${contactStep === 3 ? "motion-safe:-translate-y-2 motion-safe:scale-125" : ""} transition-[translate,scale,background-color,color] duration-[500ms] ease-in-out`}
        >
          <LinkedInIcon />
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          aria-label="View résumé"
          className={`${iconLink} ${contactStep === 4 ? "motion-safe:-translate-y-2 motion-safe:scale-125" : ""} transition-[translate,scale,background-color,color] duration-[500ms] ease-in-out`}
        >
          <FileUser size={22} strokeWidth={1.6} />
        </a>
        <span
          aria-hidden="true"
          className="mx-1 hidden h-6 w-px bg-neutral-100 sm:block dark:bg-neutral-800"
        />
        <button
          onClick={onToggleTheme}
          type="button"
          aria-label={dark ? "Use light theme" : "Use dark theme"}
          aria-pressed={dark}
          className={`${iconLink} cursor-pointer`}
        >
          {dark ? (
            <Moon size={21} strokeWidth={1.6} />
          ) : (
            <Sun size={21} strokeWidth={1.6} />
          )}
        </button>
        <a
          href={`mailto:${profile.email}?subject=Let’s%20discuss%20a%20project`}
          className="hidden h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-black bg-neutral-900 px-3 text-xs text-white shadow-[inset_0_0_0_2px_#ffffff0a] transition-colors hover:bg-neutral-700 sm:ml-1 sm:inline-flex sm:h-10 sm:px-5 sm:text-sm dark:border-neutral-700"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}
