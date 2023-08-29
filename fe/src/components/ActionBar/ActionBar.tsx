import React from 'react';
import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const ActionBar: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.color.neutralBackgroundWeak};
  font: ${({ theme }) => theme.font.displayDefault16};
  color: ${({ theme }) => theme.color.neutralTextStrong};
`;
