import { Github, Linkedin, Twitter, Mail, ChevronRight, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function Footer() {
  const cta = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const links = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <footer className="pb-12 pt-24 border-t border-[#2D2D2D]/10">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
        <div
          ref={cta.ref}
          className={`lg:max-w-xl reveal ${cta.isVisible ? "visible" : ""}`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Plus_Jakarta_Sans'] font-bold leading-tight mb-8">
            Interest piqued?<br/>
            <span className="text-[#C65D3B] relative inline-block">
              Let's build together.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#C65D3B]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D2D2D] text-white font-['JetBrains_Mono'] text-xs tracking-[0.2em] hover:bg-[#C65D3B] transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-orange-500/20 hover:-translate-y-1 group"
          >
            <Mail className="w-4 h-4" />
            GET IN TOUCH
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div
          ref={links.ref}
          className={`flex flex-col sm:flex-row gap-12 lg:gap-16 stagger-children ${links.isVisible ? "visible" : ""}`}
        >
          <div>
            <p className="font-['JetBrains_Mono'] text-xs tracking-widest text-[#2D2D2D]/40 mb-6 uppercase">Connect</p>
            <div className="flex flex-col gap-4">
              {[
                { href: portfolioData.contact.github, icon: Github, label: "GITHUB" },
                { href: portfolioData.contact.linkedin, icon: Linkedin, label: "LINKEDIN" },
                { href: portfolioData.contact.twitter, icon: Twitter, label: "TWITTER" },
                { href: `mailto:${portfolioData.contact.email}`, icon: Mail, label: "EMAIL" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "EMAIL" ? "_blank" : undefined}
                  rel={label !== "EMAIL" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 font-['JetBrains_Mono'] text-sm tracking-widest hover:text-[#C65D3B] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                  <span className="border-b border-transparent group-hover:border-[#C65D3B] transition-colors duration-300">{label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-['JetBrains_Mono'] text-xs tracking-widest text-[#2D2D2D]/40 mb-6 uppercase">Navigate</p>
            <div className="flex flex-col gap-4">
              <a href="#hero" className="font-['JetBrains_Mono'] text-sm tracking-widest hover:text-[#C65D3B] transition-colors duration-300">HOME</a>
              <a href="#projects" className="font-['JetBrains_Mono'] text-sm tracking-widest hover:text-[#C65D3B] transition-colors duration-300">PROJECTS</a>
              <a href="#experience" className="font-['JetBrains_Mono'] text-sm tracking-widest hover:text-[#C65D3B] transition-colors duration-300">EXPERIENCE</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#2D2D2D]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-['JetBrains_Mono'] text-xs text-[#2D2D2D]/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-[#2D2D2D]/40">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest">AVAILABLE FOR WORK</span>
        </div>
      </div>
    </footer>
  );
}
