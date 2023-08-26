import styled from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  textColor?: string;
  size?: 'S' | 'M';
};

export const TextButton: React.FC<ButtonProps> = ({
  children,
  textColor = 'neutralTextStrong',
  type = 'button',
  size = 'M',
  ...props
}) => {
  return (
    <StyledButton type={type} $textColor={textColor} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $textColor: string; size: 'S' | 'M' }>`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme, $textColor = 'neutralTextStrong' }) =>
    theme.color[$textColor]};
  font: ${({ theme: { font }, size }) =>
    size === 'S' ? font.availableStrong12 : font.availableStrong16};

  &:disabled {
    color: ${({ theme: { color } }) => color.neutralTextWeak};
  }
`;
