import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project-name'>('default');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for specific cursor variant data attribute
      const variant = target.getAttribute('data-cursor-variant');
      if (variant === 'project-name') {
        setCursorVariant('project-name');
        return;
      }

      // Check for standard interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={cursorVariant}
      variants={{
        default: {
          height: 32,
          width: 32,
          scale: 1,
          backgroundColor: 'transparent',
          border: '1px solid #2E2E2E',
          mixBlendMode: 'difference',
        },
        hover: {
          height: 32,
          width: 32,
          scale: 2.5,
          backgroundColor: 'rgba(238, 236, 231, 0.1)',
          border: '1px solid #2E2E2E',
          mixBlendMode: 'difference',
        },
        'project-name': {
          height: 48,
          width: 48,
          scale: 1,
          backgroundColor: '#2E2E2E',
          border: '1px solid #2E2E2E',
          mixBlendMode: 'normal',
        },
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <motion.div
        animate={cursorVariant}
        variants={{
          default: { opacity: 1, scale: 1 },
          hover: { opacity: 1, scale: 0.5 }, // maintain center dot but smaller relative to expanded cursor
          'project-name': { opacity: 0, scale: 0 },
        }}
      >
        <div className="w-1 h-1 bg-[#2E2E2E] rounded-full" />
      </motion.div>

      <motion.div
        className="absolute text-[#EEECE7]"
        animate={cursorVariant}
        variants={{
          default: { opacity: 0, scale: 0 },
          hover: { opacity: 0, scale: 0 },
          'project-name': { opacity: 1, scale: 1 },
        }}
      >
        <ArrowUpRight size={32} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
};