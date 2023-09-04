import type { Meta, StoryObj } from '@storybook/react';
import { FabButton } from './FabButton';

const meta = {
  title: 'Component/FabButton',
  component: FabButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FabButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
