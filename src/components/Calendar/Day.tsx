import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { msPerDay } from '../../core/time';
import { timeState, zoomState } from '../../recoil/atoms/calendar';
import Hour from './Hour';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div<{ zoom: number }>`
  height: ${(props) => props.zoom * 24}px;
  position: relative;
  flex: 1;
  &:not(:last-child) {
    border-right: 1px solid red;
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  padding: 24px;
  background: pink;
  z-index: 2;
`;

const Marker = styled.div<{ markerPosition: number }>`
  top: ${(props) => props.markerPosition}px;
  left: 0;
  right: 0;
  height: 2px;
  position: absolute;
  background-color: red;
  transform: translateY(-50%);
`;

const DayLabel = styled.span`
  display: block;
`;

const DateLabel = styled.span`
  display: block;
`;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface iDayProps {
  day: number;
  date: number;
  month: number;
  year: number;
}

const Day: FC<iDayProps> = ({ day, date, month, year }) => {
  const zoom = useRecoilValue(zoomState);
  const timeOfDay = useRecoilValue(timeState);

  return (
    <Content zoom={zoom}>
      <Marker markerPosition={(timeOfDay / msPerDay) * zoom * 24} />
      {[...new Array(24)].map((hour) => (
        <Hour />
      ))}
    </Content>
  );
};

export default Day;
