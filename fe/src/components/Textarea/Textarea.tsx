import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

type Props = {
  placeholder?: string;
  defaultRows?: number;
  value: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
};

export const Textarea: React.FC<Props> = ({
  placeholder,
  defaultRows = 2,
  value,
  onChange,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => {
    const { current } = textareaRef;
    if (current) {
      current.style.height = 'auto';
      current.style.height = current.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    handleResizeHeight();
  }, [value]);

  return (
    <StyledTextarea
      ref={textareaRef}
      rows={defaultRows}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></StyledTextarea>
  );
};

const StyledTextarea = styled.textarea`
  padding: 0px 0px 56px 0px;
  width: 100%;
  font: ${({ theme }) => theme.font.availableDefault16};
  color: ${({ theme }) => theme.color.neutralTextStrong};
  resize: none;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.neutralTextWeak};
  }
`;
