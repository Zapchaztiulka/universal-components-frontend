import type { Meta, StoryObj } from '@storybook/react';

import Combobox from './Combobox';

const meta = {
    title: 'Select/Combobox',
    component: Combobox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Combobox>;

export const optionsMulti = ['Варіант 1', 'Варіант 2', 'Варіант 3', 'Варіант 4'];

export default meta;
type StoryCombobox = StoryObj<typeof meta>;

export const ComboboxComponent: StoryCombobox = {
    args: {
        options: optionsMulti,
        placeholder: 'Оберіть значення..',
    },
};
export const ComboboxWithLabel: StoryCombobox = {
    args: {
        options: optionsMulti,
        label: 'Назва',
        onChange: () => {},
    },
};
export const ComboboxWithRequiredLabel: StoryCombobox = {
    args: {
        options: optionsMulti,
        label: 'Назва',
        onChange: () => {},
    },
};

export const ComboboxWithDefault: StoryCombobox = {
    args: {
        options: optionsMulti,
        label: 'Назва',
        // required: true,
        onChange: () => {},
        choosedOption: optionsMulti[1],
    },
};
export const ComboboxDisabled: StoryCombobox = {
    args: {
        options: optionsMulti,
        label: 'Назва',
        onChange: () => {},
        isDisabled: true,
    },
};
