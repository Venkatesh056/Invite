/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTimeRemaining, validateRsvpForm, generateGoogleCalendarUrl } from './countdown.ts';

test('calculateTimeRemaining returns correct days, hours, minutes for future date', () => {
  const baseDate = new Date('2027-01-01T00:00:00Z');
  const targetDate = new Date('2027-02-06T18:30:00Z');
  const result = calculateTimeRemaining(targetDate, baseDate);

  assert.equal(result.isPast, false);
  assert.equal(result.days, 36);
  assert.equal(result.hours, 18);
  assert.equal(result.minutes, 30);
  assert.equal(result.seconds, 0);
});

test('calculateTimeRemaining handles past dates gracefully', () => {
  const pastDate = new Date('2026-01-01T00:00:00Z');
  const now = new Date('2026-10-30T00:00:00Z');
  const result = calculateTimeRemaining(pastDate, now);

  assert.equal(result.isPast, true);
  assert.equal(result.days, 0);
  assert.equal(result.hours, 0);
});

test('validateRsvpForm rejects empty name and invalid guest count', () => {
  const invalidResult = validateRsvpForm({
    fullName: '',
    guestCount: 0,
    attendingEvents: '',
  });

  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.guestCount);
  assert.ok(invalidResult.errors.attendingEvents);

  const validResult = validateRsvpForm({
    fullName: 'Sundar Raman',
    guestCount: 2,
    attendingEvents: 'both',
  });

  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('generateGoogleCalendarUrl formats valid URL with query parameters', () => {
  const url = generateGoogleCalendarUrl({
    title: 'Arjun & Siya Reception',
    description: 'Grand Wedding Reception',
    location: 'Chettinad Palace, Chennai',
    startIso: '2027-02-06T18:30:00Z',
    endIso: '2027-02-06T22:30:00Z',
  });

  assert.ok(url.startsWith('https://calendar.google.com/calendar/render?'));
  assert.ok(url.includes('action=TEMPLATE'));
  assert.ok(url.includes('Arjun'));
});
