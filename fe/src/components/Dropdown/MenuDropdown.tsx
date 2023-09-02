import { ReactNode } from 'react';
import { Dropdown } from './Dropdown';

type DropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

/* Todo. 마지막 Option 빨간 글씨 처리 안되어있음 */

export const MenuDropdown: React.FC<DropdownProps> = ({
  trigger,
  position,
  children,
}) => {
  return (
    <Dropdown trigger={trigger} position={position}>
      {children}
    </Dropdown>
  );
};
