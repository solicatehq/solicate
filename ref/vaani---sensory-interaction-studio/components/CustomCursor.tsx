import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CursorType } from '../types';

interface CustomCursorProps {
  cursorType: CursorType;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ cursorType }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  const variants = {
    [CursorType.DEFAULT]: {
      height: 16,
      width: 16,
      backgroundColor: "#2E3337",
      mixBlendMode: "normal" as const,
      scale: 1
    },
    [CursorType.HOVER]: {
      height: 64,
      width: 64,
      backgroundColor: "rgba(196, 145, 103, 0.3)", // Copper mist transparent
      mixBlendMode: "multiply" as const,
      scale: 1.2
    },
    [CursorType.VIEW]: {
      height: 80,
      width: 80,
      backgroundColor: "rgba(90, 112, 108, 0.2)", // Teal
      mixBlendMode: "difference" as const,
      scale: 1
    },
    [CursorType.LISTEN]: {
      height: 40,
      width: 40,
      backgroundColor: "transparent",
      border: "2px solid #2E3337",
      scale: 1.5
    },
    [CursorType.DRAG]: {
        height: 48,
        width: 48,
        backgroundColor: "#2E3337",
        scale: 0.8
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center backdrop-blur-sm"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: "-50%",
        y: "-50%"
      }}
      variants={variants}
      animate={cursorType}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
        {cursorType === CursorType.VIEW && (
            <span className="text-[10px] uppercase tracking-widest text-white font-sans">View</span>
        )}
         {cursorType === CursorType.LISTEN && (
            <div className="w-2 h-2 bg-slate rounded-full animate-pulse" />
        )}
    </motion.div>
  );
};

export default CustomCursor;