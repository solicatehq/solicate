import React, { useState } from 'react';
import { JournalEntry } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const entries: JournalEntry[] = [
  {
    id: 'j1',
    title: 'Empathy Engines',
    type: 'Philosophy',
    date: 'Dec 20',
    excerpt: 'Why we simulate user frustration to build better paths.',
    content: (
      <>
        <p className="mb-6">Data tells us *what* happened. Empathy tells us *why*. We regularly conduct "frustration audits," where we intentionally stress-test our designs to find the breaking points of user patience.</p>
        <p className="mb-6">It's not enough to be functional. Software must be forgiving. It should understand that humans make mistakes, get distracted, and change their minds.</p>
        <p>Our goal is to build "Empathy Engines"—interfaces that anticipate user needs and offer help before it's asked for, turning potential friction into moments of connection.</p>
      </>
    )
  },
  {
    id: 'j2',
    title: 'Paper Prototypes',
    type: 'Process',
    date: 'Dec 08',
    image: 'https://picsum.photos/600/800?random=50',
    content: (
      <>
        <p className="mb-6">Before we write a single line of code, we draw. There is a directness to pencil on paper that pixels cannot replicate.</p>
        <div className="grid grid-cols-2 gap-4 my-8">
          <img src="https://picsum.photos/400/600?random=120" className="w-full h-auto object-cover rounded-lg" />
          <img src="https://picsum.photos/400/600?random=121" className="w-full h-auto object-cover rounded-lg mt-8" />
        </div>
        <p>This "low-fidelity" phase is crucial. It keeps us honest. Without the distraction of colors and shadows, we are forced to grapple with the raw flow and logic of the experience. We keep these sketches as a reminder of the human hand behind the digital curtain.</p>
      </>
    )
  },
  {
    id: 'j3',
    title: 'The warmth of noise',
    type: 'Design',
    date: 'Nov 25',
    excerpt: 'Adding texture to a flat digital world.',
    content: (
      <>
        <p className="mb-6">Digital perfection is cold. A perfect white background is sterile. We are experimenting with introducing subtle noise, grain, and organic imperfections into our UI surfaces.</p>
        <p>These textures mimic the physical world—paper, stone, canvas. They subconsciously signal to the user that this space was crafted, not just rendered. It brings a "human touch" to the cold glass of a smartphone screen.</p>
      </>
    )
  },
  {
    id: 'j4',
    title: 'Coffee Shop UX',
    type: 'Culture',
    date: 'Nov 12',
    image: 'https://picsum.photos/600/800?random=52',
    content: (
      <>
        <p className="mb-6">The best work doesn't always happen at a desk. We encourage our team to work from the "third places"—cafes, parks, libraries.</p>
        <div className="aspect-video w-full overflow-hidden rounded-xl my-6 bg-gray-100">
          <img src="https://picsum.photos/800/450?random=220" className="w-full h-full object-cover" />
        </div>
        <p>Observing people in these environments teaches us about real-world interruptions. How does an app perform when you're balancing a latte and a laptop? How readable is the text in sunlight? designing for the real world means being in it.</p>
      </>
    )
  },
  {
    id: 'j5',
    title: 'Conversations > Code',
    type: 'Strategy',
    date: 'Nov 03',
    excerpt: 'Why the best feature is often a conversation.',
    content: (
      <>
        <p className="mb-6">We often solve problems with more code. But sometimes, the solution is better copy, or a simpler explanation, or removing the feature entirely.</p>
        <p>We approach every technical challenge as a conversation. "What is the user trying to say?" "How should the system respond?" When we frame it this way, development becomes less about logic gates and more about language and listening.</p>
      </>
    )
  },
];

const JournalRow: React.FC<{
  entry: JournalEntry;
  index: number;
  onClick: () => void;
}> = ({ entry, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group border-b border-[#2E2E2E]/10 p-6 md:p-12 min-h-[50vh] flex flex-col justify-center transition-colors duration-500 hover:bg-[#E5E2DD] cursor-pointer`}
    >
      <div className="flex justify-between items-baseline mb-8">
        <span className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">0{index + 1}</span>
        <div className="flex gap-4 font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest">
          <span>{entry.type}</span>
          <span>{entry.date}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
        <div className="flex-1">
          <h3 className="font-serif-display text-3xl md:text-5xl text-[#2E2E2E] mb-4 group-hover:text-[#A88C5D] transition-colors duration-300">
            {entry.title}
          </h3>
          {entry.excerpt && (
            <p className="font-sans-ui text-base text-[#2E2E2E]/70 max-w-md">
              {entry.excerpt}
            </p>
          )}
        </div>

        {entry.image && (
          <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3] relative">
            {/* "Roll up" effect simulation with simple hover or just static for now, as sticky is the main feature */}
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const JournalOverlay: React.FC<{ entry: JournalEntry; onClose: () => void }> = ({ entry, onClose }) => {
  // Lock body scroll when overlay is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/20 backdrop-blur-sm"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="w-full md:w-[60vw] lg:w-[50vw] h-full bg-[#EEECE7] shadow-2xl overflow-y-auto p-8 md:p-16 flex flex-col relative overscroll-contain"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5 transition-colors"
        >
          <X size={24} className="text-[#2E2E2E]" />
        </button>

        <div className="mt-12 mb-8">
          <div className="flex gap-4 font-sans-ui text-xs text-[#2E2E2E]/50 uppercase tracking-widest mb-4">
            <span>{entry.type}</span>
            <span>{entry.date}</span>
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl text-[#2E2E2E] mb-8 leading-tight">
            {entry.title}
          </h2>

          {entry.image && (
            <div className="w-full aspect-video overflow-hidden rounded-lg mb-8">
              <img src={entry.image} alt={entry.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="font-sans-ui text-lg text-[#2E2E2E]/80 leading-relaxed max-w-2xl">
            {entry.content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Journal: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedEntry = entries.find(e => e.id === selectedId);

  return (
    <section id="journal" className="relative w-full bg-[#EEECE7]">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sticky Left Column */}
        <div className="w-full md:w-1/3 md:h-screen md:sticky md:top-0 p-6 md:p-12 flex flex-col justify-between border-r border-[#2E2E2E]/10">
          <div>
            <div className="text-xs uppercase tracking-widest text-nordic-charcoal/50 mb-4">
              Journal
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl text-[#2E2E2E] leading-tight max-w-sm">
              Thoughts & <br /><span className="italic text-[#A88C5D]">Fragments</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <p className="font-sans-ui text-sm text-[#2E2E2E]/60 max-w-xs">
              A collection of essays, rapid experiments, and visual notes from our agency practice.
            </p>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="w-full md:w-2/3">
          {entries.map((entry, index) => (
            <JournalRow
              key={entry.id}
              entry={entry}
              index={index}
              onClick={() => setSelectedId(entry.id)}
            />
          ))}

          {/* Footer spacer for the scrolling section */}
          <div className="h-32 flex items-center justify-center border-t border-[#2E2E2E]/10">
            <span className="font-sans-ui text-xs text-[#2E2E2E]/40 uppercase tracking-widest">End of Journal</span>
          </div>
        </div>
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedId && selectedEntry && (
          <JournalOverlay entry={selectedEntry} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};