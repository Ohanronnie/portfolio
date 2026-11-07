import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { Portrait } from "./Portrait";

export function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section aria-label="Introduction">
      <div className="grid items-start gap-10 py-8 sm:p-[50px] lg:min-h-[572px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
        <div className="min-w-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e5fbdd] px-5 py-2 text-[13px] text-[#14660b] sm:text-sm">
            <span className="size-1.5 rounded-full bg-[#28851a] shadow-[0_0_5px_#71bd52]" />
            Available for hire
          </div>
          <h1 className="mb-7 text-[clamp(32px,5vw,48px)] font-semibold leading-[1.4] tracking-[-0.035em] lg:text-[46px]">
            {profile.headline.map((line) => (
              <span className="block" key={line}>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {line[0]}
                </span>
                {line.slice(1)}
              </span>
            ))}
          </h1>
          <p className="mb-8 text-[15px] font-normal leading-[1.75] tracking-[-0.025em] text-neutral-600 sm:text-base dark:text-neutral-400">
            {profile.introduction}
          </p>
          <div className="grid grid-cols-2 items-center gap-3 sm:flex sm:gap-5">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black bg-neutral-900 px-3 text-xs text-white shadow-[inset_0_0_0_2px_#ffffff0a] transition-colors hover:bg-neutral-700 sm:gap-3 sm:px-6 sm:text-sm dark:border-neutral-700"
            >
              Contact Me{" "}
              <Mail size={20} strokeWidth={1.5} className="size-4 sm:size-5" />
            </button>
            <a
              href="#story"
              className="inline-flex items-center justify-center h-12 cursor-pointer whitespace-nowrap rounded-full border border-neutral-100 px-3 text-xs shadow-[0_0_0_1px_#00000002] transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-7 sm:text-sm dark:border-neutral-800 dark:hover:bg-neutral-900"
            >
              About Me
            </a>
          </div>
        </div>
        <div className="hidden min-w-0 md:block">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
