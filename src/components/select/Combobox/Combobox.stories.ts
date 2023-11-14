import type { Meta, StoryObj } from '@storybook/react';

import Combobox from './Combobox';


const meta = {
  title: 'Select/Component',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Combobox>;

const optionsMulti = ['Варіант 1','Варіант 2','Варіант 3','Варіант 4']

export default meta;
type Story = StoryObj<typeof meta>;

export const ComboboxComponent: Story = {
  args: {
    options: optionsMulti,
  },
}; 
