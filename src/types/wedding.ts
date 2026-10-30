/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CoupleDetails {
  groomName: string;
  brideName: string;
  groomFamily: string;
  brideFamily: string;
  tagline: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export interface RsvpEntry {
  id: string;
  fullName: string;
  phone?: string;
  attendingEvents: 'both' | 'reception' | 'muhurtham' | 'cannot_attend';
  guestCount: number;
  dietaryPreference: 'traditional_chettinad' | 'pure_veg' | 'jain_veg';
  wishes?: string;
  submittedAt: string;
}
