import { ChangeEvent, InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { Icon } from '@components/Icon/Icon';
import { MAX_NUMBER_OF_PRODUCT_IMG } from '@constants/constants';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  numberOfImg: number;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

export const AddImgInput: React.FC<Props> = ({ numberOfImg, onChange }) => {
  const isMaxImg = numberOfImg === MAX_NUMBER_OF_PRODUCT_IMG;
  return (
    <Wrapper>
      <Label htmlFor="addImg">
        <Icon name="camera" stroke="neutralTextStrong" />
        <ImgCounter>
          {numberOfImg} / {MAX_NUMBER_OF_PRODUCT_IMG}
        </ImgCounter>
      </Label>
      <ImgInput
        id="addImg"
        type="file"
        accept="image/*"
        onChange={onChange}
        disabled={isMaxImg}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  border: ${({ theme }) => `1px solid ${theme.color.neutralBorder}`};
  border-radius: 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImgCounter = styled.span`
  font: ${({ theme }) => theme.font.displayDefault12};
  color: ${({ theme }) => theme.color.neutralTextStrong};
`;

const ImgInput = styled.input`
  display: none;
`;
