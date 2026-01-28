import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Analytics } from "@vercel/analytics/react"
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);



function AppContent() {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname, hash } = useLocation();

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

    // Disable native scroll restoration to let React handle it
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // Handle scroll to hash/top on route change using Lenis
  useLayoutEffect(() => {
    // Use requestAnimationFrame to ensure DOM is painted before scrolling
    const handleScroll = () => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const targetPosition = element.getBoundingClientRect().top + window.scrollY - 50;

          // Try Lenis first
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetPosition, { immediate: true, force: true });
          }

          // Native scroll as fallback - ensures scroll happens even if Lenis fails
          window.scrollTo({ top: targetPosition, behavior: 'instant' });
        }
      } else {
        // Reset to top
        window.scrollTo(0, 0);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true, force: true });
        }
      }
      ScrollTrigger.refresh();
    };

    // Wait for next frame then add delay for DOM to fully settle after route change
    const rafId = requestAnimationFrame(() => {
      const timeout = setTimeout(handleScroll, 150);
      // Store timeout ID for cleanup
      (rafId as any).timeoutId = timeout;
    });

    return () => {
      cancelAnimationFrame(rafId);
      if ((rafId as any).timeoutId) {
        clearTimeout((rafId as any).timeoutId);
      }
    };
  }, [pathname, hash]);

  return (
    <div className="antialiased selection:bg-[#2E2E2E] selection:text-[#EEECE7]">
      <CustomCursor />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:category" element={<CategoryPage />} />
      </Routes>

      <Footer />

      {/* Texture Overlay (Dust) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <Analytics />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;