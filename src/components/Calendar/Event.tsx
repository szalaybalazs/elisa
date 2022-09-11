import { FC, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { zoomState } from '../../recoil/atoms/calendar';
import { iCalendarEvent } from '../../types/event';

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

const Title = styled.span``;

interface iCalendarEventProps extends iCalendarEvent {}

const CalendarEvent: FC<iCalendarEventProps> = ({ start, end, title }) => {
  const startRelative = useMemo(() => {
    return start.hour + start.minute / 60;
  }, [start]);
  const length = useMemo(() => {
    return end.hour + end.minute / 60 - startRelative;
  }, [end, startRelative]);

  const zoom = useRecoilValue(zoomState);
  return (
    <Wrapper topOffset={startRelative * zoom} length={length * zoom}>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
};

export default CalendarEvent;
