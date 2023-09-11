import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';
import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { ProfileImgInput } from '@components/ProfileImgInput/ProfileImgInput';
import { GOOGLE_OAUTH_URL, NAVER_OAUTH_URL } from '@api/constants';
import { MAX_IMAGE_SIZE } from '@constants/constants';

export const AccountPage = () => {
  const [profileImg, setProfileImg] = useState<File>();
  const isLogin = false;

  const goNaverLogin = () => {
    location.href = NAVER_OAUTH_URL;
  };
  const goGoogleLogin = () => {
    location.href = GOOGLE_OAUTH_URL;
  };

  const onUploadProfileImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.size <= MAX_IMAGE_SIZE) {
      setProfileImg(file);
    }
  };

  return (
    <>
      <Header>
        <Header.Center>내 계정</Header.Center>
      </Header>
      {isLogin ? (
        <Content>
          <ProfileImgInput
            imgUrl={profileImg ? URL.createObjectURL(profileImg) : ''}
            onChange={onUploadProfileImg}
          />
          <UserNickname>litae</UserNickname>
          <Button
            backgroundColor="accentPrimary"
            size="L"
            text="로그아웃"
          ></Button>
        </Content>
      ) : (
        <Content>
          <Title>로그인하기</Title>
          <ButtonWrapper>
            <NaverButton onClick={goNaverLogin}>
              <ButtonImg src="/naver.png" />
            </NaverButton>
            <GoogleButton onClick={goGoogleLogin}>
              <ButtonImg src="/google.png" />
            </GoogleButton>
          </ButtonWrapper>
          <LoginInfo>
            회원가입이 되어 있지 않은 경우, 회원가입 페이지로 이동합니다
          </LoginInfo>
        </Content>
      )}
    </>
  );
};

const Content = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserNickname = styled.span`
  margin: 24px 0px 40px 0px;
  font: ${({ theme: { font } }) => font.displayStrong16};
  color: ${({ theme: { color } }) => color.neutralTextStrong};
`;

const Title = styled.h1`
  font: ${({ theme: { font } }) => font.displayStrong20};
`;

const ButtonWrapper = styled.div`
  padding: 50px 0px 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const LoginButton = styled.button`
  width: fit-content;
  height: 56px;
`;

const NaverButton = styled(LoginButton)``;

const GoogleButton = styled(LoginButton)``;

const ButtonImg = styled.img`
  height: 100%;
`;

const LoginInfo = styled.p`
  font: ${({ theme: { font } }) => font.displayDefault12};
  color: ${({ theme: { color } }) => color.neutralTextWeak};
`;
