/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CountdownTime } from '../types/wedding.ts';

export const RECEPTION_DATE_ISO = '2027-02-06T18:30:00+05:30';
export const MARRIAGE_DATE_ISO = '2027-02-07T06:00:00+05:30';

/**
 * Calculates days, hours, minutes, seconds remaining from now to target.
 */
export function calculateTimeRemaining(targetDate: Date | string, fromDate: Date = new Date()): CountdownTime {
  const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  const diffMs = target.getTime() - fromDate.getTime();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const seconds = Math.floor((diffMs / 1000) % 60);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Validates RSVP form input.
 */
export interface RsvpValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateRsvpForm(data: {
  fullName: string;
  phone?: string;
  guestCount: number;
  attendingEvents: string;
}): RsvpValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  }

  if (data.guestCount < 1 || data.guestCount > 10) {
    errors.guestCount = 'Guest count must be between 1 and 10';
  }

  if (!data.attendingEvents) {
    errors.attendingEvents = 'Please select your attendance status';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates Google Calendar link for wedding events.
 */
export function generateGoogleCalendarUrl(event: {
  title: string;
  description: string;
  location: string;
  startIso: string;
  endIso: string;
}): string {
  const formatTime = (iso: string) => {
    return new Date(iso).toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const dates = `${formatTime(event.startIso)}/${formatTime(event.endIso)}`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: event.location,
    dates,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
