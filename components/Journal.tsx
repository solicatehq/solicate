import React, { useState } from 'react';
import { JournalEntry } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const entries: JournalEntry[] = [
  {
    id: 'j1',
    title: 'The Silence of Stone',
    type: 'Essay',
    date: 'Oct 12',
    excerpt: 'Why permanence matters in a digital age.',
    content: (
      <>
        <p className="mb-6">In an era of fleeting digital interactions, the permanence of stone serves as a grounding anchor. We look to historical architectures not just for aesthetic inspiration, but for their ability to withstand the test of time.</p>
        <p className="mb-6">Stone speaks a language of patience. It demands to be shaped with intention, resisting the quick fixes of modern construction. In our digital products, we strive for this same sense of weight and longevity.</p>
        <p>When we design interfaces, we ask ourselves: what is the digital equivalent of granite? How do we build systems that age gracefully, accumulating value rather than technical debt?</p>
      </>
    )
  },
  {
    id: 'j2',
    title: 'Kyoto Morning',
    type: 'Visual',
    date: 'Oct 08',
    image: 'https://picsum.photos/600/800?random=30',
    content: (
      <>
        <p className="mb-6">The light in Kyoto filters through washi paper, diffusing harsh realities into soft gradients. It is a reminder that clarity does not always mean sharpness.</p>
        <div className="grid grid-cols-2 gap-4 my-8">
          <img src="https://picsum.photos/400/600?random=101" className="w-full h-auto object-cover rounded-lg" />
          <img src="https://picsum.photos/400/600?random=102" className="w-full h-auto object-cover rounded-lg mt-8" />
        </div>
        <p>Our visual exploration this week focused on this interplay of shadow and light, attempting to capture the humidity and texture of a humid Japanese summer morning through color palettes and blur effects.</p>
      </>
    )
  },
  {
    id: 'j3',
    title: 'Light as Material',
    type: 'Essay',
    date: 'Sep 29',
    excerpt: 'Exploring the intangibles of spatial design.',
    content: (
      <>
        <p className="mb-6">James Turrell teaches us that light is not just a way to see things, but a thing itself. In user interface design, we often treat light (brightness, emission) as a utility. What if we treated it as a material?</p>
        <p>Manipulating the 'materiality' of screen luminescence allows us to create depth without skeuomorphism. It allows for a feeling of space within the flat glass rectangle.</p>
      </>
    )
  },
  {
    id: 'j4',
    title: 'Studio Process',
    type: 'Visual',
    date: 'Sep 15',
    image: 'https://picsum.photos/600/800?random=31',
    content: (
      <>
        <p className="mb-6">A look behind the scenes at our latest sprint. Chaos, coffee, and unexpected breakthroughs.</p>
        <div className="aspect-video w-full overflow-hidden rounded-xl my-6 bg-gray-100">
          <img src="https://picsum.photos/800/450?random=200" className="w-full h-full object-cover" />
        </div>
        <p>We've begun to document our failures as meticulously as our successes. The discard pile often holds the seeds of our next great idea.</p>
      </>
    )
  },
  {
    id: 'j5',
    title: 'Future Artifacts',
    type: 'Essay',
    date: 'Aug 30',
    excerpt: 'Designing for archeologists of the future.',
    content: (
      <>
        <p className="mb-6">If the internet crashed tomorrow and never came back, what would remain of our work? Digital archeology is a fascinating thought experiment.</p>
        <p>We are trying to design things that leave a trace. Not necessarily in code, but in culture. Memorable interactions are the artifacts of the 21st century.</p>
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
    <section id="journal" className="relative w-full bg-[#EEECE7] rounded-b-[3rem]">
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
              A collection of essays, rapid experiments, and visual notes from our studio practice.
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