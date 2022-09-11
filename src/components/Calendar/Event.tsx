import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { zoomState } from '../../recoil/atoms/calendar';

const Wrapper = styled.div<{ topOffset: number; length: number }>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => props.topOffset}px;
  height: ${(props) => props.length}px;
  z-index: 2;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 5px;
`;

interface iCalendarEventProps {
  start: number;
  end: number;
}

const CalendarEvent: FC<iCalendarEventProps> = ({ start, end }) => {
  const zoom = useRecoilValue(zoomState);
  return (
    <Wrapper topOffset={start * zoom} length={(end - start) * zoom}>
      <Content></Content>
    </Wrapper>
  );
};

export default CalendarEvent;
