/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, MapPin, Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audio.ts';

interface HeroSectionProps {
  onPetalShower: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPetalShower,
  isPlayingMusic,
  onToggleMusic,
}) => {
  return (
    <section id="hero" className="relative w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Royal Arch Card Container Inspired by Reference Image 1 */}
      <div className="relative rounded-3xl overflow-hidden bg-[#FAF6EE] border-2 border-[#D4AF37]/60 shadow-royal">
        {/* Ornate Reference Image 1 Header Card Presentation */}
        <div className="relative w-full max-w-xl mx-auto p-4 sm:p-8 flex flex-col items-center text-center">
          
          {/* Main Card Graphic matching Image 1 */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-card-elevated border border-[#C89B3C]/50 bg-white">
            <img
              src="/assets/aistudio/image_dda6980d.png"
              alt="Arjun & Siya Wedding Invitation - Royal Palace & Bougainvillea Theme"
              className="w-full h-auto object-cover"
            />

            {/* Interactive Overlay Badges */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleMusic}
                aria-label={isPlayingMusic ? 'Mute wedding music' : 'Play wedding music'}
                className="p-2.5 rounded-full bg-[#581423]/90 text-[#F8E1A1] shadow-lg hover:bg-[#771C30] transition-colors cursor-pointer backdrop-blur-sm"
                title={isPlayingMusic ? 'Mute Music' : 'Play Music'}
              >
                {isPlayingMusic ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={onPetalShower}
                aria-label="Shower flower petals"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#D4AF37]/90 text-[#3D0A14] font-cinzel font-semibold text-xs shadow-lg hover:bg-[#F3E3A2] transition-colors cursor-pointer backdrop-blur-sm"
                title="Shower Petals"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#581423]" />
                <span className="hidden sm:inline">Shower Petals</span>
                <span>🌸</span>
              </button>
            </div>
          </div>

          {/* Authentic Auspicious Invitation Text */}
          <div className="mt-8 space-y-4 max-w-lg">
            <div className="inline-block px-4 py-1 rounded-full bg-[#F5ECE0] border border-[#C89B3C]/40 text-[#7A1D30] text-xs font-cinzel tracking-widest uppercase">
              ✦ Subhamangalam Wedding Celebration ✦
            </div>

            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#581423]">
              ARJUN <span className="text-[#C89B3C] font-normal">&amp;</span> SIYA
            </h1>

            <p className="font-tamil text-base sm:text-lg text-[#842636] font-medium">
              இரு மனங்கள் இணையும் மங்கலத் திருமணம்
            </p>

            <p className="font-cormorant italic text-base sm:text-xl text-[#68411C] max-w-md mx-auto leading-relaxed">
              "Two souls, one promise, a lifetime together. We invite you to join us and shower your warm blessings as we begin our sacred journey."
            </p>

            {/* Prominent Wedding Dates Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-cinzel">
              <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#581423] to-[#771C30] text-[#FFF6E3] shadow-md">
                <span className="block text-[10px] text-[#F4D185] uppercase tracking-wider">
                  Grand Reception
                </span>
                <span className="font-bold text-base">Saturday, 06 FEB 2027</span>
                <span className="block text-xs text-[#EAD0A5]">6:30 PM Onwards</span>
              </div>

              <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A37824] text-[#29050B] shadow-md font-semibold">
                <span className="block text-[10px] text-[#4A0E17] uppercase tracking-wider font-bold">
                  Sacred Muhurtham
                </span>
                <span className="font-bold text-base text-[#3A0710]">Sunday, 07 FEB 2027</span>
                <span className="block text-xs text-[#3A0710]">6:00 AM – 7:30 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
