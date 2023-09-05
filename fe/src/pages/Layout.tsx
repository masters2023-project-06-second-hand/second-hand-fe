import styled from 'styled-components';
import { NavigationBar } from '@components/NavigationBar/NavigationBar';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();
  const hasNavigationBarPath = ['/', '/history', '/liked', '/chat', '/account'];

  return (
    <Body>
      {hasNavigationBarPath.includes(location.pathname) && <NavigationBar />}
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
  padding-top: 56px;
  outline: 1px solid ${({ theme: { color } }) => color.neutralBorder};
`;
