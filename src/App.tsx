/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import Differentials from './components/Differentials';
import Services from './components/Services';
import CutsCatalog from './components/CutsCatalog';
import Highlights from './components/Highlights';
import Authority from './components/Authority';
import About from './components/About';
import ArenaExperience from './components/ArenaExperience';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <Header />
          <main>
            <Hero />
            <Positioning />
            <Differentials />
            <Services />
            <CutsCatalog />
            <Highlights />
            <Authority />
            <About />
            <ArenaExperience />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
