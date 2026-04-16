/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  isDarkMode: boolean;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, isDarkMode }) => {
  const textColor = isDarkMode ? 'text-leica-white' : 'text-leica-black';
  const subTextColor = isDarkMode ? 'text-white/40' : 'text-black/40';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';

  const handleKeyDown = (e: React.KeyboardEvent, article: JournalArticle) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onArticleClick(article);
    }
  };

  return (
    <section id="journal" className={`py-48 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-leica-black' : 'bg-leica-white'}`} aria-label="Journal">
      <div className="max-w-[1800px] mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-32 pb-12 border-b ${borderColor}`}>
            <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-leica-red mb-6">Editorial</span>
                <h2 className={`text-6xl md:text-8xl font-serif ${textColor} tracking-tighter`}>The Journal</h2>
            </div>
            <div className="mt-8 md:mt-0">
               <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">Vol. 01 // Issue 04</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {JOURNAL_ARTICLES.map((article) => (
                <article 
                    key={article.id} 
                    className="group cursor-pointer flex flex-col text-left outline-none focus:ring-1 focus:ring-leica-red focus:ring-offset-8 rounded-none"
                    onClick={() => onArticleClick(article)}
                    onKeyDown={(e) => handleKeyDown(e, article)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Read article: ${article.title}`}
                >
                    <div className={`w-full aspect-[3/4] overflow-hidden mb-12 bg-leica-black`}>
                        <img 
                            src={article.image} 
                            alt="" 
                            className={`w-full h-full object-cover grayscale contrast-[1.4] brightness-90 transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100`}
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-leica-red mb-6">{article.date}</span>
                        <h3 className={`text-3xl font-serif ${textColor} mb-6 leading-[1.1] tracking-tight group-hover:text-leica-red transition-colors duration-500`}>{article.title}</h3>
                        <div className={`h-[1px] w-12 ${isDarkMode ? 'bg-white/20' : 'bg-black/20'} mb-6 group-hover:w-full transition-all duration-700`}></div>
                        <p className={`${subTextColor} font-light leading-relaxed text-sm uppercase tracking-wide`}>{article.excerpt}</p>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;