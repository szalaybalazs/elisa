import { FC } from 'react';
import Calendar from '../components/Calendar';
import Header from '../components/Header';
import Skeleton from '../layout/Skeleton';

interface iHomeProps {}

const Home: FC<iHomeProps> = () => {
  return (
    <Skeleton>
      <Calendar />
    </Skeleton>
  );
};

export default Home;
