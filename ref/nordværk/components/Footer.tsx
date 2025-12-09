import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nordic-charcoal text-arctic-linen min-h-[80vh] flex flex-col justify-between px-6 md:px-24 py-16 relative overflow-hidden">
      
      {/* Decorative Line */}
      <div className="absolute top-0 left-6 right-6 md:left-24 md:right-24 h-px bg-glacier-blue/20" />

      {/* Main CTA */}
      <div className="flex-1 flex items-center justify-center">
        <a href="mailto:hello@nordvaerk.com" className="group relative interactive cursor-none">
          <h2 className="font-display text-5xl md:text-8xl lg:text-9xl tracking-tight text-center z-10 relative mix-blend-difference">
            Let's Work <br /> Together
          </h2>
          {/* Subtle underline animation */}
          <div className="h-0.5 w-0 bg-arctic-linen group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4 mx-auto opacity-50" />
        </a>
      </div>

      {/* Bottom Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-light text-arctic-linen/60">
        
        <div className="flex flex-col gap-2">
          <span className="text-arctic-linen opacity-40 uppercase tracking-widest text-xs mb-2">Office</span>
          <p>Kronprinsessegade 8B</p>
          <p>1306 Copenhagen K</p>
          <p>Denmark</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-arctic-linen opacity-40 uppercase tracking-widest text-xs mb-2">Social</span>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Instagram <ArrowUpRight size={12}/></a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight size={12}/></a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Are.na <ArrowUpRight size={12}/></a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
           <span className="text-arctic-linen opacity-40 uppercase tracking-widest text-xs mb-2">Conditions</span>
           <p className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-glacier-blue opacity-50 animate-pulse"></span>
             Copenhagen, -3°C, Light Wind
           </p>
           <p>© {new Date().getFullYear()} Nordværk</p>
        </div>

      </div>
    </footer>
  );
};