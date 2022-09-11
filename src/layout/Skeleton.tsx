import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Container = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Sidebar = styled.div`
  width: 320px;
`;

interface iSkeletonProps {
  children: ReactNode;
}

const Skeleton: FC<iSkeletonProps> = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <Content>
        <Header />
        <Container>{children}</Container>
      </Content>
    </Wrapper>
  );
};

export default Skeleton;
