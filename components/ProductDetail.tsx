/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Tool } from '../types';

interface ProductDetailProps {
  tool: Tool;
  onBack: () => void;
  isDarkMode: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ tool, onBack, isDarkMode }) => {
  const isDevOrMilitary = tool.category === 'Development' || tool.category === 'Military/VA' || tool.category === 'Retirement';
  
  const textColor = isDarkMode ? 'text-leica-white' : 'text-leica-black';
  const subTextColor = isDarkMode ? 'text-white/40' : 'text-black/40';
  const bgColor = isDarkMode ? 'bg-leica-black' : 'bg-leica-white';
  const buttonBg = isDarkMode ? 'bg-leica-red text-white' : 'bg-leica-black text-white';

  return (
    <div className={`pt-32 min-h-screen transition-colors duration-700 ${bgColor} animate-fade-in-up`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-48">
        
        <button 
          onClick={onBack}
          aria-label="Go back to repository"
          className="group flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.5em] text-leica-red hover:opacity-70 transition-opacity mb-24 focus:outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8 rounded-none p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-2 transition-transform" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          [ CMD: EXIT_DIRECTORY ]
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Visual Asset Section */}
          <div className="lg:col-span-7 space-y-12">
            <div className="w-full aspect-[16/10] bg-leica-black overflow-hidden border border-current/10">
              <img 
                src={tool.imageUrl} 
                alt={tool.name} 
                className="w-full h-full object-cover grayscale contrast-[1.4] brightness-90"
              />
            </div>
            <div className="grid grid-cols-12 gap-1" aria-hidden="true">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className={`h-1 ${i % 3 === 0 ? 'bg-leica-red' : 'bg-current/10'}`}></div>
               ))}
            </div>
            <div className="flex justify-between font-mono text-[9px] text-current/30 uppercase tracking-[0.4em]">
              <span>Aperture Render v1.0.4</span>
              <span>35mm ASPH // f/1.4</span>
            </div>
          </div>

          {/* Technical Specs Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
             <div className="flex items-center gap-6 mb-8">
                <span className="font-mono text-[10px] text-leica-red uppercase tracking-[0.5em]">{tool.category}</span>
                <span className={`h-[1px] flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></span>
             </div>
             
             <h1 className={`text-6xl md:text-8xl font-serif ${textColor} mb-12 tracking-tighter leading-[0.9]`}>{tool.name}</h1>
             
             <p className={`text-2xl font-light leading-snug ${textColor} mb-16 opacity-80`}>
               {tool.longDescription || tool.description}
             </p>

             <div className="flex flex-col gap-12">
               <a 
                 href={tool.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`group relative overflow-hidden py-8 ${buttonBg} text-center uppercase font-bold text-[10px] tracking-[0.5em] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl focus:outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8`}
                 aria-label={isDevOrMilitary ? `Initialize Command for ${tool.name}` : `View Aperture for ${tool.name}`}
               >
                 <span className="relative z-10 flex items-center justify-center gap-4">
                    {isDevOrMilitary ? '[ INITIALIZE COMMAND ]' : '[ VIEW APERTURE ]'}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                 </span>
               </a>

               <div className="mt-12">
                  <h5 className={`font-mono text-[10px] uppercase tracking-[0.5em] ${textColor} mb-8 border-b border-current/10 pb-4`}>Technical Focus</h5>
                  <ul className={`grid grid-cols-1 gap-6 text-[11px] ${subTextColor} font-mono uppercase tracking-widest`}>
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <span className="w-2 h-2 bg-leica-red rounded-full" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;