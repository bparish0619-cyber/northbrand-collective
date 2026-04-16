/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black">
      
      {/* High-Resolution Aperture Background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=2000" 
            alt="Leica Camera" 
            className="w-full h-full object-cover grayscale contrast-150 brightness-[0.3] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="h-[1px] w-12 bg-leica-red"></span>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/40">
              f/1.4 • 35mm • ASPH
            </span>
            <span className="h-[1px] w-12 bg-leica-red"></span>
          </div>

          <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-serif font-bold text-white tracking-tighter mb-12 leading-[0.85]">
            Precision <br/> <span className="italic font-normal opacity-80">& Vision.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-xl text-white/50 font-light leading-relaxed mb-16 font-mono uppercase tracking-widest">
            The intersection of high-contrast vision <br className="hidden md:block"/>
            and aviation-grade engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a 
              href="#tools" 
              onClick={(e) => handleNavClick(e, 'tools')}
              className="px-16 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-leica-red hover:text-white transition-all duration-700 shadow-2xl"
            >
              Repository
            </a>
            <a 
              href="https://www.instagram.com/brondolfr.lo" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-16 py-5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white/10 transition-all duration-700 backdrop-blur-md"
            >
              Visual Feed
            </a>
          </div>
        </div>
      </div>

      {/* Technical Metadata Bar */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-8 font-mono text-[10px] text-white/20 uppercase tracking-[0.4em]">
        <div className="flex flex-col gap-1">
          <span>Lat: 32.4487° N</span>
          <span>Lon: 99.7331° W</span>
        </div>
        <div className="w-[1px] h-8 bg-white/10"></div>
        <div className="flex flex-col gap-1">
          <span>Est. 2025</span>
          <span>Abilene, TX</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;