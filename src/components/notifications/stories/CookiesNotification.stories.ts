import type { Meta, StoryObj } from '@storybook/react';

import { CookiesNotification } from ".."
import { Sizes } from '../universalComponents/Notification';

const meta = {
    title: 'Notifications/CookiesNotification',
    component: CookiesNotification,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: false,
                iFrameHeight: 400,
                width: '500px',
                iFrameWidth: 600
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CookiesNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const Small: Story = {
    args: {
        ...Default.args,
        size: Sizes.Small,
    },
};