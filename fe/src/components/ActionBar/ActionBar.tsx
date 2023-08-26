import { Icon } from '@components/Icon/Icon';
import React from 'react';
import { styled } from 'styled-components';

type Props = {
  type?: 'add' | 'detail';
  isSeller?: boolean;
  isLiked?: boolean;
  price?: string;
  region?: string;
  onClickLike?(): void;
  onClickRegion?(): void;
};

export const ActionBar: React.FC<Props> = ({
  type = 'add',
  isSeller,
  isLiked,
  price,
  region,
  onClickLike,
  onClickRegion,
}) => {
  const isAdd = type === 'add';

  return (
    <Wrapper>
      {!isAdd && (
        <Contents>
          <Info>
            <LikeButton onClick={onClickLike}>
              {!isLiked && (
                <Icon name="heart" size="M" stroke="neutralTextStrong" />
              )}
              {isLiked && (
                <Icon
                  name="heartFilled"
                  size="M"
                  fill="accentPrimary"
                  stroke="none"
                />
              )}
            </LikeButton>
            <Price>{price} 원</Price>
          </Info>
          <ChatButton>{isSeller ? '대화 중인 채팅방' : '채팅하기'}</ChatButton>
        </Contents>
      )}
      {isAdd && (
        <RegionButton onClick={onClickRegion}>
          <Icon name={'mapPinFilled'} size={'M'} fill={'neutralTextStrong'} />
          <Region>{region}</Region>
        </RegionButton>
      )}
    </Wrapper>
  );
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

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ChatButton = styled.button`
  padding: 8px 16px;
  width: auto;
  height: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.accentText};
  background-color: ${({ theme }) => theme.color.accentPrimary};
  font: ${({ theme }) => theme.font.availableStrong12};
`;

const Price = styled.span``;

const Region = styled.span``;

const LikeButton = styled.button`
  padding: 0px;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;

const RegionButton = styled.button`
  padding: 0px;
  width: auto;
  height: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`;
