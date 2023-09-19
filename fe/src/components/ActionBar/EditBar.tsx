import { TextButton } from '@components/Button/TextButton';
import { Icon } from '@components/Icon/Icon';
import { styled } from 'styled-components';

type Props = {
  regionName: string;
};

export const EditBar: React.FC<Props> = ({ regionName }) => {
  return (
    <Bar>
      <RegionButton onClick={() => {}}>
        <Icon name="mapPinFilled" fill="neutralTextStrong" />
        <Region>{regionName}</Region>
      </RegionButton>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RegionButton = styled(TextButton)`
  padding: 0;
  height: 100%;
  user-select: none;
`;

const Region = styled.span`
  color: ${({ theme }) => theme.color.neutralTextStrong};
  font: ${({ theme }) => theme.font.availableDefault16};
`;
