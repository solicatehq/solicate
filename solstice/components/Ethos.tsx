import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface EthosProps {
  text?: string;
}

export const Ethos: React.FC<EthosProps> = ({
  text = "We shape ideas that linger like echoes in quiet rooms."
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = text.split(" ");

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-6 md:px-20 py-24 bg-[#EEECE7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif-display text-4xl md:text-7xl lg:text-8xl leading-[1.1] text-[#2E2E2E]/10 flex flex-wrap gap-x-4 md:gap-x-8">
          {words.map((word, i) => {
            // Stagger the fill effect based on word index and scroll progress
            const start = i / words.length;
            const end = start + (1 / words.length);
            const opacity = useTransform(scrollYProgress, [0.2 + (start * 0.5), 0.2 + (end * 0.5)], [0, 1]);

            return (
              <span key={i} className="relative">
                <span className="absolute inset-0 text-[#2E2E2E]/10 select-none">{word}</span>
                <motion.span
                  style={{ opacity }}
                  className="relative text-[#2E2E2E]"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
};