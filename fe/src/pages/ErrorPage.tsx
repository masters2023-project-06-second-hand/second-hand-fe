import styled from 'styled-components';
import { TextButton } from '@components/Button/TextButton';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <h2>WRONG PAGE</h2>
      <TextButton onClick={() => navigate(-1)}>뒤로 가기</TextButton>
      <TextButton onClick={() => navigate('/home')}>홈으로 돌아가기</TextButton>
    </Layout>
  );
};

const Layout = styled.div`
  /* width: 100%; */
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
