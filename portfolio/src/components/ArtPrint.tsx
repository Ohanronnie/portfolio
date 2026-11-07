import pushpin from "../assets/pushpin.svg";
import { useState } from "react";

export function ArtPrint({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className: string;
}) {
  const [selected, setSelected] = useState(false);
  return (
    <button
      type="button"
      aria-label={`Inspect art print: ${alt}`}
      aria-pressed={selected}
      onClick={() => setSelected((current) => !current)}
      className={`absolute w-[52%] cursor-pointer origin-top bg-white px-2 pb-3 pt-8 shadow-[5px_14px_22px_#00000026] transition-transform duration-500 hover:z-20 hover:rotate-0 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[1.02] sm:px-3 sm:pb-4 sm:pt-11 dark:bg-neutral-200 motion-reduce:transition-none ${className} ${selected ? "z-20 !rotate-0 !scale-[1.05]" : ""}`}
    >
      <img
        src={pushpin}
        alt=""
        aria-hidden="true"
        width="64"
        height="80"
        className="pointer-events-none absolute left-1/2 top-1 z-10 h-9 w-7 -translate-x-1/2 object-contain drop-shadow-[2px_3px_2px_#00000055] sm:h-12 sm:w-10"
      />
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width="1024"
        height="1536"
        className="aspect-[4/5] w-full object-cover"
      />
    </button>
  );
}
