import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: 's1', title: 'Brand Architecture', description: 'Foundational narratives and visual systems.', image: 'https://picsum.photos/600/400?random=20' },
  { id: 's2', title: 'Spatial Design', description: 'Environments that breathe and react.', image: 'https://picsum.photos/600/400?random=21' },
  { id: 's3', title: 'Digital Experience', description: 'Websites as immersive art objects.', image: 'https://picsum.photos/600/400?random=22' },
  { id: 's4', title: 'Art Direction', description: 'Curating the visual soul of campaigns.', image: 'https://picsum.photos/600/400?random=23' },
];

export const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-32 bg-[#EEECE7] relative overflow-hidden">
       {/* Background Image Reveal */}
       <AnimatePresence>
        {hoveredService && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            {services.map(s => s.id === hoveredService && (
               <img key={s.id} src={s.image} alt="" className="w-full h-full object-cover grayscale" />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="mb-20">
          <span className="font-sans-ui text-[#A88C5D] uppercase tracking-widest text-sm">Capabilities</span>
        </div>

        <div>
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial="rest"
              whileHover="hover"
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group border-t border-[#2E2E2E]/20 py-12 cursor-pointer hover-trigger"
            >
              <div className="flex flex-col md:flex-row items-baseline justify-between">
                <motion.h3 
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 20 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="font-serif-display text-3xl md:text-5xl text-[#2E2E2E]"
                >
                  {service.title}
                </motion.h3>
                
                <div className="flex items-center gap-8 mt-4 md:mt-0">
                  <motion.p 
                    variants={{
                      rest: { opacity: 0.5 },
                      hover: { opacity: 1 }
                    }}
                    className="font-sans-ui text-[#2E2E2E] text-sm md:text-base max-w-xs"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div
                     variants={{
                      rest: { opacity: 0, x: -10 },
                      hover: { opacity: 1, x: 0 }
                    }}
                    className="w-8 h-8 rounded-full border border-[#2E2E2E] flex items-center justify-center"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#2E2E2E" strokeWidth="1"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#2E2E2E]/20" />
        </div>
      </div>
    </section>
  );
};