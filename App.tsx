/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Toggle theme
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Handle focus management on view change
  useEffect(() => {
    if (mainRef.current) {
      // Small timeout to allow render to complete and scroll to happen
      setTimeout(() => {
        mainRef.current?.focus();
      }, 100);
    }
  }, [view]);

  // Handle navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {}
    }
  };

  const themeClasses = isDarkMode 
    ? 'bg-leica-black text-leica-white selection:bg-leica-red selection:text-white' 
    : 'bg-leica-white text-leica-black selection:bg-leica-red selection:text-white';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 ${themeClasses}`}>
      <Navbar 
        onNavClick={handleNavClick} 
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      
      <main ref={mainRef} tabIndex={-1} className="outline-none">
        {view.type === 'home' && (
          <>
            <Hero />
            <div className={isDarkMode ? 'bg-leica-black' : 'bg-leica-white'}>
              <ProductGrid 
                isDarkMode={isDarkMode}
                onToolClick={(t) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setView({ type: 'tool', tool: t });
                }} 
              />
              <About isDarkMode={isDarkMode} />
              <Journal 
                isDarkMode={isDarkMode}
                onArticleClick={(a) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setView({ type: 'journal', article: a });
                }} 
              />
            </div>
          </>
        )}

        {view.type === 'tool' && (
          <ProductDetail 
            tool={view.tool} 
            isDarkMode={isDarkMode}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('tools'), 50);
            }}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            isDarkMode={isDarkMode}
            onBack={() => setView({ type: 'home' })}
          />
        )}
      </main>

      <Footer onLinkClick={handleNavClick} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;