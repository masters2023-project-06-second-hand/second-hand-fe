import type { Meta, StoryObj } from '@storybook/react';
import { StateBadge } from './StateBadge';

const meta = {
  title: 'Component/StateBadge',
  component: StateBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['예약중', '판매완료'],
    },
  },
} satisfies Meta<typeof StateBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reserved: Story = {
  args: {
    state: '예약중',
  },
};

export const SoldOut: Story = {
  args: {
    state: '판매완료',
  },
};
