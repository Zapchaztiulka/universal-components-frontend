import type { Meta, StoryObj } from '@storybook/react';

import Selects from './Selects';


const meta = {
  title: 'Selects/Component',
  component: Selects,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Selects>;



export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
    disabled: false,
  },
}; 