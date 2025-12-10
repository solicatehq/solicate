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
    <footer
      className="bg-[#1C1C1C] text-[#EEECE7] w-full min-h-[500px] flex flex-col justify-between relative overflow-hidden pt-24 px-6 md:px-20 pb-12"
      style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%)' }}
    >
      {/* Background Watermark/Noise */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[40vw] font-serif-display leading-none text-[#EEECE7]">S</h1>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#1C1C1C] to-transparent z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col items-center justify-center flex-grow py-20">

        <div className="text-center group cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex flex-col items-center gap-2"
          >
            <span className="font-mono-ui text-[#A88C5D] text-xs uppercase tracking-[0.2em]">Inquiries</span>
          </motion.div>

          <a href="mailto:hello@solstice.studio" className="block relative">
            <h2 className="font-serif-display text-5xl md:text-[8vw] lg:text-[7vw] leading-[0.9] text-[#EEECE7]">
              Start a<br />
              <span className="text-[#A88C5D] italic opacity-80 group-hover:opacity-100 transition-opacity duration-500">Conversation</span>
            </h2>
          </a>
        </div>

      </div>

      {/* Footer Grid */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto border-t border-[#EEECE7]/10 pt-8 mt-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-sans-ui text-sm tracking-wide text-[#EEECE7]/60">

          <div className="flex flex-col gap-3">
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Socials</span>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Twitter / X</a></li>
              <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">LinkedIn</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Sitemap</span>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Selected Work</a></li>
              <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Capabilities</a></li>
              <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Process</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Location</span>
            <div className="flex flex-col">
              <span className="text-[#EEECE7]">Kyoto, Japan</span>
              <span>35.0116° N, 135.7681° E</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-left md:text-right md:items-end">
            <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Local Time</span>
            <p className="font-variant-numeric tabular-nums text-[#A88C5D] text-lg">{time}</p>
            <p className="text-[10px] uppercase tracking-widest opacity-40 mt-4 md:mt-auto">© 2024 Solstice. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};