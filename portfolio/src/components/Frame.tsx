import type { ReactNode } from "react";

export function Frame({
  children,
  className = "",
  bottomCorners = false,
}: {
  children: ReactNode;
  className?: string;
  bottomCorners?: boolean;
}) {
  return (
    <section
      className={`relative border-x border-b border-neutral-200/80 dark:border-neutral-800 ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-px -top-px z-20 h-3 w-4 border-l border-t border-neutral-950 dark:border-neutral-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-px -top-px z-20 h-3 w-4 border-r border-t border-neutral-950 dark:border-neutral-100"
      />
      {children}
      {bottomCorners && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-px -top-3 z-20 h-[11px] border-l border-neutral-950 dark:border-neutral-100"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-px -top-3 z-20 h-[11px] border-r border-neutral-950 dark:border-neutral-100"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-px top-full z-20 h-[11px] -translate-y-3 border-l border-neutral-950 dark:border-neutral-100"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-px top-full z-20 h-[11px] -translate-y-3 border-r border-neutral-950 dark:border-neutral-100"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-px top-full z-20 h-3 w-4 -translate-y-px border-l border-t border-neutral-950 dark:border-neutral-100"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-px top-full z-20 h-3 w-4 -translate-y-px border-r border-t border-neutral-950 dark:border-neutral-100"
          />
        </>
      )}
    </section>
  );
}
