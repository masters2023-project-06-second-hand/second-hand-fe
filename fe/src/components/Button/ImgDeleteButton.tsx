import { Icon } from '@components/Icon/Icon';
import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const ImgDeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Icon name="x" stroke="neutralBackground" />
    </StyledButton>
  );
};

const StyledButton = styled.button``;
