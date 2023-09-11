import { styled } from 'styled-components';
import { Icon } from '@components/Icon/Icon';

type Props = {
  name: string;
};

export const States: React.FC<Props> = ({ name }) => {
  return (
    <StyledButton>
      <Name>{name}</Name>
      <Icon name="chevronDown" size="S" stroke="neutralText" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 8px 16px;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: { color } }) => color.neutralBorder};
  border-radius: 8px;
`;

const Name = styled.span`
  min-width: 56px;
  text-align: left;
  font: ${({ theme: { font } }) => font.displayDefault12};
  color: ${({ theme: { color } }) => color.neutralTextStrong};
`;
