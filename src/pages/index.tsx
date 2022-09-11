import { FC } from 'react';
import Calendar from '../components/Calendar';

interface iHomeProps {}

const Home: FC<iHomeProps> = () => {
  return (
    <>
      <Calendar></Calendar>
    </>
  );
};

export default Home;
