import type { Meta, StoryObj } from '@storybook/react';

import Multiselect from './Multiselect';


const meta = {
  title: 'Select/Component',
  component: Multiselect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Multiselect>;

const optionsMulti = ['Варіант 1','Варіант 2','Варіант 3','Варіант 4']

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiselectComponent: Story = {
  args: {
    options: optionsMulti,
    placeholder: "Оберіть значення..."
  },
}; 
export const MultiselectWithLabel: Story = {
  args: {
    options: optionsMulti,
    label: "Label"
  },
};
export const MultiselectWithRequiredLabel: Story = {
  args: {
    options: optionsMulti,
    label: "Label",
    required: true
  },
};