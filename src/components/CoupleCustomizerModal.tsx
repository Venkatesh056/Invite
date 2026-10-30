/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Check, Heart, Sparkles } from 'lucide-react';
import { CoupleDetails } from '../types/wedding.ts';

interface CoupleCustomizerModalProps {
  isOpen: boolean;
  couple: CoupleDetails;
  onSave: (updated: CoupleDetails) => void;
  onClose: () => void;
}

export const CoupleCustomizerModal: React.FC<CoupleCustomizerModalProps> = ({
  isOpen,
  couple,
  onSave,
  onClose,
}) => {
  const [groomName, setGroomName] = useState(couple.groomName);
  const [brideName, setBrideName] = useState(couple.brideName);
  const [groomFamily, setGroomFamily] = useState(couple.groomFamily);
  const [brideFamily, setBrideFamily] = useState(couple.brideFamily);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      groomName: groomName.trim() || 'Jay Pradeep S',
      brideName: brideName.trim() || 'Sankarii D',
      groomFamily: groomFamily.trim() || 'Together with their families',
      brideFamily: brideFamily.trim() || 'Joyfully invite you',
      tagline: couple.tagline,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-3xl bg-[#FAF6EE] border-2 border-[#D4AF37] p-6 shadow-card-elevated text-[#3A141A]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="w-10 h-10 rounded-full bg-[#581423] text-[#F3E3A2] mx-auto flex items-center justify-center mb-2">
            <Heart className="w-5 h-5 text-[#E7C973]" />
          </div>
          <h3 className="font-cinzel text-xl font-bold text-[#581423]">
            Personalize Wedding Couple
          </h3>
          <p className="font-cormorant text-xs text-[#7A4B1A] mt-0.5">
            Enter the exact names of the bride, groom, and families
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-cinzel font-semibold text-[#581423] mb-1">
              Groom's Name (மணமகன்)
            </label>
            <input
              type="text"
              required
              value={groomName}
              onChange={(e) => setGroomName(e.target.value)}
              placeholder="e.g. Jay Pradeep S"
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D4AF37]/60 outline-none focus:border-[#581423] font-cinzel font-bold text-sm text-[#4A0E17]"
            />
          </div>

          <div>
            <label className="block text-xs font-cinzel font-semibold text-[#581423] mb-1">
              Bride's Name (மணமகள்)
            </label>
            <input
              type="text"
              required
              value={brideName}
              onChange={(e) => setBrideName(e.target.value)}
              placeholder="e.g. Sankarii D"
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D4AF37]/60 outline-none focus:border-[#581423] font-cinzel font-bold text-sm text-[#4A0E17]"
            />
          </div>

          <div>
            <label className="block text-xs font-cinzel font-semibold text-[#581423] mb-1">
              Groom's Family
            </label>
            <input
              type="text"
              value={groomFamily}
              onChange={(e) => setGroomFamily(e.target.value)}
              placeholder="e.g. Dhanabalan & Family"
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D4AF37]/60 outline-none focus:border-[#581423] font-cormorant text-sm text-[#4A0E17]"
            />
          </div>

          <div>
            <label className="block text-xs font-cinzel font-semibold text-[#581423] mb-1">
              Bride's Family
            </label>
            <input
              type="text"
              value={brideFamily}
              onChange={(e) => setBrideFamily(e.target.value)}
              placeholder="e.g. Sundaram & Family"
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D4AF37]/60 outline-none focus:border-[#581423] font-cormorant text-sm text-[#4A0E17]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-[#581423] hover:bg-[#771C30] text-[#FFF6E3] font-cinzel text-xs uppercase tracking-widest font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4 text-[#F3E3A2]" />
              <span>Update Wedding Names</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
