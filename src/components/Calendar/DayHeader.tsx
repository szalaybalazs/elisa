import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    border-right: 1px solid red;
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  padding: 24px;
  background: lightgray;
  z-index: 2;
`;

const DayLabel = styled.span`
  display: block;
`;

const DateLabel = styled.span`
  display: block;
`;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface iDayHeaderProps {
  day: number;
  date: number;
}

const DayHeader: FC<iDayHeaderProps> = ({ day, date }) => {
  return (
    <Wrapper>
      <Header>
        <DayLabel>{days[day]}</DayLabel>
        <DateLabel>{date}</DateLabel>
      </Header>
    </Wrapper>
  );
};

export default DayHeader;
