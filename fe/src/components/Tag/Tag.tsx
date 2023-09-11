import { styled } from 'styled-components';

type Props = {
  title: string;
  isSelected: boolean;
  onClick(): void;
};

export const Tag: React.FC<Props> = ({ title, isSelected, onClick }) => {
  return (
    <StyledButton $isSelected={isSelected} onClick={onClick}>
      <Title $isSelected={isSelected}>{title}</Title>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $isSelected: boolean }>`
  padding: 8px 16px;
  height: 32px;
  border-radius: 50px;
  background-color: ${({ theme: { color }, $isSelected }) =>
    $isSelected ? color.accentPrimary : color.accentText};
  border: 1px solid
    ${({ theme: { color }, $isSelected }) =>
      $isSelected ? color.accentPrimary : color.neutralBorder};
`;

const Title = styled.span<{ $isSelected: boolean }>`
  font: ${({ theme: { font } }) => font.displayDefault12};
  color: ${({ theme: { color }, $isSelected }) =>
    $isSelected ? color.accentText : color.accentTextWeak};
`;
