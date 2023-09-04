import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/Icon/Icon';
import { useNavigate } from 'react-router-dom';

type MenuIcons = 'home' | 'news' | 'heart' | 'message' | 'userCircle';

interface MenuItems {
  name: MenuIcons;
  label: string;
  path: string;
}

const MENU_LISTS: MenuItems[] = [
  { name: 'home', label: '홈화면', path: '/home' },
  { name: 'news', label: '판매내역', path: '/history' },
  { name: 'heart', label: '관심상품', path: '/liked' },
  { name: 'message', label: '채팅', path: '/chat' },
  { name: 'userCircle', label: '내 계정', path: '/profile' },
];

export const NavigationBar = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleNavigation = (menuName: MenuIcons, path: string) => {
    setSelectedMenu(menuName);
    navigate(path);
  };

  return (
    <Wrapper>
      {MENU_LISTS.map((menu) => (
        <NavItem
          key={menu.name}
          isSelected={selectedMenu === menu.name}
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
  padding: 8px 16px;
  display: flex;
  width: 393px;
`;

const NavItem = styled.button<{ isSelected: boolean }>`
  color: ${({ theme: { color }, isSelected }) =>
    isSelected ? color.neutralTextStrong : color.neutralTextWeak};
  font: ${({ theme: { font } }) => font.avalibleStrong10};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme: { color } }) => color.neutralTextStrong};
  }
`;
