import { FC, ReactNode, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getRelativeOffset, getTime, msPerDay, msPerHour } from '../../core/time';
import { timeState, zoomState } from '../../recoil/atoms/calendar';

const Wrapper = styled.div<{ zoom?: number }>`
  width: 48px;
  position: relative;
  ${(props) => props.zoom && `height: ${props.zoom * 24}px`}
`;

const HourLabel = styled.span<{ offset: number }>`
  position: absolute;
  bottom: ${(props) => props.offset}px;
  display: block;
  right: 0;
  transform: translateY(50%);
`;

const getHour = (hourInput: number) => {
  if (hourInput === 12) return 'Noon';
  const { hour, minute } = getTime(hourInput);
  if (!minute) return String(hour);
  return `${hour}:${minute}`;
};

interface iHoursProps {}

const Hours: FC<iHoursProps> = () => {
  const time = useRecoilValue(timeState);
  const offset = useRecoilValue(zoomState);
  return (
    <Wrapper zoom={offset}>
      {/* <Hour offset={offset * 24 * getRelativeOffset(time)}>
        {hour}:{minute}
      </Hour> */}
      <Hour hour={time / msPerHour} active />
      {[...new Array(23)].map((_, hour) => (
        <Hour key={hour} hour={hour + 1} />
      ))}
    </Wrapper>
  );
};

const Hour = ({ hour, active }: { active?: boolean; hour: number }) => {
  const offset = useRecoilValue(zoomState);
  const time = useRecoilValue(timeState);

  const isLabelVisible = useMemo(() => {
    const currentHour = (time % msPerDay) / msPerHour;
    const difference = Math.abs(currentHour - hour);

    return difference > 0.25;
  }, [hour, time]);

  return <HourLabel offset={offset * (24 - hour)}>{(active || isLabelVisible) && getHour(hour * msPerHour)}</HourLabel>;
};

export const HoursPlaceholder = ({ children }: { children?: ReactNode }) => <Wrapper>{children}</Wrapper>;
export default Hours;
