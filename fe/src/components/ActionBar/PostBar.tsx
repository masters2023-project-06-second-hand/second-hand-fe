import { styled } from 'styled-components';
import { Button } from '@components/Button/Button';
import { LikeButton } from '@components/Button/LikeButton';
import formatPrice from '@utils/formatPrice';
import { privateApi } from '@api/index';
import { API_ENDPOINTS } from '@constants/endpoints';
import { useMutation } from '@tanstack/react-query';

type Props = {
  id: number;
  isLiked: boolean;
  price: number;
  isWriter: boolean;
};

export const PostBar: React.FC<Props> = ({ id, isLiked, price, isWriter }) => {
  const changeProductLiked = async () => {
    const requestData = {
      isLiked: !isLiked,
    };
    const response = await privateApi.put(
      API_ENDPOINTS.UPDATE_LIKE(id),
      requestData
    );

    return response;
  };

  const useProductLikedMutation = () => {
    const { mutate } = useMutation(changeProductLiked);

    return { mutate };
  };

  const updateProductLiked = useProductLikedMutation();

  return (
    <Bar>
      <Info>
        <LikeButton
          isClicked={isLiked}
          onClick={() => updateProductLiked.mutate()}
        />
        <Price>{formatPrice(price)}</Price>
      </Info>
      <Button
        backgroundColor="accentPrimary"
        size="S"
        text={isWriter ? '대화 중인 채팅방' : '채팅방'}
        // 채팅 관련 API가 나오면 클릭 이벤트 변경
        onClick={isWriter ? () => {} : () => {}}
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
