import React from 'react';
import { Hero } from './components/Hero';
import { Ethos } from './components/Ethos';
import { Works } from './components/Works';
import { Materials } from './components/Materials';
import { Services } from './components/Services';
import { Journal } from './components/Journal';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="antialiased selection:bg-[#2E2E2E] selection:text-[#EEECE7]">
      <CustomCursor />
      
      <main className="w-full relative z-10 bg-[#EEECE7]">
        <Hero />
        <Ethos />
        <Works />
        <Materials />
        <Services />
        <Journal />
      </main>
      
      <div className="relative z-0">
        <Footer />
      </div>
      
      {/* Texture Overlay (Dust) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }} 
      />
    </div>
  );
}

export default App;