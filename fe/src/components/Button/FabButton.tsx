import { styled } from 'styled-components';
import { Icon } from '@components/Icon/Icon';
import { usePageNavigator } from '@hooks/usePageNavigator';

export const FabButton: React.FC = () => {
  const { navigateToAdd } = usePageNavigator();

  return (
    <Fab onClick={navigateToAdd}>
      <Icon name="plus" stroke="accentText" size="M" />
    </Fab>
  );
};

const Fab = styled.button`
  width: 56px;
  height: 56px;
  background-color: ${({ theme: { color } }) => color.accentPrimary};
  border-radius: ${({ theme: { radius } }) => radius.half};
`;
