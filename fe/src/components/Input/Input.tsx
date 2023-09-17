import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

export const Input: React.FC<Props> = ({
  type = 'text',
  placeholder = '내용을 입력하세요',
  value,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  padding: 0px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font: ${({ theme }) => theme.font.availableDefault16};
  color: ${({ theme }) => theme.color.neutralTextStrong};
  caret-color: #007aff;
`;
