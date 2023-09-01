import styled from 'styled-components';

interface HeaderProps {
  backgroundColor?: string;
  children?: React.ReactNode;
}

const LeftContent = styled.div``;
const CenterContent = styled.h2`
  flex: 1;
  text-align: center;
  font: ${({ theme: { font } }) => font.displayStrong16};
  color: ${({ theme: { color } }) => color.neutralTextStrong};
`;
const RightContent = styled.div``;

export const Header: React.FC<HeaderProps> & {
  Left: typeof LeftContent;
  Center: typeof CenterContent;
  Right: typeof RightContent;
} = ({ children, backgroundColor = 'neutralBackgroundBlur' }) => {
  return (
    <HeaderContainer $backgroundColor={backgroundColor}>
      {children}
    </HeaderContainer>
  );
};

Header.Left = LeftContent;
Header.Center = CenterContent;
Header.Right = RightContent;

const HeaderContainer = styled.header<{ $backgroundColor: string }>`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 56px;
  border-bottom: 1px solid ${({ theme: { color } }) => color.neutralBorder};
  background-color: ${({ theme, $backgroundColor = 'neutralBackgroundBlur' }) =>
    theme.color[$backgroundColor]};
`;
