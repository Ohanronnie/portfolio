import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/portfolio";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const hasLiveDemo = project.link && project.link !== "#";
  const slides = useMemo(() => {
    if (project.gallery?.length) return project.gallery;
    if (project.image) return [project.image];
    return [];
  }, [project.gallery, project.image]);

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current || slides.length === 0) return;
    const nextIndex = (index + slides.length) % slides.length;
    const slideWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({ left: nextIndex * slideWidth, behavior: "smooth" });
    setActiveSlide(nextIndex);
  };

  const onCarouselScroll = () => {
    if (!carouselRef.current || slides.length === 0) return;
    const position = carouselRef.current.scrollLeft / carouselRef.current.clientWidth;
    setActiveSlide(Math.round(position));
  };

  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#2D2D2D] font-sans pb-20">
      <main className="max-w-5xl mx-auto px-6 pt-16 sm:pt-20">
        <div className="mb-12 flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs tracking-widest border-b border-[#2D2D2D]/40 pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PROJECTS
          </Link>
          {hasLiveDemo ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs tracking-widest border-b border-[#2D2D2D]/50 pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300"
            >
              VISIT LIVE SITE
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : null}
        </div>

        <div className="mb-10">
          <p className="font-['JetBrains_Mono'] text-xs text-[#C65D3B] tracking-[0.22em] uppercase mb-3">
            Project Case Study
          </p>
          <h1 className="text-4xl sm:text-5xl font-['Plus_Jakarta_Sans'] font-bold leading-tight">{project.title}</h1>
        </div>

        {slides.length > 0 ? (
          <div className="mb-10">
            <div
              ref={carouselRef}
              onScroll={onCarouselScroll}
              className="overflow-x-auto rounded-2xl border border-[#2D2D2D]/10 bg-[#EAE5DC] flex snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {slides.map((image, index) => (
                <div key={image} className="min-w-full snap-center">
                  <div className="relative h-[72vh] md:h-[80vh] overflow-hidden">
                    <img
                      src={image}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F4F0E8]/35 via-[#F4F0E8]/15 to-[#F4F0E8]/60" />

                    <div className="relative h-full w-full flex items-center justify-center p-4 md:p-8">
                      <div className="rounded-[1.4rem] border border-[#2D2D2D]/15 bg-[#F8F5EE] p-2">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-auto h-[62vh] md:h-[70vh] object-contain rounded-[1rem] bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {slides.length > 1 ? (
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => scrollToSlide(activeSlide - 1)}
                  className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs tracking-widest border-b border-[#2D2D2D]/50 pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  PREV
                </button>

                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      onClick={() => scrollToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        index === activeSlide ? "bg-[#C65D3B] scale-110" : "bg-[#2D2D2D]/25 hover:bg-[#2D2D2D]/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scrollToSlide(activeSlide + 1)}
                  className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs tracking-widest border-b border-[#2D2D2D]/50 pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300"
                >
                  NEXT
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : null}
          </div>
        ) : null}

        <p className="text-[#2D2D2D]/80 leading-relaxed font-['Inter'] text-lg mb-10">{project.longDescription}</p>

        <div className="mb-10">
          <h2 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(item => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full border border-[#2D2D2D]/20 font-['JetBrains_Mono'] text-xs tracking-wider text-[#2D2D2D]/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {project.highlights?.length ? (
          <div>
            <h2 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map(point => (
                <li key={point} className="flex items-start gap-3 text-[#2D2D2D]/80 leading-relaxed font-['Inter']">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C65D3B]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </main>
    </div>
  );
}
