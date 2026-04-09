import { FileText, ChevronRight } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import profileImage from "../../titiloyepaul.png";
import resumePdf from "../../TitiloyePaul_CV.pdf";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col md:flex-row items-center py-20 gap-16 relative overflow-hidden">
      <div className="absolute top-20 right-0 font-['Plus_Jakarta_Sans'] text-[10rem] font-black text-[#2D2D2D]/2 select-none pointer-events-none -z-10 leading-none tracking-tighter">
        ENGINEER
      </div>

      <div className="w-full md:w-1/2 relative order-1 md:order-1">
        <div className="hero-badge font-['JetBrains_Mono'] text-xs tracking-[0.2em] text-[#C65D3B] mb-6 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C65D3B] animate-pulse" />
          AVAILABLE FOR HIRE
        </div>

        <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-['Plus_Jakarta_Sans'] font-bold leading-[0.95] tracking-tight mb-4">
          Full Stack<br/>
          Engineer.
        </h1>

        <p className="hero-subtitle text-3xl md:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-bold text-[#8a8a8a] leading-tight mb-8">
          Building Digital Products.
        </p>

        <p className="hero-bio font-['Inter'] text-lg md:text-xl text-[#2D2D2D]/80 leading-relaxed max-w-xl mb-10 border-l-2 border-[#C65D3B] pl-6 py-2">
          {portfolioData.bio} I build and ship products that solve real problems. My stack is chosen for speed, reliability, and maintainability.
        </p>

        <div className="hero-cta flex flex-wrap gap-4">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="group px-8 py-4 bg-[#2D2D2D] text-white font-['JetBrains_Mono'] text-xs tracking-[0.2em] hover:bg-[#C65D3B] transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-orange-500/20 hover:-translate-y-1 flex items-center gap-2"
          >
            LET'S TALK <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent border border-[#2D2D2D]/20 text-[#2D2D2D] font-['JetBrains_Mono'] text-xs tracking-[0.2em] hover:border-[#C65D3B] hover:text-[#C65D3B] transition-all duration-300 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" /> VIEW RESUME
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end order-0 md:order-2">
        <div className="hero-image relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] group">
          <div className="hero-border absolute top-4 right-4 w-full h-full border-2 border-[#C65D3B] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />

          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#2D2D2D] z-20 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-top-3 group-hover:-left-3" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#C65D3B] z-20 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-bottom-3 group-hover:-right-3" />

          <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-[#2D2D2D]/10 bg-[#EBE7DF]">
            <div className="absolute inset-0 z-10 opacity-20 bg-[linear-gradient(rgba(45,45,45,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(45,45,45,0.1)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

            <img
              src={profileImage}
              alt="Titiloye Paul - Full Stack Engineer"
              className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
