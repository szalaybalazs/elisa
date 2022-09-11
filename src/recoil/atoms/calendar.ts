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
