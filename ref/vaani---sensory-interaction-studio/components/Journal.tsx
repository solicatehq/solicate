import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JOURNAL_ENTRIES } from '../constants';
import { JournalEntry, CursorType } from '../types';

interface JournalProps {
    setCursorType: (type: CursorType) => void;
}

const JournalCard: React.FC<{ entry: JournalEntry }> = ({ entry }) => (
    <div className="bg-white p-8 mb-8 shadow-sm hover:shadow-lg transition-shadow duration-500 border border-whisper group relative overflow-hidden">
        <div className="mb-6 flex justify-between items-start">
             <span className="text-[10px] uppercase tracking-widest text-copper border border-copper/20 px-2 py-1 rounded-full">
                {entry.type}
             </span>
             <span className="text-[10px] text-slate/40 font-sans">{entry.meta}</span>
        </div>
        <h3 className="font-serif text-2xl text-slate mb-4 group-hover:text-teal transition-colors">
            {entry.title}
        </h3>
        {entry.content && <p className="font-sans text-sm text-slate/60 leading-relaxed">{entry.content}</p>}
        
        {/* Sonic Scribble Border Effect */}
        <div className="absolute inset-0 border-2 border-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" />
    </div>
);

const Journal: React.FC<JournalProps> = ({ setCursorType }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Faster
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Fastest

    const col1 = JOURNAL_ENTRIES.slice(0, 3);
    const col2 = JOURNAL_ENTRIES.slice(3, 6);
    const col3 = JOURNAL_ENTRIES.slice(6, 9);

    return (
        <section ref={containerRef} className="bg-vapor py-32 px-4 md:px-12 min-h-screen overflow-hidden">
             <div className="mb-20 ml-4 md:ml-12">
                <h2 className="font-serif text-4xl text-slate">The Journal</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8" 
                  onMouseEnter={() => setCursorType(CursorType.DRAG)}
                  onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
             >
                 <motion.div style={{ y: y1 }} className="flex flex-col">
                    {col1.map(entry => <JournalCard key={entry.id} entry={entry} />)}
                 </motion.div>
                 <motion.div style={{ y: y2 }} className="flex flex-col pt-12 md:pt-24">
                    {col2.map(entry => <JournalCard key={entry.id} entry={entry} />)}
                 </motion.div>
                 <motion.div style={{ y: y3 }} className="flex flex-col pt-24 md:pt-48">
                    {col3.map(entry => <JournalCard key={entry.id} entry={entry} />)}
                 </motion.div>
             </div>
        </section>
    );
};

export default Journal;