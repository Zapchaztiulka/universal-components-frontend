import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from ".."

const meta = {
    title: 'Notifications/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: "message."
    },
};

export const WithCloseButton: Story = {
    args: {
        ...Default.args,
        showCloseButton: true
    },
};

export const Negative: Story = {
    args: {
        ...Default.args,
        state: "error",
    },
};

export const Info: Story = {
    args: {
        ...Default.args,
        state: "information",
        showCloseButton: true
    },
};