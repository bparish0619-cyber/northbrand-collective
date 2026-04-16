/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
  isDarkMode?: boolean;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack, isDarkMode }) => {
  const textColor = isDarkMode ? 'text-leica-white' : 'text-leica-black';
  const subTextColor = isDarkMode ? 'text-white/40' : 'text-black/40';
  const bgColor = isDarkMode ? 'bg-leica-black' : 'bg-leica-white';
  const cardBg = isDarkMode ? 'bg-leica-black' : 'bg-leica-white';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';

  return (
    <div className={`min-h-screen transition-colors duration-700 ${bgColor} animate-fade-in-up`}>
       {/* Hero Image for Article */}
       <div className="w-full h-[60vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt=""
             className={`w-full h-full object-cover grayscale contrast-[1.5] brightness-50`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" aria-hidden="true"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-48 relative z-10 pb-48">
          <div className={`${cardBg} p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border ${borderColor}`}>
             <div className={`flex justify-between items-center mb-24 border-b ${borderColor} pb-12`}>
                <button 
                  onClick={onBack}
                  aria-label="Back to Journal"
                  className={`group flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.5em] text-leica-red hover:opacity-70 transition-opacity focus:outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8 rounded-none p-1`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-2 transition-transform" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  [ EXIT_ARTICLE ]
                </button>
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">{article.date}</span>
             </div>

             <h1 className={`text-5xl md:text-8xl font-serif ${textColor} mb-24 leading-[0.9] tracking-tighter text-center italic`}>
               {article.title}
             </h1>

             <div className={`prose prose-invert max-w-none font-light leading-relaxed text-lg ${textColor} opacity-80`}>
               <div className="first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-leica-red">
                 {article.content}
               </div>
             </div>
             
             <div className={`mt-32 pt-16 border-t ${borderColor} flex flex-col items-center gap-6`}>
                  <div className="w-12 h-12 bg-leica-red rounded-full flex items-center justify-center text-white text-xs font-mono font-bold">N</div>
                  <span className={`text-2xl font-serif italic ${textColor} opacity-60 tracking-tighter`}>Precision & Vision</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;