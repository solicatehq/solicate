import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const steps = [
  { label: 'Listen', desc: 'Deep immersion in the problem space.' },
  { label: 'Define', desc: 'Isolating the core truth.' },
  { label: 'Shape', desc: 'Exploration of form and function.' },
  { label: 'Build', desc: 'Rigorous engineering.' },
  { label: 'Refine', desc: 'Polishing until silence.' },
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const line = lineRef.current;
      if (!line) return;

      const length = line.getTotalLength();
      
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(line, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;
        
        gsap.fromTo(dot, 
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            scrollTrigger: {
              trigger: containerRef.current,
              // Calculate rough percentage based on index
              start: `top+=${index * 20}% center`,
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen py-32 px-6 md:px-24 bg-arctic-linen flex flex-col items-center justify-center relative">
       <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-nordic-charcoal/50">
            Process
        </div>

      <div className="relative w-full max-w-5xl h-[80vh] flex flex-col md:flex-row justify-between items-center">
        
        {/* SVG Path Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none visible md:invisible" preserveAspectRatio="none">
           {/* Vertical line for mobile */}
           <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#E1E0DC" strokeWidth="1" />
        </svg>

        <svg className="absolute inset-0 w-full h-full pointer-events-none invisible md:visible">
          {/* Horizontal wavy line for desktop */}
          <path 
            ref={lineRef}
            d="M 0,300 C 200,300 200,100 400,100 S 600,500 800,500 S 1100,300 1200,300" 
            fill="none" 
            stroke="#1F1F1F" 
            strokeWidth="1"
            className="w-full"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative z-10 flex flex-col items-center md:items-start group w-64 text-center md:text-left my-8 md:my-0"
            // Simple inline positioning for demo, in production calculate positions along path
            style={{ 
                marginTop: index % 2 === 0 ? '0' : '200px', // Alternating height on desktop
            }}
          >
             {/* The Dot */}
            <div className="relative mb-4 md:mb-6 flex justify-center md:justify-start w-full">
                <svg width="12" height="12" className="overflow-visible">
                    <circle 
                        ref={(el) => { dotsRef.current[index] = el; }}
                        cx="6" cy="6" r="4" 
                        className="fill-arctic-linen stroke-nordic-charcoal stroke-2"
                    />
                     {/* Pulse effect */}
                    <circle 
                        cx="6" cy="6" r="12" 
                        className="fill-birchwood/20 scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 origin-center"
                    />
                </svg>
            </div>

            <h3 className="font-display text-lg tracking-wide mb-2 transition-transform duration-300 group-hover:-translate-y-1">{step.label}</h3>
            <p className="text-sm text-nordic-charcoal/60 font-light opacity-0 translate-y-2 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                {step.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};