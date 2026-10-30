/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Clock, Calendar, Bell } from 'lucide-react';
import { calculateTimeRemaining, RECEPTION_DATE_ISO, MARRIAGE_DATE_ISO } from '../utils/countdown.ts';
import { CountdownTime } from '../types/wedding.ts';

export const CountdownTimer: React.FC = () => {
  const [activeTarget, setActiveTarget] = useState<'reception' | 'muhurtham'>('reception');
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  const targetDateIso = activeTarget === 'reception' ? RECEPTION_DATE_ISO : MARRIAGE_DATE_ISO;

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeRemaining(targetDateIso));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDateIso]);

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E5] to-[#F5EAD7] border border-[#D4AF37]/50 shadow-card-elevated text-center relative overflow-hidden">
        
        {/* Subtle Ornamental Corner Details */}
        <div className="absolute top-3 left-3 text-lg opacity-40">⚜️</div>
        <div className="absolute top-3 right-3 text-lg opacity-40">⚜️</div>
        <div className="absolute bottom-3 left-3 text-lg opacity-40">⚜️</div>
        <div className="absolute bottom-3 right-3 text-lg opacity-40">⚜️</div>

        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 text-xs font-cinzel text-[#8F661B] uppercase tracking-widest mb-1">
          <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>The Auspicious Countdown</span>
        </div>
        <h2 className="font-script text-3xl sm:text-4xl text-[#771C30] mb-1">
          Forever begins in
        </h2>
        <p className="font-tamil text-xs sm:text-sm text-[#842636] font-medium mb-6">
          மங்கல தருணம் நெருங்கும் நேரம்
        </p>

        {/* Switcher: Reception (Feb 6) vs Muhurtham (Feb 7) */}
        <div className="inline-flex p-1 rounded-full bg-[#EADCC6]/60 border border-[#D4AF37]/40 mb-6">
          <button
            type="button"
            onClick={() => setActiveTarget('reception')}
            className={`px-4 py-1.5 rounded-full text-xs font-cinzel transition-all cursor-pointer ${
              activeTarget === 'reception'
                ? 'bg-[#581423] text-[#FFF6E3] shadow-sm font-semibold'
                : 'text-[#613A16] hover:text-[#581423]'
            }`}
          >
            Reception (06 Feb 2027)
          </button>
          <button
            type="button"
            onClick={() => setActiveTarget('muhurtham')}
            className={`px-4 py-1.5 rounded-full text-xs font-cinzel transition-all cursor-pointer ${
              activeTarget === 'muhurtham'
                ? 'bg-[#581423] text-[#FFF6E3] shadow-sm font-semibold'
                : 'text-[#613A16] hover:text-[#581423]'
            }`}
          >
            Muhurtham (07 Feb 2027)
          </button>
        </div>

        {/* Countdown Digits Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days, tamil: 'நாட்கள்' },
            { label: 'HOURS', value: timeLeft.hours, tamil: 'மணி' },
            { label: 'MINUTES', value: timeLeft.minutes, tamil: 'நிமிடம்' },
            { label: 'SECONDS', value: timeLeft.seconds, tamil: 'வினாடி' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-3 sm:p-4 bg-white/90 border border-[#D4AF37]/40 shadow-sm flex flex-col items-center justify-center transform transition-transform hover:-translate-y-1"
            >
              <span className="font-cinzel text-2xl sm:text-4xl font-bold text-[#581423]">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[11px] text-[#8F661B] tracking-wider uppercase mt-1">
                {item.label}
              </span>
              <span className="font-tamil text-[9px] text-[#842636]/80">
                {item.tamil}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-[#7A4B1A] font-cormorant italic">
          {activeTarget === 'reception'
            ? 'Grand Reception commences Saturday evening at 6:30 PM'
            : 'Sacred Brahma Muhurtham ceremony commences Sunday dawn at 6:00 AM'}
        </div>
      </div>
    </section>
  );
};
