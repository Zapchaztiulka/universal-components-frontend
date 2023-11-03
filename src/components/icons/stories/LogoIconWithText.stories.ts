import type { Meta, StoryObj } from '@storybook/react';

import { LogoIconWithText } from ".."

const meta = {
    title: 'Icons/LogoIconWithText',
    component: LogoIconWithText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LogoIconWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const Black: Story = {
    args: {
        ...Default.args,
        color1: 'black',
        color2: 'black',
        color3: 'black'
    },
};