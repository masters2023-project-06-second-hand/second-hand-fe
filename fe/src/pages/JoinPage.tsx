import { Button } from '@components/Button/Button';
import { TextButton } from '@components/Button/TextButton';
import { Header } from '@components/Header/Header';
import { LabelInput } from '@components/Input/LabelInput';
import { ProfileImgInput } from '@components/ProfileImgInput/ProfileImgInput';
import { MAX_IMAGE_SIZE } from '@constants/constants';
import { useInput } from '@hooks/useInput';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export const JoinPage = () => {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState<File>();
  const { value: nickname, onChange } = useInput();

  const goAccountPage = () => {
    navigate('/account');
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
        <Header.Left>
          <TextButton
            size="M"
            textColor="neutralTextStrong"
            onClick={goAccountPage}
          >
            닫기
          </TextButton>
        </Header.Left>
        <Header.Center>회원가입</Header.Center>
        <Header.Right>
          <TextButton disabled={!nickname} textColor="accentPrimary">
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
