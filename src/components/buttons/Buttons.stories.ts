import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

import { Buttons } from './Buttons';

const meta = {
  title: 'Buttons',
  component: Buttons,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: '42' },
      },
      routing: { path: '/users/:userId' },
    }),
  },
  // tags: ['autodocs'],
  argTypes: {
  },
  decorators: [withRouter],
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};



