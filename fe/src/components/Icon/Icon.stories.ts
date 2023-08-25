import type { Meta, StoryObj } from '@storybook/react';
import { Icon, icons } from './Icon';

const meta = {
  title: 'Component/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
    size: {
      control: { type: 'radio' },
      description: 'M: 24px | S: 16px',
      options: ['M', 'S'],
      defaultValue: 'M',
    },
    fill: {
      control: { type: 'select' },
      description: '채우기 색상',
      defaultValue: 'none',
      options: [
        'none',
        'neutralTextStrong',
        'neutralTextWeak',
        'neutralText',
        'accentText',
        'accentTextWeak',
      ],
    },
    stroke: {
      control: { type: 'select' },
      description: '선 색상',
      defaultValue: 'neutralTextStrong',
      options: [
        'neutralTextStrong',
        'neutralTextWeak',
        'neutralText',
        'accentText',
        'accentTextWeak',
      ],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ChevronDown: Story = {
  args: {
    name: 'chevronDown',
    fill: 'none',
  },
};

export const ChevronLeft: Story = {
  args: {
    name: 'chevronLeft',
    fill: 'none',
  },
};

export const CircleXFilled: Story = {
  args: {
    name: 'circleXFilled',
    fill: 'accentText',
    stroke: 'none',
  },
};

export const Dots: Story = {
  args: {
    name: 'dots',
    fill: 'neutralTextStrong',
    stroke: 'neutralTextStrong',
  },
};

export const HeartFilled: Story = {
  args: {
    name: 'heartFilled',
    fill: 'neutralTextStrong',
  },
};

export const Heart: Story = {
  args: {
    name: 'heart',
    fill: 'none',
    size: 'M',
  },
};

export const Home: Story = {
  args: {
    name: 'home',
    fill: 'none',
    size: 'M',
  },
};

export const LayoutGrid: Story = {
  args: {
    name: 'layoutGrid',
    fill: 'none',
  },
};

export const MapPinFIlled: Story = {
  args: {
    name: 'mapPinFilled',
    fill: 'neutralTextStrong',
  },
};

export const MessageNoti: Story = {
  args: {
    name: 'messageNoti',
    fill: 'neutralTextStrong',
    stroke: 'neutralTextStrong',
    size: 'M',
  },
};
export const Message: Story = {
  args: {
    name: 'message',
    fill: 'none',
    size: 'M',
  },
};

export const News: Story = {
  args: {
    name: 'news',
    fill: 'none',
    size: 'M',
  },
};

export const Send: Story = {
  args: {
    name: 'send',
    stroke: 'accentText',
    size: 'S',
  },
};

export const UserCircle: Story = {
  args: {
    name: 'userCircle',
    fill: 'none',
    size: 'M',
  },
};
