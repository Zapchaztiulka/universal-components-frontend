import type { Meta, StoryObj } from '@storybook/react';

import { IconWithBg, PlusIcon } from ".."

const meta = {
    title: 'Icons/IconWithBg',
    component: IconWithBg,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Component wrapper - adds background to icon"
            }
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof IconWithBg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <PlusIcon />,
    },
};

export const Error: Story = {
    args: {
        children: <PlusIcon />,
        variant: "error"
    },
};

export const Warning: Story = {
    args: {
        children: <PlusIcon />,
        variant: "warning"
    },
};

export const Success: Story = {
    args: {
        children: <PlusIcon />,
        variant: "success"
    },
};

export const Brand: Story = {
    args: {
        children: <PlusIcon />,
        variant: "brand"
    },
};