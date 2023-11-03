import type { Meta, StoryObj } from '@storybook/react';

import { LoaderIcon } from ".."

const meta = {
    title: 'Icons/LoaderIcon',
    component: LoaderIcon,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'dark' }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LoaderIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};
