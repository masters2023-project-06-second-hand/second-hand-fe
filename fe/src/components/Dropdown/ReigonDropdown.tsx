import { ReactNode } from 'react';
import { Dropdown } from './Dropdown';
import styled from 'styled-components';
import { useModal } from '@components/Modal/useModal';

type Regions = {
  id: number;
  name: string;
};

interface DropdownProps {
  trigger: ReactNode;
  myRegions: Regions[];
  currentRegionId: number;
  onSelectRegion: (id: number) => void;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

// Todo. 목록에 '내 동네 설정하기' 없는 경우도 만들어줘야함
export const RegionDropdown: React.FC<DropdownProps> = ({
  trigger,
  myRegions,
  position,
  onSelectRegion,
  currentRegionId,
}) => {
  const { openModal } = useModal();

  if (!myRegions) return;

  return (
    <Dropdown trigger={trigger} position={position}>
      {myRegions.map((region) => (
        <Option
          key={region.id}
          onClick={() => {
            onSelectRegion(region.id);
          }}
          $isSelected={region.id === currentRegionId}
        >
          {region.name}
        </Option>
      ))}
      <Setting onClick={() => openModal('regionSetting', {})}>
        내 동네 설정하기
      </Setting>
    </Dropdown>
  );
};

const Option = styled.li<{ $isSelected: boolean }>`
  font: ${({ theme: { font }, $isSelected }) =>
    $isSelected ? font.enabledStrong16 : font.availableDefault16};
`;

const Setting = styled.li``;
