import type { Meta, StoryObj } from '@storybook/react';

import { CookiesNotification } from ".."

const meta = {
    title: 'Notifications/CookiesNotification',
    component: CookiesNotification,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CookiesNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};