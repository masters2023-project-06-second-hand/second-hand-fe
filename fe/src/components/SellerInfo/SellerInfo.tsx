import { styled } from 'styled-components';

type Props = {
  nickname: string;
};

export const SellerInfo: React.FC<Props> = ({ nickname }) => {
  return (
    <Wrapper>
      <Title>판매자 정보</Title>
      <SellerId>{nickname}</SellerId>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.neutralBackgroundWeak};
`;

const Title = styled.span`
  font: ${({ theme }) => theme.font.displayDefault16};
  color: ${({ theme }) => theme.color.neutralText};
`;

const SellerId = styled.span`
  font: ${({ theme }) => theme.font.displayStrong16};
  color: ${({ theme }) => theme.color.neutralTextStrong};
`;
