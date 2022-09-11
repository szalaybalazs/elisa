import dayjs from 'dayjs';
import { selector } from 'recoil';
import { rangeState } from '../atoms/calendar';

export const rangeDetails = selector({
  key: 'calendar-range-in-days',
  get: ({ get }) => {
    const { start, end } = get(rangeState);

    const numberOfDays = Math.abs(dayjs(start).diff(end, 'day'));

    return { start, end, numberOfDays };
  },
});
