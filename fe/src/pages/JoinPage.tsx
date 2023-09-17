import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';
import { Button } from '@components/Button/Button';
import { TextButton } from '@components/Button/TextButton';
import { Header } from '@components/Header/Header';
import { LabelInput } from '@components/Input/LabelInput';
import { ProfileImgInput } from '@components/ProfileImgInput/ProfileImgInput';
import { useInput } from '@hooks/useInput';
import { usePageNavigator } from '@hooks/usePageNavigator';
import { MAX_IMAGE_SIZE } from '@constants/constants';
import { useHandleSignup } from '@api/auth/login';

export const JoinPage = () => {
  const [profileImg, setProfileImg] = useState<File>();
  const { navigateToAccount, navigateToHome } = usePageNavigator();
  const { value: nickname, onChange } = useInput();
  const handleSignup = useHandleSignup();

  const onUploadProfileImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.size <= MAX_IMAGE_SIZE) {
      setProfileImg(file);
      console.log(profileImg);
    }
  };

  const onSignupClick = async () => {
    // regionsId는 예시로 사용. 실제로는 유저 입력을 받아서 처리 필요
    const body = {
      nickname,
      profileImg:
        'https://github.com/lolWK/js-example/assets/95265031/29620575-5998-40e4-8bd6-60cba42d5382',
      regionsId: [1, 2],
    };

    const isSuccess = await handleSignup(body);

    if (!isSuccess) {
      console.log('가입 실패');
      navigateToAccount();
      return;
    }

    console.log('가입 성공');
    navigateToHome();
  };

  return (
    <>
      <Header>
        <Header.Left>
          <TextButton
            size="M"
            textColor="neutralTextStrong"
            onClick={navigateToAccount}
          >
            닫기
          </TextButton>
        </Header.Left>
        <Header.Center>회원가입</Header.Center>
        <Header.Right>
          <TextButton
            disabled={!nickname}
            textColor="accentPrimary"
            onClick={onSignupClick}
          >
            완료
          </TextButton>
        </Header.Right>
      </Header>
      <Content>
        <ProfileImgInput
          imgUrl={profileImg ? URL.createObjectURL(profileImg) : ''}
          onChange={onUploadProfileImg}
        />
        <LabelInput
          id="nickname"
          label="닉네임"
          placeholder="내용을 입력하세요"
          value={nickname}
          onChange={onChange}
        />
        <Button
          backgroundColor="accentText"
          size="L"
          icon="plus"
          text="위치추가"
        ></Button>
      </Content>
    </>
  );
};

const Content = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
