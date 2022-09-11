import dayjs from 'dayjs';
import { atom } from 'recoil';
import { getTimeofDay } from '../../core/time';

/**
 * Zoom state, defined in pixels per hour
 */
export const zoomState = atom({
  key: 'calendar-hour-zoom',
  default: 60,
});

export const timeState = atom({
  key: 'calendar-current-time',
  default: getTimeofDay(),
});

export const rangeState = atom({
  key: 'calendar-range',
  default: {
    start: dayjs().startOf('day').toDate(),
    end: dayjs().startOf('day').add(7, 'days').toDate(),
    type: 'week',
  },
});
