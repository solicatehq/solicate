import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CursorType } from '../types';

interface FooterProps {
    setCursorType: (type: CursorType) => void;
}

const Footer: React.FC<FooterProps> = ({ setCursorType }) => {
    const [decibels, setDecibels] = useState(40);

    // Mock sound meter data
    useEffect(() => {
        const interval = setInterval(() => {
            setDecibels(prev => {
                const change = (Math.random() - 0.5) * 10;
                return Math.min(Math.max(prev + change, 30), 85);
            });
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-slate text-vapor min-h-[80vh] flex flex-col justify-between py-24 px-4 md:px-20 relative overflow-hidden"
                onMouseEnter={() => setCursorType(CursorType.HOVER)}
                onMouseLeave={() => setCursorType(CursorType.DEFAULT)}>
            
            {/* Massive CTA */}
            <div className="flex-grow flex items-center justify-center relative z-10">
                <h2 className="text-[10vw] font-serif leading-none text-center mix-blend-overlay opacity-90 select-none">
                     Let's Create <br />
                     <span className="italic text-copper">Resonance</span>
                </h2>
                {/* Wave Pass Animation Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-shimmer pointer-events-none" />
            </div>

            {/* Grid Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 z-10">
                <div className="flex flex-col space-y-2">
                    <span className="text-xs uppercase tracking-widest text-slate-400 mb-4">Studio</span>
                    <p className="font-serif text-lg">Shibuya District,<br/>Tokyo, 150-0002</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-xs uppercase tracking-widest text-slate-400 mb-4">Contact</span>
                    <a href="mailto:hello@vaani.studio" className="font-sans hover:text-copper transition-colors">hello@vaani.studio</a>
                    <a href="tel:+81300000000" className="font-sans hover:text-copper transition-colors">+81 3 0000 0000</a>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-xs uppercase tracking-widest text-slate-400 mb-4">Connect</span>
                    <a href="#" className="font-sans hover:text-copper transition-colors">Instagram</a>
                    <a href="#" className="font-sans hover:text-copper transition-colors">LinkedIn</a>
                    <a href="#" className="font-sans hover:text-copper transition-colors">SoundCloud</a>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-xs uppercase tracking-widest text-slate-400 mb-4">Ambient Level (Live)</span>
                    <div className="flex items-end space-x-1 h-12">
                        {[...Array(8)].map((_, i) => (
                             <motion.div 
                                key={i}
                                className="w-2 bg-copper"
                                animate={{ height: `${Math.max(10, (decibels / 100) * 100 * Math.random())}%` }}
                                transition={{ duration: 0.2 }}
                             />
                        ))}
                    </div>
                    <span className="font-mono text-xs mt-2">{decibels.toFixed(1)} dB</span>
                </div>
            </div>

            {/* Background Texture */}
             <div className="absolute inset-0 opacity-5 pointer-events-none" 
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} 
             />
        </footer>
    );
};

export default Footer;