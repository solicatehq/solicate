import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

export const Manifesto: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Stretch effect - Resonance
    const scaleY = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [1.2, 0.9, 1]);
    const color = useTransform(scrollYProgress, [0.4, 0.8], ["#2E2E2E", "#666666"]);
    const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["2px", "0px", "0px", "4px"]);

    return (
        <section ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center py-32 px-4 md:px-20 bg-[#EEECE7]">
            <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-nordic-charcoal/50 z-20">
                Manifesto
            </div>
            <div className="max-w-6xl w-full text-center">
                <motion.p
                    className="text-[4vw] md:text-[5.5vw] leading-[1.1] font-serif text-[#2E2E2E] hover-trigger cursor-none"
                    style={{ scaleY, color, filter: useMotionTemplate`blur(${blur})` }}
                >
                    We craft experiences that <br />
                    <span className="italic">vibrate</span> beneath the <br />
                    surface of everyday life.
                </motion.p>

                <div className="mt-24 flex justify-between items-end border-t border-[#2E2E2E]/10 pt-4">
                    <span className="font-sans text-xs uppercase tracking-widest text-[#2E2E2E]/50">Manifesto 001</span>
                    <span className="font-sans text-xs uppercase tracking-widest text-[#2E2E2E]/50">Scroll to Resonate</span>
                </div>
            </div>
        </section>
    );
};
