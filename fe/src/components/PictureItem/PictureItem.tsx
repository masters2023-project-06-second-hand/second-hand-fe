import { styled } from 'styled-components';
import { Icon } from '@components/Icon/Icon';

type Props = {
  id: number;
  isThumbnail?: boolean;
  imgUrl: string;
  deleteImg(e: React.MouseEvent<HTMLButtonElement>): void;
};

export const PictureItem: React.FC<Props> = ({
  id,
  isThumbnail = false,
  imgUrl,
  deleteImg,
}) => {
  return (
    <Wrapper>
      <ImgDeleteButton id={id.toString()} onClick={deleteImg}>
        <Icon name="x" stroke="neutralBackground" />
      </ImgDeleteButton>
      <ImgContent>
        <ProductImg src={imgUrl} alt="상품 이미지" />
        {isThumbnail && (
          <ThumbnailLogo>
            <Title>대표 사진</Title>
          </ThumbnailLogo>
        )}
      </ImgContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  height: 88px;
`;

const ImgDeleteButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 0px;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.neutralTextStrong};
`;

const ImgContent = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: ${({ theme }) => `1px solid ${theme.color.neutralBorder}`};
  border-radius: 16px;
  overflow: hidden;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThumbnailLogo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 24px;
  background-color: ${({ theme }) => theme.color.neutralOveray};
`;

const Title = styled.span`
  font: ${({ theme }) => theme.font.displayDefault12};
  color: ${({ theme }) => theme.color.neutralBackground};
`;
