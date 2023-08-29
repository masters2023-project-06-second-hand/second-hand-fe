import { RegionButton } from '@components/Button/RegionButton';
import { styled } from 'styled-components';

type Props = {
  regionName: string;
};

export const EditBar: React.FC<Props> = ({ regionName }) => {
  return (
    <Bar>
      <RegionButton regionName={regionName} onClick={() => {}} />
      {/* 클릭 이벤트 추가 */}
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
