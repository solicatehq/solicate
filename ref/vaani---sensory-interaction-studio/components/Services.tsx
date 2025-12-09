import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CursorType } from '../types';

interface ServicesProps {
    setCursorType: (type: CursorType) => void;
}

const SERVICES = [
    { id: 'installations', title: 'Brand Installations', desc: 'Immersive physical environments.' },
    { id: 'identity', title: 'Sound Identity', desc: 'Sonic logos and auditory systems.' },
    { id: 'interactives', title: 'Digital Interactives', desc: 'Web and spatial computing.' },
];

const Services: React.FC<ServicesProps> = ({ setCursorType }) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-slate text-vapor py-32 relative overflow-hidden flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
          {activeService === 'installations' && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-copper via-transparent to-transparent animate-pulse-slow" />
          )}
          {activeService === 'identity' && (
               <div className="absolute inset-0 flex items-center justify-center space-x-1">
                   {[...Array(20)].map((_, i) => (
                       <motion.div 
                        key={i} 
                        className="w-4 bg-teal/30"
                        animate={{ height: [20, Math.random() * 300, 20] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                       />
                   ))}
               </div>
          )}
          {activeService === 'interactives' && (
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
          )}
      </div>

      <div className="container mx-auto px-4 md:px-20 z-10">
          <div className="border-t border-white/10">
            {SERVICES.map((service) => (
                <div 
                    key={service.id}
                    className="group relative border-b border-white/10 py-16 md:py-24 cursor-none"
                    onMouseEnter={() => {
                        setActiveService(service.id);
                        setCursorType(CursorType.HOVER);
                    }}
                    onMouseLeave={() => {
                        setActiveService(null);
                        setCursorType(CursorType.DEFAULT);
                    }}
                >
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between transition-opacity duration-500 group-hover:opacity-100 opacity-60">
                        <h2 className="font-serif text-5xl md:text-7xl group-hover:translate-x-4 transition-transform duration-700 ease-out">
                            {service.title}
                        </h2>
                        <span className="font-sans text-sm uppercase tracking-widest mt-4 md:mt-0 text-copper opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {service.desc}
                        </span>
                    </div>

                    {/* Curtain Reveal */}
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: activeService === service.id ? '100%' : '0%' }}
                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/5 to-transparent -z-10 pointer-events-none"
                    />
                </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Services;