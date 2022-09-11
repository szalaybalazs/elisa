import { iCalendarEvent } from '../types/event';

export const dummyEvents: iCalendarEvent[] = [
  {
    id: '1',
    year: 2022,
    month: 8,
    date: 11,

    start: { hour: 9, minute: 0 },
    end: { hour: 11, minute: 0 },

    title: 'Test',
  },
  {
    id: '2',
    year: 2022,
    month: 8,
    date: 11,

    start: { hour: 13, minute: 0 },
    end: { hour: 14, minute: 0 },

    title: 'Test 2',
  },
];
