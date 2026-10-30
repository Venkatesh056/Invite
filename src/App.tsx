/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GaneshaWelcome } from './components/GaneshaWelcome.tsx';
import { StorytellingHero } from './components/StorytellingHero.tsx';
import { ChettinadHeritage } from './components/ChettinadHeritage.tsx';
import { CountdownTimer } from './components/CountdownTimer.tsx';
import { VenueSection } from './components/VenueSection.tsx';
import { RsvpSection } from './components/RsvpSection.tsx';
import { BottomNavBar } from './components/BottomNavBar.tsx';
import { ThreePetalCanvas } from './components/ThreePetalCanvas.tsx';
import { CoupleCustomizerModal } from './components/CoupleCustomizerModal.tsx';
import { CoupleDetails } from './types/wedding.ts';
import { Heart, Edit3 } from 'lucide-react';

const DEFAULT_COUPLE: CoupleDetails = {
  groomName: 'Jay Pradeep S',
  brideName: 'Sankarii D',
  groomFamily: 'Together with their families',
  brideFamily: 'Joyfully invite you',
  tagline: 'Two Souls. One Promise. A Lifetime Together.',
};

export default function App() {
  const isAutostart = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('autostart') === '1';

  const [hasOpenedGanesha, setHasOpenedGanesha] = useState(isAutostart);
  const [petalBurst, setPetalBurst] = useState(0);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Load customizable couple names from localStorage if available, defaulting to Jay Pradeep S & Sankarii D
  const [couple, setCouple] = useState<CoupleDetails>(() => {
    try {
      const saved = localStorage.getItem('wedding_couple_details');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.groomName && parsed.groomName !== 'Venkatesh' && parsed.groomName !== 'Arjun') {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_COUPLE;
  });

  const handleSaveCouple = (updated: CoupleDetails) => {
    setCouple(updated);
    try {
      localStorage.setItem('wedding_couple_details', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleOpenGanesha = () => {
    setHasOpenedGanesha(true);
    setPetalBurst((prev) => prev + 1);
  };

  const handleTriggerPetalShower = () => {
    setPetalBurst((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#332018] relative selection:bg-[#581423] selection:text-[#F8E1A1] overflow-x-hidden">
      
      {/* 
        1. BACKGROUND SCENIC ATMOSPHERE INSPIRED BY REFERENCE IMAGE 1:
        Royal fort palace reflecting over water with cascading pink bougainvillea flowers
      */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-25 filter saturate-110"
        style={{
          backgroundImage: `url('/assets/aistudio/image_dda6980d.png')`,
        }}
        aria-hidden="true"
      />

      {/* Soft warm parchment gradient overlay for seamless contrast & readable elegance */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#FDFBF7]/92 via-[#FAF5EA]/85 to-[#FDFBF7]/95"
        aria-hidden="true"
      />

      {/* Three.js 3D Floating Rose & Marigold Petals */}
      <ThreePetalCanvas burstTrigger={petalBurst} />

      {/* 2. INITIAL GANESHA WELCOMING OVERLAY (Reference Image 2) */}
      {!hasOpenedGanesha && (
        <GaneshaWelcome
          couple={couple}
          onOpenInvitation={handleOpenGanesha}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
      )}

      {/* 3. MAIN STORYTELLING DIGITAL WEDDING INVITATION */}
      <main className="relative z-10 pb-24">
        
        {/* Auspicious Top Header Bar */}
        <header className="bg-gradient-to-r from-[#2F060E] via-[#4F0D1C] to-[#2F060E] text-[#F8E1A1] py-2 px-4 text-xs border-b border-[#D4AF37]/50 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-tamil text-xs">🕉️ ஓம் ஸ்ரீ கணேசாய நமஹ</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-cinzel text-[11px] tracking-widest text-[#E7C973]">
              {couple.groomName.toUpperCase()} &amp; {couple.brideName.toUpperCase()} WEDDING
            </span>
            <button
              type="button"
              onClick={() => setIsCustomizerOpen(true)}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50 text-[10px] text-[#F3E3A2] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit Names</span>
            </button>
            <button
              type="button"
              onClick={() => setHasOpenedGanesha(false)}
              className="px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50 text-[10px] text-[#F3E3A2] hover:bg-white/10 transition-colors cursor-pointer"
            >
              Reopen Blessing
            </button>
          </div>
        </header>

        {/* 
          CHAPTER 1 & 2: THE ROYAL INVITATION & REALISTIC SACRED FIRE COUPLE PHOTO CARD (Reference Image 3)
          Showcases the bride & groom standing before the sacred fire, along with 
          Reception (06/02/2027) & Muhurtham (07/02/2027)
        */}
        <StorytellingHero
          couple={couple}
          onPetalShower={handleTriggerPetalShower}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* CHAPTER 3: TRADITIONAL CHETTINAD & TAMIL HERITAGE (Reference Image 4 as Background) */}
        <ChettinadHeritage />

        {/* CHAPTER 4: LIVE AUSPICIOUS COUNTDOWN TO FEB 6 & 7, 2027 */}
        <CountdownTimer />

        {/* CHAPTER 5: CEREMONY VENUES & SCHEDULE */}
        <VenueSection />

        {/* CHAPTER 6: GUEST RSVP & ATTENDANCE */}
        <RsvpSection onPetalShower={handleTriggerPetalShower} />

        {/* EPILOGUE & TRADITIONAL BLESSINGS */}
        <footer className="mt-8 text-center text-xs font-cormorant text-[#7A5427] space-y-1.5 px-4">
          <div className="flex items-center justify-center gap-2 text-base text-[#581423]">
            <Heart className="w-3.5 h-3.5 fill-current text-[#A32039]" />
            <span className="font-cinzel font-semibold tracking-wider">With Love &amp; Respect</span>
            <Heart className="w-3.5 h-3.5 fill-current text-[#A32039]" />
          </div>
          <p className="font-cinzel text-xs text-[#581423] font-bold">
            {couple.groomName} &amp; {couple.brideName}
          </p>
          <p className="font-tamil text-xs text-[#842636]">
            வாழ்க வளமுடன் • சுபமங்களம்
          </p>
          <p className="text-[11px] text-[#8F661B] opacity-80">
            06 &amp; 07 February 2027 • Chennai, Tamil Nadu
          </p>
        </footer>
      </main>

      {/* 4. STREAMLINED BOTTOM NAVIGATION */}
      <BottomNavBar onPetalShower={handleTriggerPetalShower} />

      {/* 5. COUPLE NAMES CUSTOMIZER MODAL */}
      <CoupleCustomizerModal
        isOpen={isCustomizerOpen}
        couple={couple}
        onSave={handleSaveCouple}
        onClose={() => setIsCustomizerOpen(false)}
      />
    </div>
  );
}
