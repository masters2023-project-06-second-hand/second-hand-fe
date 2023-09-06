import { Icon } from '@components/Icon/Icon';
import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

type Props = {
  imgUrl: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

export const ProfileImgInput: React.FC<Props> = ({ imgUrl, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor="profileImg">
        <ProfileImg $backgroundImg={imgUrl}>
          <Icon name="camera" stroke="accentText" />
        </ProfileImg>
      </Label>
      <ImgInput id="profileImg" type="file" onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
`;

const Label = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
`;

// const Overlay = styled.div`
//   position: absolute;
//   width: inherit;
//   height: inherit;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   background-color: ${({ theme: { color } }) => color.neutralOveray};
// `;

const ProfileImg = styled.div<{ $backgroundImg: string }>`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-image: linear-gradient(
      ${({ theme: { color } }) =>
        `${color.neutralOveray}, ${color.neutralOveray}`}
    ),
    url(${({ $backgroundImg }) => $backgroundImg});
  background-size: cover;
`;

const ImgInput = styled.input`
  display: none;
`;
