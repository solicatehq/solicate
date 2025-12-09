import React, { useState } from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Portfolio from './components/Portfolio';
import SoundObjects from './components/SoundObjects';
import Services from './components/Services';
import Journal from './components/Journal';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import { CursorType } from './types';

function App() {
  const [cursorType, setCursorType] = useState<CursorType>(CursorType.DEFAULT);

  return (
    <div className="antialiased selection:bg-copper selection:text-white">
      <CustomCursor cursorType={cursorType} />
      <Navigation />
      
      <main className="w-full">
        <Hero setCursorType={setCursorType} />
        <Manifesto setCursorType={setCursorType} />
        <Portfolio setCursorType={setCursorType} />
        <SoundObjects setCursorType={setCursorType} />
        <Services setCursorType={setCursorType} />
        <Journal setCursorType={setCursorType} />
      </main>
      
      <Footer setCursorType={setCursorType} />
    </div>
  );
}

export default App;