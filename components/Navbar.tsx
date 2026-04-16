/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, isDarkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const getBgClass = () => {
    if (mobileMenuOpen) return isDarkMode ? 'bg-black' : 'bg-white';
    if (scrolled) return isDarkMode ? 'bg-black/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl';
    return 'bg-transparent';
  };

  const getTextColor = () => {
    if (scrolled || mobileMenuOpen) return isDarkMode ? 'text-white' : 'text-black';
    return 'text-white'; 
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${getBgClass()} ${
          scrolled || mobileMenuOpen ? 'py-4 border-b border-white/10 shadow-2xl' : 'py-10'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
            }}
            className={`flex items-center gap-3 text-xl md:text-2xl font-serif font-bold tracking-tighter z-50 relative transition-colors duration-500 ${getTextColor()}`}
            aria-label={`${BRAND_NAME} Home`}
          >
            <span className="w-8 h-8 md:w-10 md:h-10 bg-leica-red rounded-full flex items-center justify-center text-white text-[10px] md:text-xs font-mono font-bold">N</span>
            <span>{BRAND_NAME.split(' ')[0]} <span className="italic font-normal opacity-80">{BRAND_NAME.split(' ')[1]}</span></span>
          </a>
          
          <div className={`hidden md:flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 ${getTextColor()}`}>
            <a href="#tools" onClick={(e) => handleLinkClick(e, 'tools')} className="hover:text-leica-red transition-colors focus:outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8 rounded-none">Repository</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-leica-red transition-colors focus:outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8 rounded-none">Principles</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-leica-red transition-colors focus:outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8 rounded-none">Journal</a>
            
            <button 
              onClick={onToggleTheme}
              className="ml-4 px-4 py-2 border border-current text-[9px] tracking-[0.5em] transition-all hover:bg-leica-red hover:border-leica-red hover:text-white focus:outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? 'LIGHT' : 'DARK'}
            </button>
          </div>

          <div className={`flex md:hidden items-center gap-6 z-50 relative transition-colors duration-500 ${getTextColor()}`}>
            <button 
              className="focus:outline-none focus:ring-2 focus:ring-[#E20613] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
               {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${
          isDarkMode ? 'bg-black' : 'bg-white'
      } ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
          <div className={`flex flex-col items-center space-y-12 text-3xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <a href="#tools" onClick={(e) => handleLinkClick(e, 'tools')} className="focus:outline-none focus:text-[#E20613]">Repository</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="focus:outline-none focus:text-[#E20613]">Principles</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="focus:outline-none focus:text-[#E20613]">Journal</a>
            <button 
              onClick={() => { onToggleTheme(); setMobileMenuOpen(false); }} 
              className="font-mono text-xs uppercase tracking-widest mt-8 leica-accent focus:outline-none focus:ring-2 focus:ring-[#E20613] p-2"
            >
               SWITCH MODE
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;