import type { Meta, StoryObj } from '@storybook/react';

import Select from './Dropdown';


const meta = {
  title: 'Select/Dropdown',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Select>;

const optionsDropdown = [
  'Варіант 1',
  'Варіант 2',
  'Варіант 3',
  'Варіант 4'
]


export default meta;
type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  args: {
    options: optionsDropdown,
    value: "Оберіть значення...",
  },
};
export const DropdownWithLabel: Story = {
  args: {
    options: optionsDropdown,
    label: "Label"
  },
};
export const DropdownWithRequiredLabel: Story = {
  args: {
    options: optionsDropdown,
    label: "Label",
    required: true
  },
};
