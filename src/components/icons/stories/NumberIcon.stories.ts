import type { Meta, StoryObj } from '@storybook/react';

import { NumberIcon } from ".."

const meta = {
    title: 'Icons/NumberIcon',
    component: NumberIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NumberIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const Number5: Story = {
    args: {
        ...Default.args,
        number: 5,
    },
};
