import { Github, Linkedin, Twitter, Mail, X } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-[#F4F0E8] z-50 transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-[#2D2D2D]/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="mt-16 flex flex-col gap-6">
            <a 
              href="#" 
              onClick={onClose}
              className="font-['JetBrains_Mono'] text-lg tracking-widest font-medium text-[#2D2D2D] hover:text-[#C65D3B] transition-colors"
            >
              HOME
            </a>
            <a 
              href="#projects" 
              onClick={onClose}
              className="font-['JetBrains_Mono'] text-lg tracking-widest font-medium text-[#2D2D2D]/60 hover:text-[#C65D3B] transition-colors"
            >
              PROJECTS
            </a>
            <a 
              href="#experience" 
              onClick={onClose}
              className="font-['JetBrains_Mono'] text-lg tracking-widest font-medium text-[#2D2D2D]/60 hover:text-[#C65D3B] transition-colors"
            >
              EXPERIENCE
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#2D2D2D]/10">
            <p className="font-['JetBrains_Mono'] text-xs tracking-widest text-[#2D2D2D]/40 mb-4">CONNECT</p>
            <div className="flex gap-4">
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#C65D3B] hover:text-white rounded-lg transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#C65D3B] hover:text-white rounded-lg transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#C65D3B] hover:text-white rounded-lg transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="p-2 hover:bg-[#C65D3B] hover:text-white rounded-lg transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
