/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Heart, Flame } from 'lucide-react';
import { generateGoogleCalendarUrl, MARRIAGE_DATE_ISO } from '../utils/countdown.ts';
import { weddingAudio } from '../utils/audio.ts';

interface MuhurthamCardProps {
  onPetalShower: () => void;
}

export const MuhurthamCard: React.FC<MuhurthamCardProps> = ({ onPetalShower }) => {
  const [akshathaiCount, setAkshathaiCount] = useState(108);
  const [hasBlessed, setHasBlessed] = useState(false);

  const handleBlessing = () => {
    setAkshathaiCount((prev) => prev + 1);
    setHasBlessed(true);
    weddingAudio.playTempleBell(1040);
    onPetalShower();
  };

  const calendarUrl = generateGoogleCalendarUrl({
    title: 'Arjun & Siya - Sacred Wedding Ceremony (திருமணம்)',
    description: 'Auspicious Muhurtham & Mangalyadharanam ceremony followed by traditional banana leaf feast (வாழை இலை விருந்து).',
    location: 'Sri Meenakshi Sundareswarar Mandapam, Raja Muthiah Road, Chennai',
    startIso: '2027-02-07T06:00:00+05:30',
    endIso: '2027-02-07T12:00:00+05:30',
  });

  return (
    <section id="muhurtham" className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <div className="rounded-3xl bg-[#FAF5EC] border-2 border-[#D4AF37]/60 shadow-royal overflow-hidden">
        
        {/* Section Header */}
        <div className="pt-8 pb-4 px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE3CF] border border-[#C89B3C]/50 text-[#6B1627] text-xs font-cinzel uppercase tracking-widest mb-2">
            <Flame className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>Sacred Muhurtham &amp; Agni Homam</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#581423] tracking-wide">
            The Holy Wedding Ceremony
          </h2>
          <p className="font-tamil text-base sm:text-lg text-[#842636] font-semibold mt-1">
            திருமாங்கல்ய தாரணம் &amp; சப்தபதி
          </p>
          <p className="font-cormorant italic text-base sm:text-lg text-[#6E4822] max-w-xl mx-auto mt-2">
            In the sacred presence of the Agni (sacred fire), divine mantras, and loving blessings of our elders and family.
          </p>
        </div>

        {/* Hero Card Image: Reference Image 3 (Boy & Girl standing before Fire) */}
        <div className="px-4 sm:px-8 pb-6">
          <div className="relative group max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-card-elevated border-2 border-[#C89B3C]/50 bg-black">
            <img
              src="/assets/aistudio/image_10df2845.png"
              alt="Arjun and Siya in front of sacred fire Agni homam with banana trees and temple stone pillars"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102"
            />

            {/* Subtle Warm Gradient Overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-tamil text-amber-300 text-sm font-semibold block">
                    சுப முகூர்த்த நேரம்
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Sunday, 07 February 2027
                  </h3>
                  <p className="font-cormorant text-sm text-[#F7E2B0]">
                    Brahma Muhurtham: 6:00 AM – 7:30 AM (மாசி 24)
                  </p>
                </div>

                {/* Interactive Akshathai / Petal Shower Button right on image */}
                <button
                  type="button"
                  onClick={handleBlessing}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E7C973] text-[#3D0A14] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#581423]" />
                  <span>Bless With Akshathai ({akshathaiCount})</span>
                </button>
              </div>
            </div>
          </div>

          {hasBlessed && (
            <div className="mt-3 text-center text-xs text-[#842636] font-tamil animate-fade-in">
              ✨ உங்கள் அட்சதை ஆசீர்வாதங்கள் தம்பதியினரை சென்றடைந்தது! (Your holy blessings have been offered)
            </div>
          )}
        </div>

        {/* Detailed Rituals Grid */}
        <div className="px-6 sm:px-10 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="rounded-2xl p-5 bg-white/90 border border-[#D4AF37]/40 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#581423] text-[#F3E3A2] flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-cinzel font-bold text-[#581423] text-base">
                    Kasi Yatra &amp; Oonjal
                  </h4>
                  <span className="font-tamil text-xs text-[#8F661B]">காசி யாத்திரை &amp; ஊஞ்சல் உற்சவம்</span>
                </div>
              </div>
              <p className="font-cormorant text-sm text-[#663F19] leading-relaxed">
                The playful tradition where the groom is guided back to household life, followed by the joyful singing of auspicious songs as the couple sits on the ornate swing.
              </p>
              <div className="text-xs text-[#842636] font-cinzel font-semibold">
                Time: 6:00 AM – 6:45 AM
              </div>
            </div>

            <div className="rounded-2xl p-5 bg-white/90 border border-[#D4AF37]/40 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#581423] text-[#F3E3A2] flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-cinzel font-bold text-[#581423] text-base">
                    Mangalyadharanam &amp; Saptapadi
                  </h4>
                  <span className="font-tamil text-xs text-[#8F661B]">மாங்கல்ய தாரணம் &amp; ஏழு அடிகள்</span>
                </div>
              </div>
              <p className="font-cormorant text-sm text-[#663F19] leading-relaxed">
                The sacred tying of the golden Thirumangalyam to the resonance of the divine Nadaswaram, followed by 7 sacred vows taken around the holy fire.
              </p>
              <div className="text-xs text-[#842636] font-cinzel font-semibold">
                Time: 6:45 AM – 7:30 AM (Muhurtham)
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#F4E9D7] border border-[#D4AF37]/40">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#8F661B]" />
              <div className="text-left">
                <span className="font-cinzel text-xs font-bold text-[#581423] block">
                  Traditional Banana Leaf Feast (விருந்து)
                </span>
                <span className="text-xs text-[#6E4822]">
                  Commences immediately after Muhurtham (8:30 AM onwards)
                </span>
              </div>
            </div>

            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#581423] hover:bg-[#771C30] text-[#FFF6E3] font-cinzel text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F3E3A2]" />
              <span>Add Muhurtham to Calendar</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
