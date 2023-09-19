import { styled } from 'styled-components';
import { TextButton } from '@components/Button/TextButton';
import { usePageNavigator } from '@hooks/usePageNavigator';

export const ErrorPage = () => {
  const { navigateToHome, navigateToGoBack } = usePageNavigator();

  return (
    <Layout>
      <h2>WRONG PAGE</h2>
      <TextButton onClick={navigateToGoBack}>뒤로 가기</TextButton>
      <TextButton onClick={navigateToHome}>홈으로 돌아가기</TextButton>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font: ${({ theme: { font } }) => font.displayB32};
    margin-bottom: 32px;
  }
`;
