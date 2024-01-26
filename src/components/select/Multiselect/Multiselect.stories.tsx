import type { Meta, StoryObj } from '@storybook/react';

import Multiselect from './Multiselect';


const meta = {
  title: 'Select/Multiselect',
  component: Multiselect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Multiselect>;

const optionsMulti = ['Варіант 1', 'Варіант 2', 'Варіант 3', 'Варіант 4']

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiselectComponent: Story = {
  args: {
    options: optionsMulti,
    placeholder: "Оберіть значення..."
  },
};
export const MultiselectWithDefault: Story = {
  args: {
    options: optionsMulti,
    onChange: () => { },
    chosenOption: ['1', '2'],
  },
};

export const MultiselectDisabled: Story = {
  args: {
    options: optionsMulti,
    placeholder: 'Оберіть значення..',
    isDisabled: true,
  },
};
export const MultiselectSuccess: Story = {
  args: {
    options: optionsMulti,
    placeholder: 'Оберіть значення..',
    isSuccess: true,
  },
};
export const MultiselectError: Story = {
  args: {
    options: optionsMulti,
    placeholder: 'Оберіть значення..',
    isError: true,
  },
};