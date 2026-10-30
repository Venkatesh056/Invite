/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';

export const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="w-full max-w-4xl mx-auto px-4 py-8 relative z-10">
      <div className="rounded-3xl p-6 sm:p-8 bg-[#FAF6EE]/95 border-2 border-[#D4AF37]/50 shadow-card-elevated">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EAE0CE] border border-[#C89B3C]/50 text-[#6B1627] text-xs font-cinzel uppercase tracking-widest mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Ceremony Locations</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#581423]">
            Venues &amp; Schedule
          </h2>
          <p className="font-tamil text-sm sm:text-base text-[#842636] font-medium mt-1">
            மண்டபம் மற்றும் திருமண அரங்க வழிகாட்டி
          </p>
        </div>

        {/* 2 Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Reception Venue */}
          <div className="rounded-2xl p-5 bg-white/90 border border-[#D4AF37]/40 shadow-sm space-y-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#581423] text-[#F3E3A2] text-[10px] font-cinzel font-bold tracking-wider inline-block">
              RECEPTION VENUE
            </span>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#581423]">
                Grand Celebration Hall
              </h3>
              <p className="font-cormorant text-sm text-[#663F19]">
                Chennai, Tamil Nadu
              </p>
            </div>
            <div className="pt-2 border-t border-[#EAE0CE] space-y-1 text-xs text-[#7A4B1A]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span className="font-cinzel font-semibold">Saturday, 06 February 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>6:30 PM Onwards</span>
              </div>
            </div>
          </div>

          {/* Muhurtham Venue */}
          <div className="rounded-2xl p-5 bg-white/90 border border-[#D4AF37]/40 shadow-sm space-y-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C89B3C] text-[#3D0A14] text-[10px] font-cinzel font-bold tracking-wider inline-block">
              MUHURTHAM VENUE
            </span>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#581423]">
                Traditional Temple Mandapam
              </h3>
              <p className="font-cormorant text-sm text-[#663F19]">
                Chennai, Tamil Nadu
              </p>
            </div>
            <div className="pt-2 border-t border-[#EAE0CE] space-y-1 text-xs text-[#7A4B1A]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span className="font-cinzel font-semibold">Sunday, 07 February 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Morning 6:00 AM – 7:30 AM (Brahma Muhurtham)</span>
              </div>
            </div>
          </div>

        </div>

        <p className="mt-4 text-center text-xs font-cormorant italic text-[#7A5424]">
          * Exact venue hall details, parking directions, and Google Maps pin will be delivered along with the invitation updates.
        </p>

      </div>
    </section>
  );
};
