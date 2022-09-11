import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { rangeState } from '../../recoil/atoms/calendar';
import Week from './Week';

interface iCalendarProps {}

const Calendar: FC<iCalendarProps> = () => {
  const { type } = useRecoilValue(rangeState);
  if (type === 'week') return <Week />;
  return null;
};

export default Calendar;
