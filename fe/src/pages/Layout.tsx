import { styled } from 'styled-components';
import { NavigationBar } from '@components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Body>
      <NavigationBar />
      <Outlet />
    </Body>
  );
};

const Body = styled.div`
  width: 393px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  outline: 1px solid ${({ theme: { color } }) => color.neutralBorder};
  position: relative;
`;
