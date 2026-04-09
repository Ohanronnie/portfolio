import { Github, Linkedin, Twitter, Menu, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useScrollReveal";

interface NavbarProps {
  onMenuOpen: () => void;
}

const NAV_SECTIONS = ["hero", "projects", "experience"];

export function Navbar({ onMenuOpen }: NavbarProps) {
  const activeSection = useActiveSection(NAV_SECTIONS);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (id: string) => {
    const isActive = activeSection === id || (id === "hero" && !activeSection);
    return `relative group transition-colors ${
      isActive ? "text-[#C65D3B]" : "hover:text-[#C65D3B]"
    }`;
  };

  const dotClass = (id: string) => {
    const isActive = activeSection === id || (id === "hero" && !activeSection);
    return `absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C65D3B] rounded-full transition-opacity ${
      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    }`;
  };

  return (
    <>
      <nav
        className={`nav-enter sticky top-0 z-30 px-6 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#F4F0E8]/90 backdrop-blur-lg shadow-sm shadow-black/3 border-b border-[#2D2D2D]/5"
            : "py-8 bg-[#F4F0E8]/80 backdrop-blur-md border-b border-[#2D2D2D]/5"
        }`}
      >
        <a href="#hero" className="flex flex-col leading-none font-['Plus_Jakarta_Sans'] font-bold text-3xl tracking-tight group cursor-pointer">
          <div className="flex gap-3 group-hover:text-[#C65D3B] transition-colors duration-300">
            <span>TITILOYE</span>
            <span>PAUL</span>
          </div>
          <span className="text-[#2D2D2D]/50 group-hover:text-[#2D2D2D] transition-colors duration-300 text-sm font-medium tracking-widest mt-1">
            {portfolioData.role.toUpperCase()}
          </span>
        </a>

        <div className="hidden md:flex gap-10 font-['JetBrains_Mono'] text-sm tracking-widest font-medium text-[#2D2D2D]/60">
          <a href="#hero" className={navLinkClass("hero")}>
            HOME
            <span className={dotClass("hero")} />
          </a>
          <a href="#projects" className={navLinkClass("projects")}>
            PROJECTS
            <span className={dotClass("projects")} />
          </a>
          <a href="#experience" className={navLinkClass("experience")}>
            EXPERIENCE
            <span className={dotClass("experience")} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-3 text-[#2D2D2D]">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#C65D3B] hover:-translate-y-0.5 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C65D3B] hover:-translate-y-0.5 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#C65D3B] hover:-translate-y-0.5 transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="hidden sm:block px-5 py-2 rounded-full border border-[#2D2D2D] text-xs font-['JetBrains_Mono'] tracking-widest hover:bg-[#C65D3B] hover:border-[#C65D3B] hover:text-white transition-all duration-300"
          >
            INBOX ME
          </a>

          <button
            onClick={onMenuOpen}
            className="md:hidden p-2 hover:bg-[#2D2D2D]/10 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-40 p-3 bg-[#2D2D2D] text-white rounded-full shadow-lg shadow-black/10 hover:bg-[#C65D3B] transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
