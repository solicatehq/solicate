import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JournalEntry } from '../types';

const entries: JournalEntry[] = [
  { id: 'j1', title: 'The Silence of Stone', type: 'Essay', date: 'Oct 12', excerpt: 'Why permanence matters in a digital age.' },
  { id: 'j2', title: 'Kyoto Morning', type: 'Visual', date: 'Oct 08', image: 'https://picsum.photos/600/800?random=30' },
  { id: 'j3', title: 'Light as Material', type: 'Essay', date: 'Sep 29', excerpt: 'Exploring the intangibles of spatial design.' },
  { id: 'j4', title: 'Studio Process', type: 'Visual', date: 'Sep 15', image: 'https://picsum.photos/600/800?random=31' },
  { id: 'j5', title: 'Future Artifacts', type: 'Essay', date: 'Aug 30', excerpt: 'Designing for archeologists of the future.' },
];

export const Journal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [100, -200]);

  const leftColumn = entries.filter((_, i) => i % 2 === 0);
  const rightColumn = entries.filter((_, i) => i % 2 !== 0);

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-20 bg-[#EEECE7] overflow-hidden">
      <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-nordic-charcoal/50 z-20">
        Journal
      </div>
      <div className="flex justify-between items-baseline mb-24 border-b border-[#2E2E2E]/10 pb-8">
        <h2 className="font-serif-display text-5xl md:text-7xl text-[#2E2E2E]">Journal</h2>
        <span className="font-sans-ui text-[#2E2E2E]/60 hidden md:block">Thoughts & Fragments</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
        {/* Left Column - Slow */}
        <motion.div style={{ y: yLeft }} className="flex flex-col gap-16">
          {leftColumn.map(entry => (
            <JournalCard key={entry.id} entry={entry} />
          ))}
        </motion.div>

        {/* Right Column - Fast */}
        <motion.div style={{ y: yRight }} className="flex flex-col gap-16 md:mt-32">
          {rightColumn.map(entry => (
            <JournalCard key={entry.id} entry={entry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const JournalCard: React.FC<{ entry: JournalEntry }> = ({ entry }) => {
  return (
    <div className="group cursor-pointer hover-trigger">
      {entry.image ? (
        <div className="overflow-hidden mb-6 bg-[#DCD9D3]">
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 sepia-[0.3] group-hover:sepia-0"
          />
        </div>
      ) : (
        <div className="mb-6 pt-12 border-t border-[#2E2E2E]/20">
          <p className="font-serif-display text-2xl md:text-3xl leading-snug text-[#2E2E2E] group-hover:text-[#A88C5D] transition-colors">
            "{entry.excerpt}"
          </p>
        </div>
      )}
      <div className="flex justify-between items-baseline">
        <h3 className="font-sans-ui font-medium text-lg text-[#2E2E2E]">{entry.title}</h3>
        <div className="flex gap-4 font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest">
          <span>{entry.type}</span>
          <span>{entry.date}</span>
        </div>
      </div>
    </div>
  );
};