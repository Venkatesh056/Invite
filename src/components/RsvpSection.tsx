/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Heart } from 'lucide-react';
import { validateRsvpForm } from '../utils/countdown.ts';
import { RsvpEntry } from '../types/wedding.ts';

interface RsvpSectionProps {
  onPetalShower: () => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ onPetalShower }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendingEvents, setAttendingEvents] = useState<'both' | 'reception' | 'muhurtham' | 'cannot_attend'>('both');
  const [guestCount, setGuestCount] = useState(2);
  const [dietaryPreference, setDietaryPreference] = useState<'traditional_chettinad' | 'pure_veg' | 'jain_veg'>('traditional_chettinad');
  const [wishes, setWishes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateRsvpForm({
      fullName,
      phone,
      guestCount,
      attendingEvents,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const newEntry: RsvpEntry = {
      id: Date.now().toString(),
      fullName,
      phone,
      attendingEvents,
      guestCount: attendingEvents === 'cannot_attend' ? 0 : guestCount,
      dietaryPreference,
      wishes,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existing.push(newEntry);
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
    } catch {
      // Ignore
    }

    setSubmitted(true);
    onPetalShower();
  };

  return (
    <section id="rsvp" className="w-full max-w-2xl mx-auto px-4 py-8 relative z-10">
      <div className="rounded-3xl p-6 sm:p-8 bg-[#FAF6EE]/95 border-2 border-[#D4AF37]/50 shadow-card-elevated">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EAE0CE] border border-[#C89B3C]/50 text-[#6B1627] text-xs font-cinzel uppercase tracking-widest mb-1.5">
            <Heart className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Join Our Celebration</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#581423]">
            RSVP &amp; Attendance
          </h2>
          <p className="font-tamil text-sm text-[#842636] font-medium mt-0.5">
            தங்களின் வருகையை உறுதி செய்யவும்
          </p>
          <p className="font-cormorant italic text-sm sm:text-base text-[#6E4822] max-w-md mx-auto mt-1">
            Your presence will grace our celebration with boundless warmth and happiness.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-[#F5ECE0] border border-[#C89B3C] text-center space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#581423] text-[#F8E1A1] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-[#E7C973]" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-[#581423]">
              Nandri! Your RSVP is Received
            </h3>
            <p className="font-tamil text-sm text-[#842636] font-semibold">
              நன்றி! தங்களின் நல்வரவை ஆவலுடன் எதிர்பார்க்கிறோம்
            </p>
            <p className="font-cormorant text-sm text-[#5C3B18]">
              Dear {fullName}, we are deeply touched and eager to welcome you on{' '}
              {attendingEvents === 'both'
                ? 'both the Reception (06 Feb) and Sacred Muhurtham (07 Feb)!'
                : attendingEvents === 'reception'
                ? 'the Grand Reception (06 Feb 2027)!'
                : attendingEvents === 'muhurtham'
                ? 'the Auspicious Muhurtham (07 Feb 2027)!'
                : 'your warm thoughts and prayers!'}
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-1 px-4 py-1.5 rounded-full border border-[#C89B3C] text-[#581423] font-cinzel text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer"
            >
              Update Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-cinzel font-semibold uppercase tracking-wider text-[#581423] mb-1">
                Full Name / Family Name *
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="e.g. Sundar Raman & Family"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/50 focus:border-[#581423] outline-none font-cormorant text-base text-[#3A141A]"
                />
                <User className="absolute right-3.5 top-3 w-4 h-4 text-[#C89B3C]" />
              </div>
              {errors.fullName && (
                <p className="text-red-700 text-xs mt-1 font-sans-modern">{errors.fullName}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-cinzel font-semibold uppercase tracking-wider text-[#581423] mb-1">
                Contact Phone / WhatsApp
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/50 focus:border-[#581423] outline-none font-cormorant text-base text-[#3A141A]"
                />
                <Phone className="absolute right-3.5 top-3 w-4 h-4 text-[#C89B3C]" />
              </div>
            </div>

            {/* Attending options */}
            <div>
              <label className="block text-xs font-cinzel font-semibold uppercase tracking-wider text-[#581423] mb-1.5">
                Will You Be Attending? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { value: 'both', label: 'Joyfully Attending Both', desc: 'Reception (06 Feb) & Muhurtham (07 Feb)' },
                  { value: 'reception', label: 'Attending Reception Only', desc: 'Saturday, 06 Feb • 6:30 PM' },
                  { value: 'muhurtham', label: 'Attending Muhurtham Only', desc: 'Sunday, 07 Feb • 6:00 AM' },
                  { value: 'cannot_attend', label: 'Regretfully Unable', desc: 'Sending blessings from afar' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setAttendingEvents(option.value as any)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      attendingEvents === option.value
                        ? 'bg-[#581423] border-[#581423] text-[#FFF6E3] shadow-sm'
                        : 'bg-white border-[#D4AF37]/40 text-[#5C3B18] hover:border-[#581423]/60'
                    }`}
                  >
                    <span className="font-cinzel text-xs font-bold block">{option.label}</span>
                    <span className={`text-[10px] block mt-0.5 ${attendingEvents === option.value ? 'text-[#E5CD92]' : 'text-[#7A5424]'}`}>
                      {option.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {attendingEvents !== 'cannot_attend' && (
              <div>
                <label htmlFor="guestCount" className="block text-xs font-cinzel font-semibold uppercase tracking-wider text-[#581423] mb-1">
                  Number of Guests: {guestCount}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="guestCount"
                    type="range"
                    min={1}
                    max={8}
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full accent-[#581423] cursor-pointer"
                  />
                  <span className="w-8 text-center font-cinzel font-bold text-sm text-[#581423] py-0.5 bg-white border border-[#D4AF37] rounded-lg">
                    {guestCount}
                  </span>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#581423] via-[#771C30] to-[#581423] text-[#FFF6E3] font-cinzel text-xs uppercase tracking-widest font-bold shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Send className="w-3.5 h-3.5 text-[#F3E3A2]" />
              <span>Confirm RSVP</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
