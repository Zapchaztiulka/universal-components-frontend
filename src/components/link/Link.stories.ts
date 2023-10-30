import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta = {
    title: 'Buttons/Component',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLink: Story = {
    args: {
        text: 'Link Text',
        disabled: false,
    },
};
export const DisabledTextLink: Story = {
    args: {
        text: 'Link Text',
        disabled: true,
    },
};