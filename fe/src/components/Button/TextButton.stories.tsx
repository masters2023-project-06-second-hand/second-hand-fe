import type { Meta, StoryObj } from '@storybook/react';
import { TextButton } from './TextButton';
import { Icon } from '@components/Icon/Icon';

const meta = {
  title: 'Component/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    textColor: {
      control: { type: 'select' },
      defaultValue: 'neutralTextStrong',
      options: ['neutralTextStrong', 'neutralText', 'accentText'],
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'M',
      description: 'Default: M',
      options: ['S', 'M'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconText: Story = {
  render: (args) => (
    <TextButton {...args}>
      <Icon name="chevronLeft" size={args.size} stroke={args.textColor} />
      뒤로
    </TextButton>
  ),
  args: {
    textColor: 'neutralTextStrong',
  },
};

export const TextOnly: Story = {
  args: {
    children: '회원가입',
    size: 'S',
  },
};

export const IconOnly: Story = {
  render: (args) => (
    <TextButton {...args}>
      <Icon name="layoutGrid" size={args.size} stroke={args.textColor} />
    </TextButton>
  ),
  args: {
    textColor: 'neutralTextStrong',
    size: 'M',
  },
};

export const Disabled: Story = {
  args: {
    children: '완료',
    textColor: 'neutralTextStrong',
    disabled: true,
  },
};
