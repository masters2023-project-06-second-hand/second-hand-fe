import type { Meta, StoryObj } from '@storybook/react';
import { ActionBar } from './ActionBar';

const meta = {
  title: 'Component/ActionBar',
  component: ActionBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      description: 'add: 추가 페이지 | detail: 상세 페이지',
      options: ['add', 'detail'],
      defaultValue: 'add',
    },
    isSeller: {
      control: { type: 'boolean' },
      description: 'true | false',
      options: [true, false],
      defaultValue: false,
    },
    isLiked: {
      control: { type: 'boolean' },
      description: 'true | false',
      options: [true, false],
      defaultValue: false,
    },
    price: {
      control: { type: 'text' },
      description: '가격',
      defaultValue: '120,000',
    },
    region: {
      control: { type: 'text' },
      description: '지역 이름',
      defaultValue: '역삼1동',
    },
  },
} satisfies Meta<typeof ActionBar>;

export default meta;

type Story = StoryObj<typeof ActionBar>;

export const AddPage: Story = {
  args: {
    region: '역삼1동',
  },
};

export const SellerDetailDefault: Story = {
  args: {
    type: 'detail',
    isSeller: true,
    isLiked: false,
    price: '120,000',
  },
};

export const SellerDetailLiked: Story = {
  args: {
    type: 'detail',
    isSeller: true,
    isLiked: true,
    price: '120,000',
  },
};

export const BuyerDetailDefault: Story = {
  args: {
    type: 'detail',
    isSeller: false,
    isLiked: false,
    price: '120,000',
  },
};

export const BuyerDetailLiked: Story = {
  args: {
    type: 'detail',
    isSeller: false,
    isLiked: true,
    price: '120,000',
  },
};
