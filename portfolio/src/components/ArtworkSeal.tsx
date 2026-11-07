import { useId } from "react";
import artwork from "../assets/obsidian-sculpture.jpg";

export function ArtworkSeal() {
  const id = useId();
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="size-20 shrink-0 text-neutral-400 sm:size-24 dark:text-neutral-500"
    >
      <defs>
        <path id={`${id}-ring`} d="M50 8a42 42 0 1 1-.01 0" />
        <clipPath id={`${id}-portrait`}>
          <circle cx="50" cy="50" r="29" />
        </clipPath>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="currentColor"
        fillOpacity=".12"
        stroke="currentColor"
        strokeWidth=".6"
      />
      <circle
        cx="50"
        cy="50"
        r="33"
        fill="none"
        stroke="currentColor"
        strokeWidth=".6"
      />
      <image
        href={artwork}
        x="21"
        y="21"
        width="58"
        height="58"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${id}-portrait)`}
      />
      <text
        fill="currentColor"
        fontFamily="Manrope, sans-serif"
        fontSize="5.7"
        letterSpacing="1.5"
      >
        <textPath href={`#${id}-ring`} textLength="262" lengthAdjust="spacing">
          LET’S BUILD • IDEAS INTO REALITY • LET’S BUILD •
        </textPath>
      </text>
    </svg>
  );
}
