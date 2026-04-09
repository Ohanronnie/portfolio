import { portfolioData } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ServicesSection() {
  const heading = useScrollReveal();
  const grid = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="services">
      <div
        ref={heading.ref}
        className={`flex items-end justify-between mb-12 reveal ${heading.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-bold flex items-center gap-4">
          <span className="heading-line h-px bg-[#2D2D2D]" />
          What I Do
        </h2>
      </div>

      <div
        ref={grid.ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#2D2D2D]/10 divide-y md:divide-y-0 md:divide-x divide-[#2D2D2D]/10 bg-white/50 stagger-children ${grid.isVisible ? "visible" : ""}`}
      >
        {portfolioData.services?.map((service, i) => (
          <div key={i} className="group p-8 hover:bg-white transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Plus_Jakarta_Sans'] text-4xl font-black text-[#2D2D2D]/6">0{i + 1}</span>
              <h4 className="font-['JetBrains_Mono'] text-xs tracking-widest text-[#C65D3B] uppercase flex items-center gap-2">
                <span className="w-4 h-px bg-[#C65D3B] group-hover:w-8 transition-all duration-300" />
                {service.title}
              </h4>
            </div>
            <p className="text-[#2D2D2D]/70 text-sm leading-relaxed mb-6 font-['Inter']">
              {service.description}
            </p>
            <ul className="text-xs font-['JetBrains_Mono'] text-[#2D2D2D]/40 space-y-1.5">
              {service.stack?.map(item => (
                <li key={`${service.title}-${item}`} className="hover:text-[#2D2D2D]/70 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
