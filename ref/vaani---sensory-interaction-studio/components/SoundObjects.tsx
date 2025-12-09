import React from 'react';
import { motion } from 'framer-motion';
import { SOUND_OBJECTS } from '../constants';
import { CursorType } from '../types';

interface SoundObjectsProps {
    setCursorType: (type: CursorType) => void;
}

const Shape: React.FC<{ type: string }> = ({ type }) => {
    // Abstract SVG shapes representing 3D objects
    if (type === 'sphere') {
        return (
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate opacity-40" />
                <ellipse cx="50" cy="50" rx="40" ry="10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate opacity-60" />
                <ellipse cx="50" cy="50" rx="10" ry="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate opacity-60" />
            </svg>
        );
    }
    if (type === 'torus') {
        return (
             <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse-slow">
                <path d="M20,50 Q50,0 80,50 Q50,100 20,50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-copper opacity-60" />
                <path d="M30,50 Q50,20 70,50 Q50,80 30,50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate opacity-40" />
            </svg>
        );
    }
    return (
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-teal opacity-60" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-slate opacity-30" />
        </svg>
    );
};

const SoundObjects: React.FC<SoundObjectsProps> = ({ setCursorType }) => {
  return (
    <section className="min-h-screen bg-vapor py-32 px-4 md:px-20 overflow-hidden">
      <div className="mb-24 text-center">
        <h2 className="font-serif text-4xl text-slate mb-4">Object Library</h2>
        <p className="font-sans text-sm text-slate/50 uppercase tracking-widest">Sonic Artifacts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        {SOUND_OBJECTS.map((obj) => (
            <motion.div 
                key={obj.id}
                className="group relative aspect-square flex items-center justify-center border border-whisper bg-white/50 backdrop-blur-sm transition-colors duration-500 hover:border-slate/30"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setCursorType(CursorType.LISTEN)}
                onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
            >
                <div className="w-1/2 h-1/2 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12">
                    <Shape type={obj.shapeType} />
                </div>

                {/* Info Labels Slide In */}
                <div className="absolute bottom-6 left-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <h4 className="font-serif text-lg text-slate">{obj.title}</h4>
                    <p className="font-sans text-xs text-copper">{obj.origin}</p>
                </div>
                
                {/* Visual Resonance Ripple */}
                <div className="absolute inset-0 border border-copper rounded-full opacity-0 scale-50 group-hover:animate-ping-slow pointer-events-none" />
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SoundObjects;