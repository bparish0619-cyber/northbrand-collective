/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { TOOLS } from '../constants';
import { Tool } from '../types';
import ProductCard from './ProductCard';

const categories = ['All', 'Photography', 'Development', 'Military/VA', 'Retirement'];

interface ProductGridProps {
  onToolClick: (tool: Tool) => void;
  isDarkMode: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onToolClick, isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = useMemo(() => {
    if (activeCategory === 'All') return TOOLS;
    return TOOLS.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  const textColor = isDarkMode ? 'text-leica-white' : 'text-leica-black';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';

  return (
    <section id="tools" className={`py-48 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-leica-black' : 'bg-leica-white'}`} aria-label="Product Collection">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-32 space-y-12">
          <h2 className={`text-6xl md:text-8xl font-serif ${textColor} tracking-tighter`}>The Repository</h2>
          
          {/* Minimal Filter */}
          <div 
            role="group" 
            aria-label="Category Filters"
            className={`flex flex-wrap justify-center gap-12 pt-8 border-t ${borderColor} w-full max-w-4xl`}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`text-[10px] uppercase tracking-[0.4em] pb-2 border-b-2 transition-all duration-500 focus:outline-none focus:text-leica-red font-mono ${
                  activeCategory === cat 
                    ? `border-leica-red ${textColor}` 
                    : `border-transparent text-current opacity-30 hover:opacity-100`
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {filteredTools.map(tool => (
            <ProductCard 
              key={tool.id} 
              tool={tool} 
              onClick={onToolClick} 
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;