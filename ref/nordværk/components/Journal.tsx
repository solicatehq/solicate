import React from 'react';
import gsap from 'gsap';
import { JournalEntry } from '../types';

const entries: JournalEntry[] = [
  { id: 1, title: 'Silence as a Strategy', date: 'Oct 24', category: 'Thought', image: 'https://picsum.photos/600/800?random=10', description: 'Why removing noise creates value in digital spaces.' },
  { id: 2, title: 'The Winter Palette', date: 'Nov 10', category: 'Visuals', image: 'https://picsum.photos/600/600?random=11', description: 'Exploring the low-contrast beauty of Nordic light.' },
  { id: 3, title: 'System Architecture', date: 'Dec 05', category: 'Code', image: 'https://picsum.photos/600/900?random=12', description: 'Building resilient structures for the web.' },
  { id: 4, title: 'Object & Space', date: 'Jan 12', category: 'Design', image: 'https://picsum.photos/600/700?random=13', description: 'Defining the relationship between UI and environment.' },
];

export const Journal: React.FC = () => {

  return (
    <section className="py-32 px-6 md:px-24 bg-arctic-linen">
      <div className="flex justify-between items-end mb-24 border-b border-soft-pewter pb-6">
         <h2 className="font-display text-4xl text-nordic-charcoal">Journal</h2>
         <a href="#" className="text-xs uppercase tracking-widest hover:text-birchwood transition-colors">View All</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {entries.map((entry, index) => (
          <div 
            key={entry.id} 
            className={`flex flex-col gap-6 group interactive cursor-none ${index % 2 === 1 ? 'md:mt-32' : ''}`}
          >
            <div className="overflow-hidden bg-faded-stone/20 relative w-full">
              <img 
                src={entry.image} 
                alt={entry.title}
                className="w-full h-auto object-cover grayscale brightness-110 transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-nordic-charcoal/0 transition-colors duration-500 group-hover:bg-nordic-charcoal/5" />
            </div>
            
            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-nordic-charcoal/50">
                  <span>{entry.date}</span>
                  <span className="w-px h-3 bg-soft-pewter" />
                  <span>{entry.category}</span>
               </div>
               <h3 className="font-display text-2xl group-hover:text-glacier-blue transition-colors duration-300">
                  {entry.title}
               </h3>
               <p className="text-nordic-charcoal/70 font-light text-sm max-w-md">
                   {entry.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};