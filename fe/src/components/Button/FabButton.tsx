import styled from 'styled-components';
import { Icon } from '@components/Icon/Icon';

export type ButtonProps = {
  onClick: () => void;
};

export const FabButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Fab onClick={onClick}>
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
