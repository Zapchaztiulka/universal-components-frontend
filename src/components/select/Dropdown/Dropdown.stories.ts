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
  'Варіант 4',
]


export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownComponent: Story = {
  args: {
    options: optionsDropdown,
    placeholder: "Оберіть значення...",
  },
};

export const DropdownWithDefault: Story = {
  args: {
      options: optionsDropdown,
      label: 'Назва',
      onChange: () => {},
      choseOption: optionsDropdown[1],
  },
};

export const DropdownDisabled: Story = {
  args: {
      options: optionsDropdown,
      placeholder: 'Оберіть значення..',
      isDisabled: true,
  },
};
