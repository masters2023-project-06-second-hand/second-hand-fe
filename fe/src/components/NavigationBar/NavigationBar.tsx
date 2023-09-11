import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { Icon } from '@components/Icon/Icon';

type MenuIcons = 'home' | 'news' | 'heart' | 'message' | 'userCircle';

interface MenuItems {
  name: MenuIcons;
  label: string;
  path: string;
}

const MENU_LISTS: MenuItems[] = [
  { name: 'home', label: '홈화면', path: '' },
  { name: 'news', label: '판매내역', path: '/history' },
  { name: 'heart', label: '관심상품', path: '/liked' },
  { name: 'message', label: '채팅', path: '/chat' },
  { name: 'userCircle', label: '내 계정', path: '/account' },
];

export const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialMenu =
    MENU_LISTS.find((menu) => menu.path === location.pathname)?.name || 'home';

  const [selectedMenu, setSelectedMenu] = useState(initialMenu);

  const handleNavigation = (menuName: MenuIcons, path: string) => {
    setSelectedMenu(menuName);
    navigate(path);
  };

  return (
    <Wrapper>
      {MENU_LISTS.map((menu) => (
        <NavItem
          key={menu.name}
          $isSelected={selectedMenu === menu.name}
          onClick={() => handleNavigation(menu.name, menu.path)}
        >
          <Icon name={menu.name} stroke="currentColor" />
          {menu.label}
        </NavItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 393px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 64px;
  padding: 0 16px;
  background-color: ${({ theme: { color } }) => color.neutralBackground};
  border-top: 0.8px solid ${({ theme: { color } }) => color.neutralBorder};
  z-index: 1;
`;

const NavItem = styled.button<{ $isSelected: boolean }>`
  display: flex;
  margin: 8px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  white-space: nowrap;
  padding: 4px 16px;
  width: auto;
  color: ${({ theme: { color }, $isSelected }) =>
    $isSelected ? color.neutralTextStrong : color.neutralTextWeak};
  font: ${({ theme: { font, $isSelected } }) =>
    $isSelected ? font.enabledStrong10 : font.availableStrong10};

  &:hover {
    color: ${({ theme: { color } }) => color.neutralTextStrong};
  }
`;
