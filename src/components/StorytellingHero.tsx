/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, Heart, Edit3 } from 'lucide-react';
import { CoupleDetails } from '../types/wedding.ts';
import { generateGoogleCalendarUrl } from '../utils/countdown.ts';

interface StorytellingHeroProps {
  couple: CoupleDetails;
  onPetalShower: () => void;
  onOpenCustomizer: () => void;
}

export const StorytellingHero: React.FC<StorytellingHeroProps> = ({
  couple,
  onPetalShower,
  onOpenCustomizer,
}) => {
  const [akshathaiCount, setAkshathaiCount] = useState(108);
  const [hasBlessed, setHasBlessed] = useState(false);

  const handleBless = () => {
    setAkshathaiCount((prev) => prev + 1);
    setHasBlessed(true);
    onPetalShower();
  };

  const receptionCalUrl = generateGoogleCalendarUrl({
    title: `${couple.groomName} & ${couple.brideName} - Grand Wedding Reception`,
    description: `Joyous wedding reception honoring the newlyweds ${couple.groomName} and ${couple.brideName}.`,
    location: 'Chennai, Tamil Nadu',
    startIso: '2027-02-06T18:30:00+05:30',
    endIso: '2027-02-06T22:30:00+05:30',
  });

  const muhurthamCalUrl = generateGoogleCalendarUrl({
    title: `${couple.groomName} & ${couple.brideName} - Sacred Vedic Wedding (திருமணம்)`,
    description: `Sacred Brahma Muhurtham and Mangalyadharanam ceremony of ${couple.groomName} & ${couple.brideName}.`,
    location: 'Chennai, Tamil Nadu',
    startIso: '2027-02-07T06:00:00+05:30',
    endIso: '2027-02-07T12:00:00+05:30',
  });

  return (
    <section id="invitation-hero" className="relative w-full max-w-4xl mx-auto px-4 pt-6 pb-12 z-10">
      
      {/* 1. ROYAL PALACE WELCOMING HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF3E5]/90 border border-[#D4AF37]/50 text-[#691425] text-xs font-cinzel uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>சுபமங்கள திருமண அழைப்பிதழ்</span>
        </div>

        <p className="font-cormorant text-sm sm:text-base text-[#734A21] uppercase tracking-widest">
          {couple.groomFamily} &amp; {couple.brideFamily}
        </p>

        <p className="font-cormorant text-base sm:text-lg text-[#5A3314] italic">
          Joyfully invite you and your family to celebrate the holy wedding ceremony of
        </p>

        {/* Dynamic & Editable Couple Names */}
        <div className="relative inline-block group">
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest text-[#581423] drop-shadow-sm">
            {couple.groomName} <span className="font-normal text-[#C89B3C]">&amp;</span> {couple.brideName}
          </h1>

          <button
            type="button"
            onClick={onOpenCustomizer}
            title="Edit Names"
            className="absolute -right-7 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[#FAF3E5] border border-[#D4AF37]/50 text-[#581423] opacity-60 hover:opacity-100 transition-opacity cursor-pointer shadow-sm"
            aria-label="Edit Couple Names"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="font-tamil text-base sm:text-lg text-[#842636] font-semibold">
          இரு மனங்கள் இணையும் புனித மங்கல பந்தம்
        </p>

        <p className="font-cormorant italic text-base sm:text-lg text-[#69421B] max-w-lg mx-auto">
          "Two souls. One promise. A lifetime together in sacred love and dharma."
        </p>
      </div>

      {/* 2. THE MAIN INVITATION CARD AREA FEATURING ENHANCED SACRED FIRE WEDDING PHOTO (Image 3) */}
      <div className="relative rounded-3xl p-5 sm:p-8 bg-[#FAF6EE]/95 border-2 border-[#D4AF37]/70 shadow-card-elevated backdrop-blur-sm overflow-hidden">
        
        {/* Ornate Gold Border Inner Accents */}
        <div className="absolute top-2 left-2 text-base text-[#C89B3C]/40 select-none">⚜️</div>
        <div className="absolute top-2 right-2 text-base text-[#C89B3C]/40 select-none">⚜️</div>
        <div className="absolute bottom-2 left-2 text-base text-[#C89B3C]/40 select-none">⚜️</div>
        <div className="absolute bottom-2 right-2 text-base text-[#C89B3C]/40 select-none">⚜️</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Enhanced Realistic Couple Photo Before Sacred Fire */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-card-elevated border-2 border-[#D4AF37] bg-black">
              
              {/* Clean crop to eliminate corner watermarks ("AI modified" and UI buttons) */}
              <div className="relative overflow-hidden w-full aspect-[3/4]">
                <img
                  src="/assets/aistudio/image_10df2845.png"
                  alt="Bride and Groom standing in front of sacred fire (Agni Homam) in traditional Tamil wedding attire"
                  className="w-full h-full object-cover object-center scale-[1.04] filter brightness-105 contrast-105 transform transition-transform duration-700 group-hover:scale-108"
                />

                {/* Soft warm Agni fire glow overlay and vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/40 rounded-2xl pointer-events-none" />

                {/* Auspicious Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <span className="font-tamil text-amber-300 text-xs font-semibold block">
                      சுப முகூர்த்தம் • அக்னி சாட்சி
                    </span>
                    <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider">
                      Sacred Agni Saptapadi
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleBless}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E3A2] text-[#3D0A14] font-cinzel font-bold text-[11px] uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#581423]" />
                    <span>Bless ({akshathaiCount})</span>
                  </button>
                </div>
              </div>
            </div>

            {hasBlessed && (
              <p className="mt-2 text-center text-xs font-tamil text-[#842636] font-medium animate-fade-in">
                ✨ உங்கள் அட்சதை ஆசீர்வாதம் தம்பதியினரை சென்றடைந்தது!
              </p>
            )}
          </div>

          {/* Invitation Dates & Sacred Ceremonies Information */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="border-b border-[#EADCC6] pb-3">
              <span className="text-xs font-cinzel font-semibold text-[#8F661B] uppercase tracking-widest block">
                Official Wedding Dates
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#581423] mt-0.5">
                Save The Auspicious Dates
              </h2>
              <p className="font-tamil text-xs text-[#842636] font-medium mt-1">
                மங்கல நிகழ்வுகளின் நன்னாள்கள்
              </p>
            </div>

            {/* EVENT 1: RECEPTION (6/2/2027) */}
            <div className="rounded-2xl p-4 bg-white/90 border border-[#D4AF37]/50 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#581423] text-[#F3E3A2] text-[10px] font-cinzel font-bold tracking-wider">
                  DAY 1 • RECEPTION
                </span>
                <span className="font-cinzel text-xs text-[#8F661B]">Evening 6:30 PM Onwards</span>
              </div>

              <h3 className="font-cinzel text-xl font-bold text-[#581423]">
                Saturday, 06 February 2027
              </h3>
              <p className="font-tamil text-xs text-[#842636]">
                வரவேற்பு நல்மாலை நிகழ்வு • Gala Banquet &amp; Music
              </p>
              <p className="font-cormorant text-xs sm:text-sm text-[#663F19] leading-relaxed">
                An enchanting evening of congratulations, joy, musical celebration, and royal dinner honoring the newlyweds.
              </p>

              <div className="pt-1">
                <a
                  href={receptionCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold text-[#842636] hover:text-[#581423] hover:underline"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>Add Reception to Calendar →</span>
                </a>
              </div>
            </div>

            {/* EVENT 2: SACRED MUHURTHAM (7/2/2027) */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#FFF9EE] to-[#FAF1DF] border-2 border-[#D4AF37]/80 shadow-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C89B3C] text-[#3A0710] text-[10px] font-cinzel font-bold tracking-wider">
                  DAY 2 • SACRED MUHURTHAM
                </span>
                <span className="font-cinzel text-xs text-[#8F661B] font-bold">Dawn 6:00 AM – 7:30 AM</span>
              </div>

              <h3 className="font-cinzel text-xl font-bold text-[#581423]">
                Sunday, 07 February 2027
              </h3>
              <p className="font-tamil text-xs text-[#842636] font-semibold">
                சுபமுகூர்த்த நன்னாள் • பிரம்ம முகூர்த்தம் (மாசி 24)
              </p>
              <p className="font-cormorant text-xs sm:text-sm text-[#663F19] leading-relaxed">
                Vedic marriage rites in front of the holy fire (Agni), sacred Thali tying (மாங்கல்ய தாரணம்) to the divine resonance of the Nadaswaram, followed by elders' blessings.
              </p>

              <div className="pt-1">
                <a
                  href={muhurthamCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold text-[#842636] hover:text-[#581423] hover:underline"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>Add Muhurtham to Calendar →</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
