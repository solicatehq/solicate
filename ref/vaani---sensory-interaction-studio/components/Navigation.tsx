import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed top-0 left-0 w-full z-40 p-8 flex justify-between items-start pointer-events-none mix-blend-difference text-white"
        >
            <div className="pointer-events-auto cursor-pointer group">
                 <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-1 h-1 bg-white rounded-full" />
                 </div>
            </div>

            <div className="pointer-events-auto flex flex-col items-end space-y-1 font-sans text-xs uppercase tracking-widest">
                <button className="hover:text-copper transition-colors">Menu</button>
                <button className="hover:text-copper transition-colors">Sound On</button>
            </div>
        </motion.nav>
    );
};

export default Navigation;