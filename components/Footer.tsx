import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

export const Footer: React.FC = () => {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) {
      setActiveSection(null);
    } else if (latest < 0.4) {
      setActiveSection('socials');
    } else if (latest < 0.6) {
      setActiveSection('sitemap');
    } else if (latest < 0.8) {
      setActiveSection('location');
    } else {
      setActiveSection('time');
    }
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const footerSections = {
    socials: {
      label: "Socials",
      content: (
        <div className="flex flex-col items-center gap-4">
          {['Instagram', 'Twitter / X', 'LinkedIn'].map((item) => (
            <h3 key={item} className="font-serif-display text-4xl md:text-5xl text-[#EEECE7] hover:text-[#A88C5D] transition-colors cursor-pointer">
              {item}
            </h3>
          ))}
        </div>
      )
    },
    sitemap: {
      label: "Sitemap",
      content: (
        <div className="flex flex-col items-center gap-4">
          {['Selected Work', 'Capabilities', 'Process'].map((item) => (
            <h3 key={item} className="font-serif-display text-4xl md:text-5xl text-[#EEECE7] hover:text-[#A88C5D] transition-colors cursor-pointer">
              {item}
            </h3>
          ))}
        </div>
      )
    },
    location: {
      label: "Location",
      content: (
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-serif-display text-5xl md:text-7xl text-[#EEECE7]">Kyoto, Japan</h3>
          <p className="font-sans-ui text-[#A88C5D] text-lg tracking-widest mt-2">{`35.0116° N, 135.7681° E`}</p>
        </div>
      )
    },
    time: {
      label: "Local Time",
      content: (
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-variant-numeric tabular-nums font-serif-display text-6xl md:text-8xl text-[#EEECE7]">{time}</h3>
          <p className="font-sans-ui text-[#A88C5D] text-sm tracking-widest uppercase">Kyoto, Japan</p>
        </div>
      )
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-[#1C1C1C]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between">

        {/* Background & Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Background Watermark/Noise */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] select-none">
            <h1 className="text-[40vw] font-serif-display leading-none text-[#EEECE7]">S</h1>
          </div>
          {/* Decorative Blur */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#1C1C1C] to-transparent" />
        </div>

        {/* Main Content Area (Dynamic) */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col items-center justify-center flex-grow py-20 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeSection && footerSections[activeSection as keyof typeof footerSections] ? (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-6 text-center"
              >
                <span className="font-mono-ui text-[#A88C5D] text-xs uppercase tracking-[0.2em]">
                  {footerSections[activeSection as keyof typeof footerSections].label}
                </span>
                {footerSections[activeSection as keyof typeof footerSections].content}
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group cursor-pointer"
              >
                <div className="mb-6 flex flex-col items-center gap-2">
                  <span className="font-mono-ui text-[#A88C5D] text-xs uppercase tracking-[0.2em]">Inquiries</span>
                </div>

                <a href="mailto:solicate@pecup.in" className="block relative">
                  <h2 className="font-serif-display text-5xl md:text-[8vw] lg:text-[7vw] leading-[0.9] text-[#EEECE7]">
                    Start a<br />
                    <span className="text-[#A88C5D] italic opacity-80 group-hover:opacity-100 transition-opacity duration-500">Conversation</span>
                  </h2>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Grid (Bottom Fixed/Sticky within container) */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto border-t border-[#EEECE7]/10 pt-8 pb-12 px-6 md:px-20 mt-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-sans-ui text-sm tracking-wide text-[#EEECE7]/60">

            <div
              className="flex flex-col gap-3 transition-opacity duration-300"
              style={{ opacity: activeSection && activeSection !== 'socials' ? 0.3 : 1 }}
            >
              <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Socials</span>
              <ul className="flex flex-col gap-1">
                <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Twitter / X</a></li>
                <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">LinkedIn</a></li>
              </ul>
            </div>

            <div
              className="flex flex-col gap-3 transition-opacity duration-300"
              style={{ opacity: activeSection && activeSection !== 'sitemap' ? 0.3 : 1 }}
            >
              <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Sitemap</span>
              <ul className="flex flex-col gap-1">
                <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Selected Work</a></li>
                <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Capabilities</a></li>
                <li><a href="#" className="hover:text-[#A88C5D] transition-colors duration-300">Process</a></li>
              </ul>
            </div>

            <div
              className="flex flex-col gap-3 transition-opacity duration-300"
              style={{ opacity: activeSection && activeSection !== 'location' ? 0.3 : 1 }}
            >
              <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Location</span>
              <div className="flex flex-col">
                <span className="text-[#EEECE7]">Kyoto, Japan</span>
                <span>35.0116° N, 135.7681° E</span>
              </div>
            </div>

            <div
              className="flex flex-col gap-3 text-left md:text-right md:items-end transition-opacity duration-300"
              style={{ opacity: activeSection && activeSection !== 'time' ? 0.3 : 1 }}
            >
              <span className="text-[#EEECE7] uppercase tracking-widest text-[10px] opacity-40">Local Time</span>
              <p className="font-variant-numeric tabular-nums text-[#A88C5D] text-lg">{time}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mt-4 md:mt-auto">© 2024 Solicate. All Rights Reserved.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};