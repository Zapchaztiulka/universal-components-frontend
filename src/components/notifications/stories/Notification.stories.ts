import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from ".."
import { Sizes, States } from '../universalComponents/Notification';

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

export const Small: Story = {
    args: {
        ...Default.args,
        size: Sizes.Small,
    },
};

export const Negative: Story = {
    args: {
        ...Default.args,
        state: States.Error,
    },
};

export const NegativeSmall: Story = {
    args: {
        ...Default.args,
        state: States.Error,
        size: Sizes.Small
    },
};