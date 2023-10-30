import type { Meta, StoryObj } from '@storybook/react';


import { Page } from './Page';

const meta = {
  title: 'Buttons/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  // tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};



