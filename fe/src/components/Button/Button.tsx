import styled from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';
import { Icon, icons } from '@components/Icon/Icon';

/* 분리하기 */
const BUTTON_STYLE = {
  S: { width: 'max-content', padding: '8px 16px', font: 'availableStrong12' },
  M: { width: '288px', padding: '16px', font: 'availableStrong16' },
  L: { width: '329px', padding: '16px', font: 'availableStrong16' },
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundColor: 'accentPrimary' | 'accentText';
  size: 'S' | 'M' | 'L';
  text: string;
  icon?: keyof typeof icons;
};

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  type = 'button',
  size,
  icon,
  text,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      $backgroundColor={backgroundColor}
      size={size}
      {...props}
    >
      {icon && <Icon size={size} name={icon} stroke="currentColor" />}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $backgroundColor: string;
  size: 'S' | 'M' | 'L';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: ${({ size }) => BUTTON_STYLE[size].width};
  padding: ${({ size }) => BUTTON_STYLE[size].padding};
  font: ${({ theme: { font }, size }) => font[BUTTON_STYLE[size].font]};
  border-radius: ${({ theme: { radius } }) => radius.small};
  border: 0.8px solid;
  border-color: ${({ theme: { color }, $backgroundColor }) =>
    $backgroundColor === 'accentPrimary' ? 'none' : color.neutralBorder};
  background-color: ${({ theme: { color }, $backgroundColor }) =>
    color[$backgroundColor]};
  color: ${({ theme: { color }, $backgroundColor }) =>
    $backgroundColor === 'accentPrimary'
      ? color.accentText
      : color.accentTextWeak};
`;
