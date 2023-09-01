import { Icon } from '@components/Icon/Icon';
import { styled } from 'styled-components';

type Props = {
  isClicked: boolean;
  onClick(): void;
};

export const LikeButton: React.FC<Props> = ({ isClicked, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {isClicked ? (
        <Icon name="heartFilled" size="M" stroke="none" fill="accentPrimary" />
      ) : (
        <Icon name="heart" size="M" stroke="neutralTextStrong" />
      )}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  width: 24px;
  height: 24px;
  user-select: none;
`;
