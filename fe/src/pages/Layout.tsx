import styled from 'styled-components';
import { NavigationBar } from '@components/NavigationBar/NavigationBar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FabButton } from '@components/Button/FabButton';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasNavigationBarPath = ['/', '/history', '/liked', '/chat', '/account'];

  return (
    <Body>
      {hasNavigationBarPath.includes(location.pathname) && <NavigationBar />}
      <Outlet />

      {location.pathname === '/' && (
        <Fab>
          <FabButton onClick={() => navigate('/add')} />
        </Fab>
      )}
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
  position: relative;
`;

const Fab = styled.div`
  position: absolute;
  bottom: 88px;
  width: 100px;
  right: -20px;
  /* z-index: ; */
`;
