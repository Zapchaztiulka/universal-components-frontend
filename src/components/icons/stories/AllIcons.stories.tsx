import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '../.';

const AllIcons = () => {
    const iconsArr = Object.entries(Icons);
    return (
        <div className='grid gap-[14px] grid-cols-6 items-center'>
            {iconsArr.filter(([name]) => (name != 'IconButton' && name != 'IconWithBg')).map(([name, Icon]) => (
                <>
                    <div className='w-fit m-auto p-[4px] border-1 border-gray-100 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]'>
                        <Icon /> 
                    </div>
                    <p className='text-caption'>{name}</p>
                </>
            ))}
        </div>
    )
}

const meta = {
    title: 'Icons/All',
    component: AllIcons,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof AllIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};