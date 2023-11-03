import type { Meta, StoryObj } from '@storybook/react';

import { BasketIcon } from ".."

const meta = {
    title: 'Icons/BasketIcon',
    component: BasketIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BasketIcon>;

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