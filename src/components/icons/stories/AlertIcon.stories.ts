import type { Meta, StoryObj } from '@storybook/react';

import { AlertIcon } from ".."

const meta = {
    title: 'Icons/AlertIcon',
    component: AlertIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AlertIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const Size16: Story = {
    args: {
        ...Default.args,
        size: '16',
    },
};

export const Size44: Story = {
    args: {
        ...Default.args,
        size: '44',
    },
};

export const Warning: Story = {
    args: {
        ...Default.args,
        variant: 'warning',
    },
};

export const Success: Story = {
    args: {
        ...Default.args,
        variant: 'success',
    },
};

export const Error: Story = {
    args: {
        ...Default.args,
        variant: 'error',
    },
};

export const Brand: Story = {
    args: {
        ...Default.args,
        variant: 'brand',
    },
};

