import { useState } from 'react';
import { styled } from 'styled-components';
import { Header } from '@components/Header/Header';
import { Tag } from '@components/Tag/Tag';
import { ProductItem } from '@components/Item/ProductItem';

const data = [
  {
    id: 1,
    name: '여성 의류',
  },
  {
    id: 2,
    name: '남성 의류',
  },
];

const items = [
  {
    id: 1,
    writerId: 1,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/142768426?s=48&v=4',
    name: '코카 콜라',
    region: '개포1동',
    createdAt: '2023-09-01 14:22',
    status: '예약중',
    price: 23000,
    likeCount: 2,
    chattingCount: 1,
  },
  {
    id: 2,
    writerId: 2,
    thumbnailUrl: 'https://avatars.githubusercontent.com/u/142768426?s=48&v=4',
    name: '코카 제로 콜라',
    region: '개포2동',
    createdAt: '2023-09-01 17:22',
    status: '판매완료',
    price: 23000,
    likeCount: 2,
    chattingCount: 1,
  },
];

export const LikePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <>
      <Header>
        <Header.Center>관심 목록</Header.Center>
      </Header>

      <Content>
        {items.length === 0 ? (
          <EmptyMessage>관심 상품이 없습니다</EmptyMessage>
        ) : (
          <>
            <Tab>
              <Tag
                key={0}
                title={'전체'}
                isSelected={selectedCategory === 0}
                onClick={() => setSelectedCategory(0)}
              />
              {data.map((category) => (
                <Tag
                  key={category.id}
                  title={category.name}
                  isSelected={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
            </Tab>

            <List>
              {items.map((item) => (
                <ProductItem item={item} key={item.id} />
              ))}
            </List>
          </>
        )}
      </Content>
    </>
  );
};

const Content = styled.div`
  width: 393px;
  padding: 16px 16px 64px 16px;
`;

const Tab = styled.div`
  display: flex;
  padding-bottom: 8px;
  gap: 4px;
`;

const List = styled.div``;

const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme: { color } }) => color.neutralTextWeak};
  font: ${({ theme: { font } }) => font.displayDefault12};
`;
