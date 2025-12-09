import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    const onHoverStart = () => setIsHovering(true);
    const onHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    
    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    // Mutation observer to handle dynamically added elements
    const observer = new MutationObserver(() => {
        const els = document.querySelectorAll('a, button, .interactive');
        els.forEach((el) => {
            el.removeEventListener('mouseenter', onHoverStart); // avoid dupes
            el.removeEventListener('mouseleave', onHoverEnd);
            el.addEventListener('mouseenter', onHoverStart);
            el.addEventListener('mouseleave', onHoverEnd);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (isHovering) {
      gsap.to(cursor, {
        scale: 0.5,
        backgroundColor: 'rgba(31, 31, 31, 1)', // Solid charcoal
        mixBlendMode: 'normal',
        duration: 0.3,
      });
    } else {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        border: '1px solid rgba(31, 31, 31, 0.4)',
        mixBlendMode: 'difference',
        duration: 0.3,
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ border: '1px solid rgba(31, 31, 31, 0.4)' }}
    />
  );
};