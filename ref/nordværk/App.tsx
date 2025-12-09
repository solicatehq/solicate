import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { SelectedWork } from './components/SelectedWork';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { Journal } from './components/Journal';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans text-nordic-charcoal bg-arctic-linen antialiased selection:bg-birchwood selection:text-white">
      <CustomCursor />
      <main className="relative w-full overflow-hidden">
        <Hero />
        <Philosophy />
        <SelectedWork />
        <Capabilities />
        <Process />
        <Journal />
      </main>
      <Footer />
    </div>
  );
};

export default App;