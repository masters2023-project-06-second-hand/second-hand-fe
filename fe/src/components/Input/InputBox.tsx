import { styled } from 'styled-components';
import { Input } from './Input';

type Props = {
  type?: 'round' | 'rect';
  id?: string;
  placeholder?: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

export const InputBox: React.FC<Props> = ({
  type = 'round',
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Wrapper $type={type}>
      <Input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $type: 'round' | 'rect' }>`
  display: flex;
  padding: 4px 12px;
  flex-grow: 1;
  height: 32px;
  background-color: ${({ theme }) => theme.color.neutralBackground};
  border: ${({ theme }) => `1px solid ${theme.color.neutralBorder}`};
  border-radius: ${({ $type }) => ($type === 'round' ? '18px' : '8px')};
`;
