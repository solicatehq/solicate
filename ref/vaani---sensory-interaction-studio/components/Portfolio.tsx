import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project, CursorType } from '../types';

interface PortfolioProps {
    setCursorType: (type: CursorType) => void;
}

const ProjectCard: React.FC<{ project: Project; index: number; setCursorType: (type: CursorType) => void }> = ({ project, index, setCursorType }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.6]);

    return (
        <div ref={cardRef} className="h-screen w-full flex flex-col md:flex-row items-center border-b border-whisper last:border-0 relative overflow-hidden">
            {/* Image Section */}
            <div 
                className="w-full md:w-2/3 h-[70vh] md:h-full relative overflow-hidden group"
                onMouseEnter={() => setCursorType(CursorType.VIEW)}
                onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
            >
                 <motion.div style={{ y }} className="w-full h-[120%] absolute top-[-10%] left-0">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[2px]" 
                    />
                 </motion.div>
                 <div className="absolute inset-0 bg-slate/10 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Info Section */}
            <motion.div 
                style={{ opacity }}
                className="w-full md:w-1/3 p-8 md:p-16 flex flex-col justify-center h-[30vh] md:h-full bg-vapor z-10"
            >
                <span className="font-sans text-xs text-copper mb-4">0{index + 1} / {PROJECTS.length}</span>
                <h3 className="font-serif text-3xl md:text-5xl text-slate mb-2">{project.title}</h3>
                <p className="font-sans text-sm text-slate/60 uppercase tracking-widest mb-8">{project.category}</p>
                <div className="w-12 h-[1px] bg-slate/20" />
                <span className="font-sans text-xs text-slate/40 mt-8">{project.year}</span>
            </motion.div>
        </div>
    )
}

const Portfolio: React.FC<PortfolioProps> = ({ setCursorType }) => {
  return (
    <section className="w-full bg-vapor">
        {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} setCursorType={setCursorType} />
        ))}
    </section>
  );
};

export default Portfolio;