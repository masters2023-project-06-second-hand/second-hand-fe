import { styled } from 'styled-components';
import { ActionBar } from '@components/ActionBar/ActionBar';
import { EditBar } from '@components/ActionBar/EditBar';
import { PostBar } from '@components/ActionBar/PostBar';
import { TextButton } from '@components/Button/TextButton';
import { Header } from '@components/Header/Header';
import { Icon } from '@components/Icon/Icon';
import { SellerInfo } from '@components/SellerInfo/SellerInfo';
import { States } from '@components/States/States';
import { usePageNavigator } from '@hooks/usePageNavigator';
import displayTimeAgo from '@utils/displayTimeAgo';

export const DetailPage = () => {
  const { navigateToGoBack } = usePageNavigator();
  const isWriter = false;
  const data = {
    id: 1,
    writer: {
      id: 1,
      nickname: 'litae',
    },
    images: [
      {
        id: 1,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0XVvcoAmRBR09F4CoUaY2VWWD5P36pZ-Hw&usqp=CAU',
      },
      {
        id: 2,
        imgUrl:
          'https://www.apple.com/newsroom/images/tile-images/Apple_16-inch-MacBook-Pro_111319.jpg.og.jpg?202308281523',
      },
      {
        id: 3,
        imgUrl:
          'https://i0.wp.com/apple-information.com/wp-content/uploads/2022/12/%EC%A0%9C%EB%AA%A9-12%EC%97%86%EC%9D%8C-1.jpg?fit=1024%2C427&ssl=1',
      },
    ],
    productName: 'M2 맥북프로 16인치',
    categoryName: '가구/인테리어',
    regionName: '개포1동',
    createdAt: '2023-09-01 14:22',
    state: '예약중',
    content: `어린시절 추억의 향수를 불러 일으키는 롤러 스케이트입니다. 빈티지 특성상 사용감 있지만 전체적으로 깨끗한 상태입니다.
    촬영용 소품이나, 거실에 장식용으로 추천해 드립니다. 단품 입고 되었습니다. 새 제품으로 보존된 제품으로 전용박스까지 보내드립니다.
    사이즈는 235 입니다. 어린시절 추억의 향수를 불러 일으키는 롤러 스케이트입니다. 빈티지 특성상 사용감 있지만 전체적으로 깨끗한 상태입니다.
    촬영용 소품이나, 거실에 장식용으로 추천해 드립니다. 단품 입고 되었습니다. 새 제품으로 보존된 제품으로 전용박스까지 보내드립니다.
    사이즈는 235 입니다.`,
    price: 23000,
  };

  const stat = {
    chattingCount: 2,
    likeCount: 2,
    viewCount: 2,
    isLiked: true,
  };

  return (
    <>
      <Header backgroundColor="none">
        <Header.Left>
          <TextButton
            size="M"
            textColor="accentText"
            onClick={navigateToGoBack}
          >
            <Icon name="chevronLeft" size="M" stroke="accentText" />
            뒤로
          </TextButton>
        </Header.Left>
        <Header.Right>
          <MenuButton>
            <Icon name="dots" stroke="accentText" />
          </MenuButton>
        </Header.Right>
      </Header>
      <Content>
        <ImgContent>
          <ProductImg src={data.images[0].imgUrl} />
        </ImgContent>
        <InfoContent>
          <SellerInfo nickname={data.writer.nickname} />
          <States name={data.state} />
          <Title>
            <ProductName>{data.productName}</ProductName>
            <ProductInfo>
              {data.categoryName} ・ {displayTimeAgo(data.createdAt)}
            </ProductInfo>
          </Title>
          <ProductContent>{data.content}</ProductContent>
          <ProductStats>
            채팅 {stat.chattingCount} 관심 {stat.likeCount} 조회{' '}
            {stat.viewCount}
          </ProductStats>
        </InfoContent>
      </Content>
      <ActionBar>
        {isWriter ? (
          <EditBar regionName={data.regionName} />
        ) : (
          <PostBar id={data.id} isLiked={stat.isLiked} price={data.price} />
        )}
      </ActionBar>
    </>
  );
};

const MenuButton = styled.button`
  padding: 8px;
`;

const Content = styled.div`
  margin-top: -56px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const ImgContent = styled.div`
  width: 100%;
  height: 400px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContent = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProductName = styled.span`
  width: 100%;
  font: ${({ theme: { font } }) => font.displayStrong20};
  color: ${({ theme: { color } }) => color.neutralTextStrong};
`;

const ProductInfo = styled.p`
  width: 100%;
  font: ${({ theme: { font } }) => font.displayDefault12};
  color: ${({ theme: { color } }) => color.neutralTextWeak};
`;

const ProductContent = styled.p`
  padding: 16px 0px;
  width: 100%;
  font: ${({ theme: { font } }) => font.displayDefault16};
  color: ${({ theme: { color } }) => color.neutralText};
`;

const ProductStats = styled.p`
  width: 100%;
  font: ${({ theme: { font } }) => font.displayDefault12};
  color: ${({ theme: { color } }) => color.neutralTextWeak};
`;
