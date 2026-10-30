/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Music, Utensils, Heart } from 'lucide-react';
import { generateGoogleCalendarUrl, RECEPTION_DATE_ISO, MARRIAGE_DATE_ISO } from '../utils/countdown.ts';

export const EventsSection: React.FC = () => {
  const receptionCalUrl = generateGoogleCalendarUrl({
    title: 'Arjun & Siya - Grand Wedding Reception',
    description: 'An enchanting evening of music, celebration, and royal dinner honoring the newlyweds Arjun & Siya.',
    location: 'Grand Royal Ballroom, The Leela Palace, Chennai',
    startIso: '2027-02-06T18:30:00+05:30',
    endIso: '2027-02-06T22:30:00+05:30',
  });

  const marriageCalUrl = generateGoogleCalendarUrl({
    title: 'Arjun & Siya - Sacred Tamil Wedding (முகூர்த்தம்)',
    description: 'Sacred Muhurtham, Mangalyadharanam, and traditional banana leaf feast (வாழை இலை விருந்து).',
    location: 'Sri Meenakshi Sundareswarar Mandapam, Raja Muthiah Road, Chennai',
    startIso: '2027-02-07T06:00:00+05:30',
    endIso: '2027-02-07T12:00:00+05:30',
  });

  return (
    <section id="events" className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F4EBDD] border border-[#C89B3C]/50 text-[#6E1226] text-xs font-cinzel uppercase tracking-widest mb-2">
          <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>Wedding Itinerary &amp; Timeline</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#581423] tracking-wide">
          Celebration Events
        </h2>
        <p className="font-tamil text-base sm:text-lg text-[#842636] font-medium mt-1">
          மங்கல நிகழ்வுகளின் நிரல்
        </p>
        <p className="font-cormorant italic text-base sm:text-lg text-[#6E4822] max-w-md mx-auto mt-2">
          Two days of timeless rituals, hearty laughter, divine music, and unforgettable memories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* EVENT 1: RECEPTION (6/2/2027) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#FAF6EE] border-2 border-[#D4AF37]/50 shadow-card-elevated flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all">
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#581423] text-[#F3E3A2] font-cinzel text-[11px] font-bold tracking-wider">
            DAY 1
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-cinzel text-[#8F661B] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#C89B3C]" />
              <span>Evening of Joy &amp; Music</span>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#581423]">
              The Grand Reception
            </h3>
            <span className="font-tamil text-sm text-[#842636] font-semibold block mt-0.5">
              வரவேற்பு நிகழ்ச்சி
            </span>

            {/* Date & Time pill */}
            <div className="my-5 p-4 rounded-2xl bg-white/90 border border-[#D4AF37]/30 space-y-2">
              <div className="flex items-center gap-3 text-sm font-cinzel text-[#4A0E17]">
                <Calendar className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span className="font-bold">Saturday, 06 February 2027</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-cinzel text-[#6E4822]">
                <Clock className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>6:30 PM Onwards</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#6E4822]">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span className="font-cormorant text-base">
                  Grand Ballroom, The Leela Palace, MRC Nagar, Chennai
                </span>
              </div>
            </div>

            {/* Event Highlights */}
            <div className="space-y-2 text-xs font-cormorant text-[#663F19] text-base">
              <p>• Couple Grand Entry &amp; Garland Exchange</p>
              <p>• Live Classical Fusion Musical Concert</p>
              <p>• Royal Chettinad &amp; Pan-Indian Banquet Dinner</p>
              <p className="font-cinzel text-xs font-semibold text-[#842636] pt-1">
                Dress Code: Indo-Western, Formal Elegance or Silk Kurta
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5CD92]/60">
            <a
              href={receptionCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#581423] hover:bg-[#771C30] text-[#FFF6E3] font-cinzel text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F3E3A2]" />
              <span>Add Reception to Calendar</span>
            </a>
          </div>
        </div>

        {/* EVENT 2: MUHURTHAM (7/2/2027) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#FAF6EE] border-2 border-[#C89B3C]/70 shadow-card-elevated flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all">
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#C89B3C] text-[#3D0A14] font-cinzel text-[11px] font-bold tracking-wider">
            DAY 2
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-cinzel text-[#8F661B] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#C89B3C]" />
              <span>Auspicious Vedic Union</span>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#581423]">
              Sacred Muhurtham
            </h3>
            <span className="font-tamil text-sm text-[#842636] font-semibold block mt-0.5">
              சுபமுகூர்த்த நன்னாள்
            </span>

            {/* Date & Time pill */}
            <div className="my-5 p-4 rounded-2xl bg-white/90 border border-[#D4AF37]/30 space-y-2">
              <div className="flex items-center gap-3 text-sm font-cinzel text-[#4A0E17]">
                <Calendar className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span className="font-bold">Sunday, 07 February 2027</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-cinzel text-[#6E4822]">
                <Clock className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>Morning 6:00 AM – 7:30 AM (Brahma Muhurtham)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#6E4822]">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span className="font-cormorant text-base">
                  Sri Meenakshi Sundareswarar Mandapam, Raja Muthiah Road, Chennai
                </span>
              </div>
            </div>

            {/* Event Highlights */}
            <div className="space-y-2 text-xs font-cormorant text-[#663F19] text-base">
              <p>• Kasi Yatra &amp; Auspicious Oonjal Swing Ritual</p>
              <p>• Sacred Thali Tying (மாங்கல்ய தாரணம்) to Nadaswaram</p>
              <p>• Grand Traditional Banana Leaf Feast (இலை விருந்து)</p>
              <p className="font-cinzel text-xs font-semibold text-[#842636] pt-1">
                Dress Code: Traditional South Indian Silk Saree &amp; Pattu Veshti
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5CD92]/60">
            <a
              href={marriageCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#A37824] hover:brightness-110 text-[#29050B] font-cinzel text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-[#3A0710]" />
              <span>Add Muhurtham to Calendar</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
