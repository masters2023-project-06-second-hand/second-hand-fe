import { styled } from 'styled-components';
import { Input } from './Input';
import React from 'react';

type Props = {
  currencyUnit: keyof typeof unit;
  placeholder?: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const unit = {
  won: '₩',
  dollar: '$',
};

export const PriceInput: React.FC<Props> = ({
  currencyUnit,
  placeholder = '가격(선택사항)',
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      <Unit>{unit[currencyUnit]}</Unit>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Unit = styled.span`
  font: ${({ theme }) => theme.font.displayStrong16};
  color: ${({ theme }) => theme.color.neutralTextStrong};
`;
