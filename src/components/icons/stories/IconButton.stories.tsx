import type { Meta, StoryObj } from '@storybook/react';

import { IconButton, PlusIcon } from ".."

const meta = {
    title: 'Icons/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Component wrapper for icon; contains states - hover, pressed, active, disabled"
            }
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <PlusIcon />
    },
};

export const Active: Story = {
    args: {
        children: <PlusIcon />,
        active: true
    },
};

export const Disabled: Story = {
    args: {
        children: <PlusIcon />,
        disabled: true
    },
};