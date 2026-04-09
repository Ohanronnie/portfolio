import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectsSection } from "../components/portfolio";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#2D2D2D] font-sans pb-20">
      <main className="max-w-7xl mx-auto px-6 pt-16 sm:pt-20">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs tracking-widest border-b border-[#2D2D2D]/40 pb-1 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </Link>
          <p className="mt-5 font-['Inter'] text-[#2D2D2D]/70 max-w-2xl">
            Browse all projects. Open any card to view the full breakdown, stack, and links.
          </p>
        </div>

        <ProjectsSection title="All Projects" />
      </main>
    </div>
  );
}
