import { Button } from '@components/Button/Button';
import { LikeButton } from '@components/Button/LikeButton';
import formatPrice from '@utils/formatPrice';
import { useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

type Props = {
  id: number;
  isLiked: boolean;
  price: number;
};

export const PostBar: React.FC<Props> = ({ id, isLiked, price }) => {
  const [isClicked, setIsClicked] = useState<boolean>(isLiked);

  const toggleLikeButton = () => {
    axios
      .put(`api/products/${id}/likes`, {
        isLiked: !isClicked,
      })
      .then(() => {
        setIsClicked(!isClicked);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Bar>
      <Info>
        <LikeButton isClicked={isClicked} onClick={toggleLikeButton} />
        <Price>{formatPrice(price)} 원</Price>
      </Info>
      <Button
        backgroundColor="accentPrimary"
        size="S"
        text="대화 중인 채팅방"
        // 채팅 관련 API가 나오면 클릭 이벤트 변경
        onClick={() => {}}
      />
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
`;

const Price = styled.span`
  color: ${({ theme }) => theme.color.neutralTextStrong};
  font: ${({ theme }) => theme.font.displayDefault16};
`;
