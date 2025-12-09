import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { CursorType } from '../types';

interface ManifestoProps {
    setCursorType: (type: CursorType) => void;
}

const Manifesto: React.FC<ManifestoProps> = ({ setCursorType }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Stretch effect
  const scaleY = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [1.2, 0.9, 1]);
  const color = useTransform(scrollYProgress, [0.4, 0.8], ["#2E3337", "#C49167"]); // Slate to Copper
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["2px", "0px", "0px", "4px"]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center py-32 px-4 md:px-20 bg-vapor">
      <div className="max-w-6xl w-full text-center">
        <motion.p 
            className="text-[4vw] md:text-[5.5vw] leading-[1.1] font-serif text-slate"
            style={{ scaleY, color, filter: useMotionTemplate`blur(${blur})` }}
            onMouseEnter={() => setCursorType(CursorType.HOVER)}
            onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
        >
          We craft experiences that <br/>
          <span className="italic">vibrate</span> beneath the <br/>
          surface of everyday life.
        </motion.p>
        
        <div className="mt-24 flex justify-between items-end border-t border-slate/10 pt-4">
             <span className="font-sans text-xs uppercase tracking-widest text-slate/50">Manifesto 001</span>
             <span className="font-sans text-xs uppercase tracking-widest text-slate/50">Scroll to Resonate</span>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;