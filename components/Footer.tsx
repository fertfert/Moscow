
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { TikTokIcon } from './icons/TikTokIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full py-8 px-4 md:px-8 border-t border-amber-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-slate-600 mb-4">
            <a href="#" className="hover:text-amber-500 transition-colors">Помощь</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Политика конд.</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Оферта</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Гарантия</a>
          </nav>
          <p className="text-sm text-slate-500">&copy; Moscow Life 2025</p>
        </div>
        <div className="flex items-center gap-5">
          <a 
            href="https://www.instagram.com/moscow_life2025/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="text-slate-500 hover:text-amber-500 transition-colors"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://www.tiktok.com/@moscow.life1?_r=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="TikTok" 
            className="text-slate-500 hover:text-amber-500 transition-colors"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://www.youtube.com/@moscowlifeflats" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube" 
            className="text-slate-500 hover:text-amber-500 transition-colors"
          >
            <YouTubeIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
