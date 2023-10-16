import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

import DestructiveBtn from "./universalComponents/DestructiveBtn";

const meta = {
  title: 'Button',
  component: DestructiveBtn,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: '42' },
      },
      routing: { path: '/users/:userId' },
    }),
  },
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [withRouter],
} satisfies Meta<typeof DestructiveBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
  },
};
export const Disabled: Story = {
  args: {
    text: 'Button',
    disabled: true,
  },
};
export const WithIcon: Story = {
  args: {
    text: 'Button',
    withIcon: true,
  },
};

