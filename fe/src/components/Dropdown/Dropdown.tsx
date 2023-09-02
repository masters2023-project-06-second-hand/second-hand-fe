import { ReactNode } from 'react';
import styled from 'styled-components';
import { useDropdown } from './useDropdown';

type DropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  position = 'bottom-left',
}) => {
  const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <Wrapper ref={dropdownRef}>
      {isOpen && <Overlay onClick={toggleDropdown}></Overlay>}
      <Trigger onClick={toggleDropdown}>{trigger}</Trigger>
      {isOpen && (
        <List $position={position} onClick={toggleDropdown}>
          {children}
        </List>
      )}
    </Wrapper>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  position: relative;
`;

const Trigger = styled.div``;

const POSITION_STYLES = {
  'top-left': `
    bottom: 100%;
    left: 0;
  `,
  'top-right': `
    bottom: 100%;
    right: 0;
  `,
  'bottom-left': `
    top: 100%;
    left: 0;
  `,
  'bottom-right': `
    top: 100%;
    right: 0;
  `,
};

const List = styled.ul<{
  $position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}>`
  position: absolute;
  ${({ $position }) => POSITION_STYLES[$position]}

  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme: { color } }) => color.neutralBorder};
  background-color: ${({ theme: { color } }) => color.neutralBackground};
  font: ${({ theme: { font } }) => font.availableDefault16};
  border-radius: ${({ theme: { radius } }) => radius.medium};
  width: 240px;

  li {
    padding: 16px;
    border-bottom: 1px solid ${({ theme: { color } }) => color.neutralBorder};

    &:last-child {
      border-bottom: none;
    }
  }
`;
