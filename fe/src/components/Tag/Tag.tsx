import React from 'react';
import { styled } from 'styled-components';

type Props = {
  id: string;
  title: string;
  isSelected: boolean;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
};

export const Tag: React.FC<Props> = ({ id, title, isSelected, onClick }) => {
  return (
    <StyledButton id={id} $isSelected={isSelected} onClick={onClick}>
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
  border: ${({ theme: { color }, $isSelected }) =>
    $isSelected ? 'none' : `1px solid ${color.neutralBorder}`};
`;

const Title = styled.span<{ $isSelected: boolean }>`
  font: ${({ theme: { font } }) => font.displayDefault12};
  color: ${({ theme: { color }, $isSelected }) =>
    $isSelected ? color.accentText : color.accentTextWeak};
`;
