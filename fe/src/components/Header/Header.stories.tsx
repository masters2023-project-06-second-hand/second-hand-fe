import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Icon } from '@components/Icon/Icon';
import { TextButton } from '@components/Button/TextButton';

const meta = {
  title: 'Component/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['neutralBackgroundBlur', 'transparent'],
    },
    children: {
      description:
        '위치 별로 `styled.div, styled.h2` 대신 `<Header.Left></Header.Left>`, `<Header.Center></Header.Center>`, `<Header.Right></Header.Right>` 태그 안에 요소를 넣어줘야 합니다. 코드 그대로 나오게 법 아무리 찾아도 못 찾겠어요 ㅜㅜ',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Left>
        <TextButton size="M" textColor="neutralTextStrong">
          <Icon name="chevronLeft" size="M" stroke="neutralTextStrong" />
          뒤로
        </TextButton>
      </Header.Left>
      <Header.Center>내 물건 팔기</Header.Center>
      <Header.Right>
        <TextButton disabled textColor="neutralTextStrong">
          완료
        </TextButton>
      </Header.Right>
    </Header>
  ),
};

export const CenterOnly: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Center>관심 목록</Header.Center>
    </Header>
  ),
};

export const BothSide: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Left>
        <TextButton size="M" textColor="neutralTextStrong">
          역삼1동
          <Icon name="chevronDown" size="M" stroke="neutralTextStrong" />
        </TextButton>
      </Header.Left>
      <Header.Right>
        <Icon name="layoutGrid" size="M" stroke="neutralTextStrong" />
      </Header.Right>
    </Header>
  ),
};

export const BothSideTransparent: Story = {
  render: (args) => (
    <Header {...args} backgroundColor="transparent">
      <Header.Left>
        <TextButton size="M" textColor="accentText">
          <Icon name="chevronLeft" size="M" stroke="accentText" />
          뒤로
        </TextButton>
      </Header.Left>
      <Header.Center>내 물건 팔기</Header.Center>
      <Header.Right>
        <Icon name="dots" size="M" stroke="accentText" />
      </Header.Right>
    </Header>
  ),
};
