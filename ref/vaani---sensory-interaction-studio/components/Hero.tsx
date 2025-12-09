import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CursorType } from '../types';

interface HeroProps {
  setCursorType: (type: CursorType) => void;
}

const Hero: React.FC<HeroProps> = ({ setCursorType }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth / 2;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; baseX: number; baseY: number; size: number; density: number }[] = [];
    const particleCount = 200;

    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
            x, y,
            baseX: x,
            baseY: y,
            size: Math.random() * 2 + 0.5,
            density: (Math.random() * 30) + 1
        });
    }

    let animationFrameId: number;

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#DADADA'; // Whisper Grey

        // Draw metal texture lines
        ctx.strokeStyle = 'rgba(200, 200, 200, 0.1)';
        ctx.beginPath();
        for(let i=0; i<width; i+=20) {
             ctx.moveTo(i, 0);
             ctx.lineTo(i, height);
        }
        ctx.stroke();

        // Animate particles (simulating fluid metal dust)
        const time = Date.now() * 0.001;
        particles.forEach(p => {
            p.y += Math.sin(time + p.density) * 0.5;
            p.x += Math.cos(time + p.density) * 0.2;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        });

        animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
         width = canvas.width = window.innerWidth / 2;
         height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="h-screen w-full flex bg-vapor relative overflow-hidden" 
             onMouseEnter={() => setCursorType(CursorType.DEFAULT)}>
      
      {/* Left: Blank Vapor */}
      <div className="w-1/2 h-full flex items-center justify-center p-12 relative z-10">
        <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
        >
            <h1 className="text-[12vw] leading-none font-display text-slate mix-blend-multiply tracking-tighter"
                onMouseEnter={() => setCursorType(CursorType.HOVER)}
                onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
            >
                VAANI
            </h1>
            <p className="font-serif italic text-copper text-xl mt-4 ml-2">Sensory Interaction Studio</p>
        </motion.div>
      </div>

      {/* Right: Reflective Metal Texture */}
      <div className="w-1/2 h-full bg-slate relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate opacity-80" />
        <div className="absolute bottom-12 right-12 text-vapor font-sans text-sm tracking-widest uppercase opacity-60">
            [ EST. 2024 ] <br />
            Tokyo / London
        </div>
      </div>
    </section>
  );
};

export default Hero;