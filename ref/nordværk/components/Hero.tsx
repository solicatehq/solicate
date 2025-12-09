import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entry
      const tl = gsap.timeline();

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.2 }
      ).fromTo(
        lineRef.current,
        { height: '0%' },
        { height: '100%', duration: 1.5, ease: 'power2.inOut' },
        '-=1'
      );

      // Scroll Interaction
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (lineRef.current) {
            // Rotate line from vertical (0deg) to horizontal (90deg)
            gsap.set(lineRef.current, {
              rotate: progress * 90,
              height: `${100 - progress * 99}%`, // Shrink height as it rotates if needed, or keep 100% and scale
              width: `${Math.max(1, progress * 100)}%`, // Grow width
              y: progress * 200 // Move down slightly
            });
          }
          
          if (imgRef.current) {
            gsap.set(imgRef.current, {
              opacity: progress * 1,
              scale: 0.9 + (progress * 0.1),
            });
          }

          if (textRef.current) {
             gsap.set(textRef.current, {
                opacity: 1 - progress * 2,
                y: -progress * 100
             })
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full flex flex-col items-center">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Project Image Revealed */}
        <div 
            ref={imgRef} 
            className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 pointer-events-none"
        >
             <div className="w-[80%] h-[70%] bg-cover bg-center grayscale contrast-[0.9] brightness-[1.1]" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale)' }} />
             <div className="absolute inset-0 bg-arctic-linen/20"></div>
        </div>

        {/* Brand Name */}
        <h1 
          ref={textRef} 
          className="font-display text-4xl md:text-6xl tracking-[0.2em] uppercase text-nordic-charcoal z-10"
        >
          Nordværk
        </h1>

        {/* The Line */}
        <div 
          ref={lineRef} 
          className="absolute top-0 w-px bg-soft-pewter z-20 origin-center"
        />
      </div>
    </section>
  );
};