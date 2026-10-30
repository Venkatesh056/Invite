/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Flame } from 'lucide-react';

export const ChettinadHeritage: React.FC = () => {
  const [litWicks, setLitWicks] = useState<boolean[]>([true, true, true, true, true]);

  const wickNames = [
    { title: 'ஞானம் (Wisdom)', desc: 'Knowledge & Guidance' },
    { title: 'செல்வம் (Prosperity)', desc: 'Abundance & Grace' },
    { title: 'மங்களம் (Auspiciousness)', desc: 'Divine Harmony' },
    { title: 'அன்பு (Eternal Love)', desc: 'Devotion & Bond' },
    { title: 'அமைதி (Serenity)', desc: 'Peace & Good Health' },
  ];

  const toggleWick = (index: number) => {
    const updated = [...litWicks];
    updated[index] = !updated[index];
    setLitWicks(updated);
  };

  return (
    <section id="chettinad" className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 relative z-10">
      
      {/* Container Using Reference Image 4 as the Rich Atmospheric Background */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-card-elevated text-white">
        
        {/* Background Image: Reference Image 4 (Chettinad Carved Pillar, Bells, Kolam, Lamps) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-60 contrast-110"
          style={{
            backgroundImage: `url('/assets/aistudio/image_c81f263c.png')`,
          }}
        />

        {/* Deep rich crimson & gold translucent overlay to ensure crystal clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B040B]/95 via-[#3B0711]/90 to-[#1F0307]/95" />

        {/* Section Content */}
        <div className="relative z-10 p-6 sm:p-10 space-y-6">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#520A17]/80 border border-[#D4AF37]/50 text-[#F5DEB3] text-xs font-cinzel uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E7C973]" />
              <span>Tamil &amp; Chettinad Wedding Traditions</span>
            </div>
            
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-gold-gradient tracking-wide">
              Timeless Cultural Heritage
            </h2>

            <p className="font-tamil text-base sm:text-lg text-[#F5DEB3] font-semibold">
              செட்டிநாட்டு மரபும் தமிழ் மங்கல சடங்குகளும்
            </p>

            <p className="font-cormorant italic text-base text-[#E5D0B1] leading-relaxed">
              Steeped in centuries of Tamil tradition: intricately carved teakwood pillars, sacred hanging bells, geometric white kolams, and the sacred five-wick Kuthuvilakku.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
            
            {/* Sacred Tamil Rituals Guide */}
            <div className="md:col-span-7 space-y-3.5">
              
              <div className="rounded-2xl p-4 bg-[#23040A]/80 border border-[#D4AF37]/35 shadow-sm space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#2B040B] flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <h4 className="font-cinzel font-bold text-sm text-[#F7E1B0]">
                    Kasi Yatra &amp; Oonjal (ஊஞ்சல்)
                  </h4>
                </div>
                <p className="font-cormorant text-xs sm:text-sm text-[#DFCDAE] pl-8 leading-relaxed">
                  The couple is led to the traditional wooden swing adorned with marigold garlands, as women sing auspicious songs to ward off evil and celebrate youthful romance.
                </p>
              </div>

              <div className="rounded-2xl p-4 bg-[#23040A]/80 border border-[#D4AF37]/35 shadow-sm space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#2B040B] flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <h4 className="font-cinzel font-bold text-sm text-[#F7E1B0]">
                    Mangalyadharanam (மாங்கல்ய தாரணம்)
                  </h4>
                </div>
                <p className="font-cormorant text-xs sm:text-sm text-[#DFCDAE] pl-8 leading-relaxed">
                  The most sacred moment: tying the holy Thirumangalyam with three knots (representing mind, speech, and deed) to the divine crescendo of the Nadaswaram and Thavil.
                </p>
              </div>

              <div className="rounded-2xl p-4 bg-[#23040A]/80 border border-[#D4AF37]/35 shadow-sm space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#2B040B] flex items-center justify-center font-bold text-xs">
                    3
                  </span>
                  <h4 className="font-cinzel font-bold text-sm text-[#F7E1B0]">
                    Saptapadi (சப்தபதி • ஏழு அடிகள்)
                  </h4>
                </div>
                <p className="font-cormorant text-xs sm:text-sm text-[#DFCDAE] pl-8 leading-relaxed">
                  Seven sacred steps taken together around the holy fire, sealing eternal friendship, nourish-ability, strength, wealth, prosperity, seasons, and lifelong harmony.
                </p>
              </div>

            </div>

            {/* Interactive Kuthuvilakku Lamp Lighting on the Chettinad Pillar */}
            <div className="md:col-span-5 rounded-2xl p-5 bg-[#2B040B]/90 border border-[#D4AF37]/50 shadow-md space-y-3">
              <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <h4 className="font-cinzel font-bold text-xs uppercase tracking-wider text-[#F8E1A1]">
                    Light The Kuthuvilakku
                  </h4>
                </div>
                <span className="font-tamil text-xs text-[#D8B984]">குத்துவிளக்கு</span>
              </div>

              <p className="font-cormorant text-xs text-[#E1CEB2]">
                In Tamil weddings, lighting the 5 auspicious wicks brings divine prosperity and chases away all shadows. Tap to light:
              </p>

              <div className="space-y-1.5">
                {wickNames.map((wick, i) => (
                  <button
                    key={wick.title}
                    type="button"
                    onClick={() => toggleWick(i)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border text-left transition-all cursor-pointer ${
                      litWicks[i]
                        ? 'bg-[#4A0A16] border-[#D4AF37] text-white shadow-sm'
                        : 'bg-[#180206] border-stone-800 text-stone-400'
                    }`}
                  >
                    <div className="leading-tight">
                      <span className="text-xs font-semibold block">{wick.title}</span>
                      <span className="text-[10px] opacity-75">{wick.desc}</span>
                    </div>
                    <span className={`text-sm ${litWicks[i] ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]' : 'opacity-30'}`}>
                      🔥
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
