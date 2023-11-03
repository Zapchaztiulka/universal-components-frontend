import type { Meta, StoryObj } from '@storybook/react';

import { EmptyImageIcon } from ".."

const meta = {
    title: 'Icons/EmptyImageIcon',
    component: EmptyImageIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EmptyImageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const Big: Story = {
    args: {
        ...Default.args,
        size: 'big',
    },
};
