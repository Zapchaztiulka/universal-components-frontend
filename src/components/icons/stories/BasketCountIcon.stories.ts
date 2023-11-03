import type { Meta, StoryObj } from '@storybook/react';

import { BasketCountIcon } from ".."

const meta = {
    title: 'Icons/BasketCountIcon',
    component: BasketCountIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BasketCountIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const Count5: Story = {
    args: {
        ...Default.args,
        count: 5,
    },
};
