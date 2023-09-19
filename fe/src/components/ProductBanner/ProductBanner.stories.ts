import type { Meta, StoryObj } from '@storybook/react';
import { ProductBanner } from './ProductBanner';

const meta = {
  title: 'Component/ProductBanner',
  component: ProductBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    imgUrl: {
      control: { type: 'text' },
      description: '이미지 url',
      options: ['add', 'detail'],
      defaultValue: 'add',
    },
    name: {
      control: { type: 'text' },
      description: '상품 이름',
      defaultValue: '빈티지 롤러 스케이트',
    },
    price: {
      control: { type: 'text' },
      description: '상품 가격',
      defaultValue: '169,000',
    },
  },
} satisfies Meta<typeof ProductBanner>;

export default meta;

type Story = StoryObj<typeof ProductBanner>;

export const Banner: Story = {
  args: {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtEYhfpwp2tqGwikqPRHLMStNH5VquZaQOw&usqp=CAU',
    name: '빈티지 롤러 스케이트',
    price: '169,000',
  },
};
