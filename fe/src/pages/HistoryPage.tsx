import { useState } from 'react';
import { styled } from 'styled-components';
import { Header } from '@components/Header/Header';
import { Tag } from '@components/Tag/Tag';
import { ProductItem } from '@components/Item/ProductItem';

const data = ['전체', '판매중', '판매완료'];

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

export const HistoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  return (
    <>
      <Header>
        <Header.Center>판매 내역</Header.Center>
      </Header>

      <Content>
        {items.length === 0 ? (
          <EmptyMessage>판매 내역이 없습니다</EmptyMessage>
        ) : (
          <>
            <Tab>
              {data.map((state) => (
                <Tag
                  key={state}
                  title={state}
                  isSelected={selectedCategory === state}
                  onClick={() => setSelectedCategory(state)}
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
