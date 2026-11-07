import { BookOpen, Bot, Infinity, Send, Sparkles } from "lucide-react";
import { Frame } from "./Frame";

export function LogoStrip() {
  return (
    <Frame bottomCorners className="border-t">
      <div
        aria-label="Reference brand logos"
        className="flex min-h-[119px] flex-wrap items-center justify-center gap-x-10 gap-y-7 px-5 py-8 text-neutral-600 sm:justify-between lg:flex-nowrap lg:gap-8 lg:overflow-hidden lg:px-0 dark:text-neutral-400"
      >
        <span className="text-xl font-extrabold tracking-[-1px]">
          sbox<sup className="align-super text-[5px] tracking-normal">24</sup>
        </span>
        <span className="inline-flex items-start text-lg font-bold tracking-[-1px]">
          Logipad
          <Send size={18} fill="currentColor" className="ml-1 -rotate-12" />
        </span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap text-base tracking-[3px]">
          <Infinity size={31} strokeWidth={1.5} />
          <b>STUDIO</b>
          <span className="font-light">TRAVEL</span>
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[5px]">
          <BookOpen size={27} strokeWidth={1.7} />
          EYKKON
        </span>
        <span className="whitespace-nowrap font-serif text-xl italic font-semibold tracking-[-1px]">
          Chick-fil-A
        </span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap text-[24px] font-extrabold tracking-[-1.5px]">
          <Sparkles size={21} fill="currentColor" />
          kapag9
        </span>
        <Bot size={28} strokeWidth={2.5} aria-label="Robot brand mark" />
      </div>
    </Frame>
  );
}
