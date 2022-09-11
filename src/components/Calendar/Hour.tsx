import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { zoomState } from '../../recoil/atoms/calendar';

const Wrapper = styled.div<{ hourHeight: number }>`
  height: ${(props) => props.hourHeight}px;
  position: relative;
  flex-shrink: 0;
  &::after {
    position: absolute;
    height: 1px;
    background: lightgray;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
`;

interface iHourProps {}

const Hour: FC<iHourProps> = () => {
  const height = useRecoilValue(zoomState);
  return <Wrapper hourHeight={height}></Wrapper>;
};

export default Hour;
