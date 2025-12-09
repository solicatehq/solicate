import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#2E2E2E] text-[#EEECE7] px-6 md:px-20 pt-32 pb-12 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-to-b from-[#EEECE7]/5 to-transparent blur-3xl pointer-events-none" />

      {/* CTA */}
      <div className="mb-32 text-center group">
        <span className="font-sans-ui text-[#A88C5D] text-sm uppercase tracking-widest mb-4 block">Inquiries</span>
        <a href="mailto:hello@solstice.studio" className="relative inline-block hover-trigger">
          <h2 className="font-serif-display text-6xl md:text-[10vw] leading-none mix-blend-overlay opacity-50 transition-opacity duration-500 group-hover:opacity-100">
            Start a<br />Conversation
          </h2>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-[1px] bg-[#A88C5D]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </a>
      </div>

      {/* Grid Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-[#EEECE7]/10 pt-12 font-sans-ui text-sm tracking-wide text-[#EEECE7]/60">
        
        <div className="flex flex-col gap-2">
          <span className="text-[#EEECE7] uppercase tracking-widest text-xs mb-2">Location</span>
          <p>Nakagyo Ward, Kyoto</p>
          <p>Japan 604-8000</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#EEECE7] uppercase tracking-widest text-xs mb-2">Connect</span>
          <a href="#" className="hover:text-[#A88C5D] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#A88C5D] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#A88C5D] transition-colors">Are.na</a>
        </div>

        <div className="flex flex-col gap-2">
           <span className="text-[#EEECE7] uppercase tracking-widest text-xs mb-2">Coordinates</span>
           <p>35.0116° N</p>
           <p>135.7681° E</p>
        </div>

        <div className="flex flex-col gap-2 md:text-right">
           <span className="text-[#EEECE7] uppercase tracking-widest text-xs mb-2">Kyoto Time</span>
           <p className="font-variant-numeric tabular-nums text-[#A88C5D]">{time}</p>
        </div>

      </div>
      
      <div className="mt-24 text-center text-[#EEECE7]/20 text-[10px] uppercase tracking-[0.2em]">
        © Solstice 2024. All Rights Reserved.
      </div>
    </footer>
  );
};