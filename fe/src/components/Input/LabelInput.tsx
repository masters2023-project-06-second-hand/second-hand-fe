import { styled } from 'styled-components';
import { InputBox } from './InputBox';

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

export const LabelInput: React.FC<Props> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputBox
        type="rect"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.label`
  font: ${({ theme }) => theme.font.displayStrong16};
  color: ${({ theme }) => theme.color.neutralTextStrong};
`;
