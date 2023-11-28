import type { Meta, StoryObj } from '@storybook/react';

import Loader from './Loader'
import theme from '../../../presets';


const meta = {
    title: 'Loaders/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Loader>;



export default meta;
type Story = StoryObj<typeof meta>;

export const Loaders: Story = {
};

export const LoaderWithSize: Story = {
    args: {
        size: "24",
    },
};
export const LoaderWithColor: Story = {
    args: {
        color: theme.colors.iconPrimary,
    },
};

export const LoaderWithBackground: Story = {
    args: {
        bgColor: 'bgGreyDark',
        color: theme.colors.iconWhite,
    },
};