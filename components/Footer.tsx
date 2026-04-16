/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, isDarkMode }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  const bgColor = isDarkMode ? 'bg-leica-black' : 'bg-leica-white';
  const textColor = isDarkMode ? 'text-leica-white' : 'text-leica-black';
  const subTextColor = isDarkMode ? 'text-white/30' : 'text-black/30';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';

  return (
    <footer className={`${bgColor} pt-48 pb-12 px-6 ${subTextColor} transition-colors duration-700 border-t ${borderColor}`}>
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-24">
        
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-leica-red rounded-full flex items-center justify-center text-white text-[10px] font-mono font-bold">N</div>
            <h4 className={`text-2xl font-serif ${textColor} tracking-tighter`}>Precision & Vision</h4>
          </div>
          <p className="max-w-xs font-light leading-relaxed uppercase text-[10px] tracking-widest">
            Curating visual narratives and technical solutions from the heart of Abilene, TX.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className={`font-mono text-[10px] ${textColor} mb-8 tracking-[0.4em] uppercase`}>Directory</h4>
          <ul className="space-y-4 font-light text-[11px] uppercase tracking-widest">
            <li><a href="#tools" onClick={(e) => onLinkClick(e, 'tools')} className={`hover:text-leica-red transition-colors focus:outline-none focus:text-leica-red`}>All Tools</a></li>
            <li><a href="#tools" onClick={(e) => onLinkClick(e, 'tools')} className={`hover:text-leica-red transition-colors focus:outline-none focus:text-leica-red`}>Photography</a></li>
            <li><a href="#tools" onClick={(e) => onLinkClick(e, 'tools')} className={`hover:text-leica-red transition-colors focus:outline-none focus:text-leica-red`}>Development</a></li>
            <li><a href="#tools" onClick={(e) => onLinkClick(e, 'tools')} className={`hover:text-leica-red transition-colors focus:outline-none focus:text-leica-red`}>Military/VA</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className={`font-mono text-[10px] ${textColor} mb-8 tracking-[0.4em] uppercase`}>Philosophy</h4>
          <ul className="space-y-4 font-light text-[11px] uppercase tracking-widest">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className={`hover:text-leica-red transition-colors focus:outline-none focus:text-leica-red`}>Our Story</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className={`hover:text-leica-red transition-colors focus:outline-none focus:text-leica-red`}>Journal</a></li>
            <li><a href="https://www.instagram.com/brondolfr.lo" target="_blank" rel="noreferrer" className={`hover:text-leica-red transition-colors focus:outline-none focus:text-leica-red`}>Instagram</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className={`font-mono text-[10px] ${textColor} mb-8 tracking-[0.4em] uppercase`}>Updates</h4>
          <div className="flex flex-col gap-6">
            <label htmlFor="email-subscribe" className="sr-only">Email Address</label>
            <input 
              id="email-subscribe"
              type="email" 
              placeholder="EMAIL@ADDRESS.COM" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className={`bg-transparent border-b ${borderColor} py-3 text-sm outline-none focus:border-leica-red transition-colors placeholder-current/30 ${textColor} disabled:opacity-50 focus:ring-0 font-mono uppercase tracking-widest`} 
              aria-label="Email Address for newsletter"
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className={`self-start text-[10px] font-bold uppercase tracking-[0.5em] mt-2 hover:text-leica-red disabled:cursor-default disabled:hover:text-current disabled:opacity-50 transition-all focus:outline-none focus:text-leica-red`}
              aria-live="polite"
            >
              {subscribeStatus === 'idle' && 'Join the list'}
              {subscribeStatus === 'loading' && 'Joining...'}
              {subscribeStatus === 'success' && 'Welcome aboard'}
            </button>
          </div>
        </div>
      </div>

      <div className={`max-w-[1800px] mx-auto mt-32 pt-12 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.5em] opacity-40`}>
        <p>Created by Northbrand &copy; 2025</p>
        <p>Abilene, TX // 32.4487° N, 99.7331° W</p>
      </div>
    </footer>
  );
};

export default Footer;