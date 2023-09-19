import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { icons } from '@components/Icon/Icon';

const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      description: '`S | M | L`',
      options: ['S', 'M', 'L'],
    },
    icon: {
      control: { type: 'select' },
      description: '`string`',
      defaultValue: 'plus',
      options: Object.keys(icons),
    },
    text: {
      control: { type: 'text' },
      description: '`string`',
      defaultValue: '텍스트',
    },
    backgroundColor: {
      control: { type: 'radio' },
      description: '`string`',
      options: ['accentPrimary', 'accentText'],
    },
    onClick: { description: '`() => void`' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnlyL: Story = {
  args: {
    size: 'L',
    backgroundColor: 'accentPrimary',
    text: '로그아웃',
  },
};

export const TextIconL: Story = {
  args: {
    size: 'L',
    icon: 'plus',
    backgroundColor: 'accentPrimary',
    text: '위치 추가',
  },
};

export const TextIconM: Story = {
  args: {
    size: 'M',
    icon: 'plus',
    backgroundColor: 'accentText',
    text: '추가',
  },
};

export const TextOnlyS: Story = {
  args: {
    size: 'S',
    backgroundColor: 'accentPrimary',
    text: '대화 중인 채팅방',
  },
};
