/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { CoupleDetails } from '../types/wedding.ts';

interface GaneshaWelcomeProps {
  couple: CoupleDetails;
  onOpenInvitation: () => void;
  onOpenCustomizer?: () => void;
}

export const GaneshaWelcome: React.FC<GaneshaWelcomeProps> = ({
  couple,
  onOpenInvitation,
  onOpenCustomizer,
}) => {
  const [lampLit, setLampLit] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#23040A] overflow-y-auto px-4 py-6">
      {/* Background glow and subtle traditional backdrop */}
      <div className="absolute inset-0 bg-radial from-[#450A16] via-[#23040A] to-[#100104] opacity-95 pointer-events-none" />

      {/* Floating ambient traditional kolam grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative w-full max-w-md mx-auto flex flex-col items-center text-center z-10 my-auto">
        
        {/* Auspicious Tamil Invocation */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#35050F]/80 backdrop-blur-sm text-[#F6D067] text-[11px] uppercase tracking-widest mb-2.5">
          <Sparkles className="w-3 h-3 text-[#F6D067] animate-pulse" />
          <span className="font-tamil">ஓம் ஸ்ரீ கணேசாய நமஹ • சுபமங்களம்</span>
        </div>

        {/* Lord Ganesha Reference Image (Image 2) */}
        <div className="relative group w-full max-w-[240px] sm:max-w-[270px] rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-[#E7C973] via-[#8C6218] to-[#E7C973] shadow-card-elevated">
          <div className="relative bg-[#380712] rounded-[14px] overflow-hidden">
            <img
              src="/assets/aistudio/image_04c04e01.png"
              alt="Lord Ganesha - Om Shree Ganeshay Namah"
              className="w-full max-h-[280px] object-contain mx-auto transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#F0D58A]/30 rounded-[14px] pointer-events-none" />
          </div>
        </div>

        {/* Traditional Welcome Note */}
        <div className="mt-3.5 space-y-1 px-2">
          <p className="font-tamil text-xs sm:text-sm text-[#F5DEB3] font-medium tracking-wide">
            குருவடி சரணம் • விக்னேஸ்வரர் துணை
          </p>
          <h1 className="font-cinzel text-lg sm:text-xl text-[#FFF3D1] tracking-wider font-semibold">
            Together With Divine Blessings
          </h1>
          <p className="font-cormorant text-sm sm:text-base text-[#ECD6A5] max-w-sm mx-auto italic leading-snug">
            We joyfully welcome our family, elders, and friends to celebrate the sacred wedding of
          </p>
          
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient tracking-widest pt-0.5">
            {couple.groomName} <span className="text-[#E7C973] font-normal">&amp;</span> {couple.brideName}
          </h2>

          <div className="flex items-center justify-center gap-3 text-[11px] font-cinzel text-[#F0CF78] pt-1">
            <span>RECEPTION: 06 FEB 2027</span>
            <span>•</span>
            <span>MUHURTHAM: 07 FEB 2027</span>
          </div>
        </div>

        {/* Auspicious Diya Lamp Toggle */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setLampLit(!lampLit)}
            aria-label="Light auspicious diya"
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D0712]/80 border border-[#D4AF37]/50 text-xs text-[#F8E1A1] hover:bg-[#520A19] transition-colors cursor-pointer"
          >
            <span className={`text-sm ${lampLit ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]' : 'text-gray-400'}`}>🪔</span>
            <span>{lampLit ? 'Diya is Lit (மங்கல விளக்கு)' : 'Touch to Light Diya'}</span>
          </button>
        </div>

        {/* Main Action: Enter Digital Wedding Invitation */}
        <div className="mt-4 w-full px-4 space-y-2">
          <button
            type="button"
            onClick={onOpenInvitation}
            className="group relative w-full sm:w-auto min-w-[260px] inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E3A2] to-[#B8860B] text-[#3A0A14] font-cinzel text-sm sm:text-base font-bold uppercase tracking-widest shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Open Wedding Invitation</span>
            <ArrowRight className="w-4 h-4 text-[#4A0E17] group-hover:translate-x-1 transition-transform" />
          </button>

          {onOpenCustomizer && (
            <div>
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="text-[11px] text-[#E5CD92] hover:text-white underline underline-offset-4 cursor-pointer font-cormorant transition-colors"
              >
                Change Bride &amp; Groom Names
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
