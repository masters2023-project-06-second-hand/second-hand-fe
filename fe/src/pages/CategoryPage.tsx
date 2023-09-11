import { styled } from 'styled-components';
import { Header } from '@components/Header/Header';
import { TextButton } from '@components/Button/TextButton';
import { Icon } from '@components/Icon/Icon';
import { useCategoriesWithImages } from '@api/category/useCategories';
import { usePageNavigator } from '@hooks/usePageNavigator';

export const CategoryPage = () => {
  const { navigateToGoBack } = usePageNavigator();
  const categories = useCategoriesWithImages();

  return (
    <>
      <Header>
        <Header.Left>
          <TextButton
            size="M"
            textColor="neutralTextStrong"
            onClick={navigateToGoBack}
          >
            <Icon name="chevronLeft" size="M" stroke="neutralTextStrong" />
            뒤로
          </TextButton>
        </Header.Left>
        <Header.Center>카테고리</Header.Center>
      </Header>
      <Content>
        {categories.map((item) => (
          <Category key={item.id}>
            <img src={item.imgUrl} alt={item.name} />
            <p>{item.name}</p>
          </Category>
        ))}
      </Content>
    </>
  );
};

const Content = styled.ul`
  display: flex;
  height: 796px;
  padding: 96px 40px 40px 40px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 32px;
  flex-wrap: wrap;
`;

const Category = styled.li`
  display: flex;
  width: 80px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  img {
    height: 44px;
  }
  p {
    align-self: stretch;
    width: 100%;
    text-align: center;
    font: ${({ theme: { font } }) => font.displayDefault12};
    color: ${({ theme: { color } }) => color.neutralText};
  }
`;
