/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Tool } from '../types';

interface ProductCardProps {
  tool: Tool;
  onClick: (tool: Tool) => void;
  isDarkMode: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ tool, onClick, isDarkMode }) => {
  const textColor = isDarkMode ? 'text-leica-white' : 'text-leica-black';
  const subTextColor = isDarkMode ? 'text-white/30' : 'text-black/30';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(tool);
    }
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => onClick(tool)}
      aria-label={`View details for ${tool.name}, ${tool.category}`}
      className="group cursor-pointer flex flex-col gap-8 outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8 rounded-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-leica-black">
        <img 
          src={tool.imageUrl} 
          alt="" 
          className="w-full h-full object-cover grayscale contrast-150 transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-110"
        />
        
        {/* Technical HUD Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true">
            <div className="flex justify-between items-start">
               <div className="flex flex-col gap-1">
                 <span className="font-mono text-[9px] bg-leica-red text-white px-2 py-1 uppercase tracking-[0.3em]">ACTIVE</span>
                 <span className="font-mono text-[8px] text-white/60 tracking-widest">ID: {tool.id.toUpperCase()}</span>
               </div>
               <span className="font-mono text-[9px] text-white/40 tracking-[0.4em]">VER: 1.0.4</span>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-[1px] bg-white/40"></div>
              <span className="bg-white text-black px-8 py-4 uppercase font-bold text-[9px] tracking-[0.5em] shadow-2xl">
                INITIALIZE
              </span>
              <div className="w-12 h-[1px] bg-white/40"></div>
            </div>

            <div className="flex justify-between items-end font-mono text-[8px] text-white/40 tracking-widest">
              <span>F/2.0</span>
              <span>1/1000s</span>
              <span>ISO 100</span>
            </div>
        </div>
      </div>
      
      <div className="px-0">
        <div className="flex items-baseline justify-between mb-4">
           <h3 className={`text-3xl font-serif ${textColor} tracking-tighter group-hover:text-leica-red transition-colors duration-500`}>{tool.name}</h3>
           <span className="font-mono text-[9px] text-leica-red uppercase tracking-[0.4em]">{tool.category}</span>
        </div>
        <div className={`h-[1px] w-full ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} mb-6`}></div>
        <p className={`text-[10px] font-mono ${subTextColor} leading-relaxed uppercase tracking-[0.2em]`}>
          {tool.tagline}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;