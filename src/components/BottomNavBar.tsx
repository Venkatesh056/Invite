/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, Calendar, Flame, Heart, Sparkles, Landmark } from 'lucide-react';

interface BottomNavBarProps {
  onPetalShower: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ onPetalShower }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Wedding sections navigation"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94vw] max-w-sm bg-[#35050F]/95 backdrop-blur-md border border-[#D4AF37]/60 rounded-full px-3 py-1.5 shadow-card-elevated flex items-center justify-between"
    >
      <button
        type="button"
        onClick={() => scrollTo('invitation-hero')}
        className="flex flex-col items-center gap-0.5 px-2 py-1 text-[#F8E1A1] hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to home"
      >
        <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89B3C]" />
        <span className="font-cinzel text-[8px] sm:text-[9px] uppercase tracking-wider">Home</span>
      </button>

      <button
        type="button"
        onClick={() => scrollTo('invitation-hero')}
        className="flex flex-col items-center gap-0.5 px-2 py-1 text-[#F8E1A1] hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to dates"
      >
        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89B3C]" />
        <span className="font-cinzel text-[8px] sm:text-[9px] uppercase tracking-wider">Dates</span>
      </button>

      <button
        type="button"
        onClick={() => scrollTo('chettinad')}
        className="flex flex-col items-center gap-0.5 px-2 py-1 text-[#F8E1A1] hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to heritage"
      >
        <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89B3C]" />
        <span className="font-cinzel text-[8px] sm:text-[9px] uppercase tracking-wider">Heritage</span>
      </button>

      <button
        type="button"
        onClick={() => scrollTo('rsvp')}
        className="flex flex-col items-center gap-0.5 px-2 py-1 text-[#F8E1A1] hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to RSVP"
      >
        <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63956]" />
        <span className="font-cinzel text-[8px] sm:text-[9px] uppercase tracking-wider">RSVP</span>
      </button>

      <div className="h-4 w-px bg-[#D4AF37]/40 my-auto" />

      {/* Flower Shower Quick Button */}
      <button
        type="button"
        onClick={onPetalShower}
        className="p-1.5 sm:p-2 rounded-full bg-[#D4AF37] hover:bg-[#F3E3A2] text-[#3A0710] shadow-md transition-all cursor-pointer"
        aria-label="Shower petals"
        title="Shower Petals"
      >
        <Sparkles className="w-3.5 h-3.5 fill-current" />
      </button>
    </nav>
  );
};
