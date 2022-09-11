import dayjs from 'dayjs';
import { FC, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rangeState } from '../../recoil/atoms/calendar';
import { rangeDetails } from '../../recoil/selectors/calendar';
import Day from './Day';
import DayHeader from './DayHeader';
import CalendarEvent from './Event';
import Hours, { HoursPlaceholder } from './Hours';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
`;
const Header = styled.div`
  display: flex;
`;

interface iWeekProps {}

const Week: FC<iWeekProps> = () => {
  const { start, end, numberOfDays } = useRecoilValue(rangeDetails);

  const days = useMemo(() => {
    const dates = [...new Array(numberOfDays)].map((_, i) => {
      return dayjs(start).add(i, 'day');
    });
    return dates.map((date) => ({
      year: date.year(),
      month: date.month(),
      date: date.date(),
      day: date.day(),
      iso: date.toISOString(),
    }));
  }, [numberOfDays, end]);

  return (
    <Wrapper>
      <Header>
        <HoursPlaceholder />
        {days.map(({ day, date, iso }) => {
          return <DayHeader key={`header-${iso}`} day={day} date={date}></DayHeader>;
        })}
      </Header>
      <Content>
        <Hours />
        {days.map(({ day, date, iso }) => {
          return <Day key={`day-${iso}`}></Day>;
        })}
      </Content>
    </Wrapper>
  );
};

export default Week;
