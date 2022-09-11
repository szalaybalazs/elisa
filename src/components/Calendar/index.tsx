import { FC } from 'react';
import styled from 'styled-components';
import Day from './Day';
import DayHeader from './DayHeader';
import Hours, { HoursPlaceholder } from './Hours';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  max-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;
const Header = styled.div`
  display: flex;
`;

interface iCalendarProps {}

const Calendar: FC<iCalendarProps> = () => {
  return (
    <Wrapper>
      <Header>
        <HoursPlaceholder />
        <DayHeader day={0} date={1}></DayHeader>
        <DayHeader day={1} date={2}></DayHeader>
        <DayHeader day={2} date={3}></DayHeader>
        <DayHeader day={3} date={4}></DayHeader>
        <DayHeader day={4} date={5}></DayHeader>
        <DayHeader day={5} date={6}></DayHeader>
        <DayHeader day={6} date={7}></DayHeader>
      </Header>
      <Content>
        <Hours />
        <Day day={0} date={1} month={1} year={2022}></Day>
        <Day day={1} date={2} month={1} year={2022}></Day>
        <Day day={2} date={3} month={1} year={2022}></Day>
        <Day day={3} date={4} month={1} year={2022}></Day>
        <Day day={4} date={5} month={1} year={2022}></Day>
        <Day day={5} date={6} month={1} year={2022}></Day>
        <Day day={6} date={7} month={1} year={2022}></Day>
      </Content>
    </Wrapper>
  );
};

export default Calendar;
