import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  { id: '01', title: 'Aether House', year: '2023', category: 'Spatial', image: 'https://picsum.photos/800/1000?random=1' },
  { id: '02', title: 'Mono Form', year: '2024', category: 'Branding', image: 'https://picsum.photos/800/1000?random=2' },
  { id: '03', title: 'Silent Light', year: '2023', category: 'Installation', image: 'https://picsum.photos/800/1000?random=3' },
  { id: '04', title: 'Void & Dust', year: '2022', category: 'Digital', image: 'https://picsum.photos/800/1000?random=4' },
  { id: '05', title: 'Kyoto Echo', year: '2024', category: 'Film', image: 'https://picsum.photos/800/1000?random=5' },
];

export const Works: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#EEECE7]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-12 md:px-32">
          
          {/* Header Card */}
          <div className="flex flex-col justify-center min-w-[30vw] md:min-w-[20vw]">
            <span className="font-sans-ui text-[#A88C5D] uppercase tracking-widest text-sm mb-4">Selected Works</span>
            <h2 className="font-serif-display text-5xl md:text-7xl text-[#2E2E2E]">
              Our<br/>Orbit
            </h2>
          </div>

          {projects.map((project) => (
            <div key={project.id} className="relative group min-w-[80vw] md:min-w-[40vw] h-[60vh] md:h-[70vh] flex flex-col hover-trigger">
              <div className="relative w-full h-full overflow-hidden bg-[#DCD9D3]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 sepia-[0.2]"
                />
              </div>
              <div className="flex justify-between items-end mt-6 border-t border-[#2E2E2E]/20 pt-4">
                <div>
                  <h3 className="font-serif-display text-2xl md:text-3xl text-[#2E2E2E]">{project.title}</h3>
                  <span className="font-sans-ui text-[#58604B] text-sm mt-1 block">{project.category}</span>
                </div>
                <span className="font-sans-ui text-[#2E2E2E] opacity-60 text-sm">{project.year}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};