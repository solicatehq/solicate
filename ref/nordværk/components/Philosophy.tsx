import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      // The effect: Text starts as outline (stroke), and fills in (background-clip)
      // We animate the background-size/position of a gradient overlay.
      
      gsap.to(textRef.current, {
        backgroundImage: 'linear-gradient(90deg, #1F1F1F 0%, #1F1F1F 100%)',
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 75%',
          scrub: 1,
        }
      });

      if (dotRef.current) {
        gsap.fromTo(dotRef.current, 
            { scale: 0, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 0.5,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "end 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center px-6 md:px-24 py-24 bg-arctic-linen">
      <div className="max-w-5xl">
        <p 
          className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(90deg, #1F1F1F 0%, #1F1F1F 100%)',
            backgroundSize: '0% 100%',
            backgroundRepeat: 'no-repeat',
            // Fallback/base style is outline
            WebkitTextStroke: '1px #E1E0DC',
          }}
          ref={textRef}
        >
          We make digital systems that feel as honest as the materials that shape them
          <span ref={dotRef} className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full bg-birchwood ml-2 mb-1 md:mb-2 align-baseline" />
        </p>
      </div>
    </section>
  );
};