/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface AboutProps {
  isDarkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const principles = [
    { num: '01', title: 'Prevent Error', desc: 'Standardize inputs to neutralize risk.' },
    { num: '02', title: 'Context Awareness', desc: 'Leadership through situational calm.' },
    { num: '03', title: 'Limit Obligations', desc: 'Focus on singular high-depth utility.' },
    { num: '04', title: 'System Integrity', desc: 'Total alignment across all platforms.' },
  ];

  const textColor = isDarkMode ? 'text-leica-white' : 'text-leica-black';
  const subTextColor = isDarkMode ? 'text-white/40' : 'text-black/40';
  const bgColor = isDarkMode ? 'bg-leica-black' : 'bg-leica-white';
  const accentBorder = 'border-leica-red';

  return (
    <section id="about" className={`${bgColor} py-48 transition-colors duration-700`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* The DNA Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
          <div className="lg:col-span-6">
             <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-leica-red mb-8 block">Foundation</span>
             <h2 className={`text-6xl md:text-8xl lg:text-9xl font-serif ${textColor} leading-[0.9] mb-12 tracking-tighter`}>
               Precision is a <br/> <span className="italic font-normal opacity-80">Standard.</span>
             </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
             <p className={`text-2xl md:text-3xl ${textColor} font-light leading-snug mb-12 max-w-2xl`}>
               Northbrand Collective operates at the intersection of monochromatic vision and military rigor.
             </p>
             <div className={`h-[1px] w-24 ${isDarkMode ? 'bg-white/20' : 'bg-black/20'} mb-12`}></div>
             <p className={`text-lg ${subTextColor} font-light leading-relaxed max-w-xl font-mono uppercase tracking-wide`}>
               From the "Aperture" focus of high-contrast photography to the logistical "Command" of community hubs, every line of code is written to maintain momentum.
             </p>
          </div>
        </div>

        {/* The Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-current/10">
           {principles.map((p) => (
             <div key={p.num} className={`p-12 border-r border-b border-current/10 group hover:bg-leica-red transition-colors duration-700`}>
                <span className="font-mono text-[10px] text-leica-red mb-8 block group-hover:text-white transition-colors tracking-[0.4em]">{p.num}</span>
                <h4 className={`text-2xl font-serif ${textColor} mb-6 group-hover:text-white transition-colors`}>{p.title}</h4>
                <p className={`text-sm ${subTextColor} font-light group-hover:text-white/80 transition-colors leading-relaxed`}>{p.desc}</p>
             </div>
           ))}
        </div>

        {/* Visual Anchor */}
        <div className="mt-48 relative h-[800px] overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2000" 
             alt="Leica Camera Mechanics" 
             className="w-full h-full object-cover grayscale contrast-[1.6] brightness-50 group-hover:scale-110 transition-transform duration-[3s] ease-out"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[12vw] text-white/5 font-bold uppercase tracking-tighter select-none">PRECISION</span>
           </div>
           <div className="absolute bottom-12 right-12 flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.4em]">Optic Integrity Check</span>
              <div className="w-12 h-[1px] bg-leica-red"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;