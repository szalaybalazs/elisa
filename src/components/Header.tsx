import dayjs from 'dayjs';
import { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rangeState } from '../recoil/atoms/calendar';
import { rangeDetails } from '../recoil/selectors/calendar';

const Wrapper = styled.div``;
const Button = styled.button``;

interface iHeaderProps {}

const Header: FC<iHeaderProps> = () => {
  const { numberOfDays } = useRecoilValue(rangeDetails);

  const _handleChange = useRecoilCallback(
    ({ snapshot, set }) =>
      (change: number) =>
      async () => {
        const { start, end, numberOfDays } = await snapshot.getPromise(rangeDetails);

        set(rangeState, {
          start: dayjs(start)
            .add(numberOfDays * change, 'day')
            .toDate(),
          end: dayjs(end)
            .add(numberOfDays * change, 'day')
            .toDate(),
          type: 'week',
        });
      },
    [],
  );
  const _handleRange = useRecoilCallback(
    ({ snapshot, set }) =>
      (change: number) =>
      async () => {
        const { start, end, numberOfDays } = await snapshot.getPromise(rangeDetails);

        const _numberOfDays = Math.max(1, Math.min(9, numberOfDays + change));

        set(rangeState, { start, end: dayjs(start).add(_numberOfDays, 'day').toDate(), type: 'week' });
      },
    [],
  );
  return (
    <Wrapper>
      <Button disabled={numberOfDays < 2} onClick={_handleRange(-1)}>
        -
      </Button>
      <Button disabled>{numberOfDays}</Button>
      <Button disabled={numberOfDays > 8} onClick={_handleRange(1)}>
        +
      </Button>
      <Button onClick={_handleChange(-1)}>⬅️</Button>
      <Button onClick={_handleChange(1)}>➡️</Button>
    </Wrapper>
  );
};

export default Header;
