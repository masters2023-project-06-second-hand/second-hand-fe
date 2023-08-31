import { ActionBar } from '@components/ActionBar/ActionBar';
import { EditBar } from '@components/ActionBar/EditBar';
import { AddImgInput } from '@components/AddImgInput/AddImgInput';
import { TextButton } from '@components/Button/TextButton';
import { Header } from '@components/Header/Header';
import { Input } from '@components/Input/Input';
import { PriceInput } from '@components/Input/PriceInput';
import { PictureItem } from '@components/PictureItem/PictureItem';
import { Textarea } from '@components/Textarea/Textarea';
import { MAX_IMAGE_SIZE } from '@constants/constants';
import { useInput } from '@hooks/useInput';
import { usePrice } from '@hooks/usePrice';
import React, { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';

export const AddPage = () => {
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const [productImgs, setProductImgs] = useState<string[]>([]);
  const { value: name, onChange: onChangeName } = useInput();
  const { value: price, onChange: onChangePrice } = usePrice();
  const { value: content, onChange: onChangeContent } = useInput();
  const isAllRequired = imgFiles.length === 0 || name === '' || content === '';

  const onUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.size <= MAX_IMAGE_SIZE) {
      setImgFiles([...imgFiles, file]);
      setProductImgs([...productImgs, URL.createObjectURL(file)]);
    }
  };
  const deleteImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    const imgId = e.currentTarget.id;
    setImgFiles(imgFiles.filter((_, idx) => idx.toString() !== imgId));
    setProductImgs(productImgs.filter((_, idx) => idx.toString() !== imgId));
  };

  return (
    <Page>
      <Header backgroundColor="neutralBackgroundWeak">
        <Header.Left>
          <TextButton size="M" textColor="neutralTextStrong">
            닫기
          </TextButton>
        </Header.Left>
        <Header.Center>내 물건 팔기</Header.Center>
        <Header.Right>
          <TextButton disabled={isAllRequired} textColor="accentPrimary">
            완료
          </TextButton>
        </Header.Right>
      </Header>
      <ContentsWrapper>
        <Contents>
          <ImgSection>
            <ScrollWrapper>
              <ImgScroll>
                <AddImgInput
                  numberOfImg={productImgs.length}
                  onChange={onUploadImg}
                />
                {productImgs.map((productImg, index) => (
                  <PictureItem
                    key={index}
                    id={index}
                    isThumbnail={index === 0 ? true : false}
                    imgUrl={productImg}
                    deleteImg={deleteImg}
                  />
                ))}
              </ImgScroll>
            </ScrollWrapper>
          </ImgSection>
          <NameSection>
            <Input value={name} onChange={onChangeName} />
          </NameSection>
          <PriceSection>
            <PriceInput
              currencyUnit="won"
              value={price}
              onChange={onChangePrice}
            />
          </PriceSection>
          <ContentSection>
            <Textarea
              placeholder="역삼 1동에 올릴 게시물 내용을 작성해주세요.(판매금지 물품은 게시가 제한될 수 있어요.)"
              value={content}
              onChange={onChangeContent}
            />
          </ContentSection>
        </Contents>
      </ContentsWrapper>
      <ActionBar>
        <EditBar regionName="역삼1동" />
      </ActionBar>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ContentsWrapper = styled.div`
  margin: 56px 0px 70px 0px;
  display: flex;
  flex-grow: 1;
  overflow-y: hidden;
`;

const Contents = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  section:not(:last-child)::after {
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '';
    width: inherit;
    height: 1px;
    background-color: ${({ theme }) => theme.color.neutralBorder};
  }
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 16px;
`;

const ImgSection = styled(Section)`
  min-height: 104px;
`;

const NameSection = styled(Section)``;

const PriceSection = styled(Section)``;

const ContentSection = styled(Section)``;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgScroll = styled.div`
  display: flex;
  align-items: end;
  width: max-content;
  height: 100%;
  gap: 16px;
`;
