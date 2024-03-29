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

const optionsMulti = ['Варіант 1', 'Варіант 2', 'Варіант 3', 'Варіант 4'];

export default meta;
type StoryCombobox = StoryObj<typeof meta>;

export const ComboboxComponent: StoryCombobox = {
    args: {
        options: optionsMulti,
        placeholder: 'Оберіть значення..',
    },
};

export const ComboboxWithDefault: StoryCombobox = {
    args: {
        options: optionsMulti,
        onChange: () => {},
        chosenOption: '1',
    },
};

export const ComboboxDisabled: StoryCombobox = {
    args: {
        options: optionsMulti,
        placeholder: 'Оберіть значення..',
        isDisabled: true,
    },
};

export const ComboboxAddOption: StoryCombobox = {
    args: {
        options: optionsMulti,
        placeholder: 'Оберіть значення..',
        onCreate: (option) => {
            alert(option);
        },
    },
};

export const ComboboxSuccess: StoryCombobox = {
    args: {
        options: optionsMulti,
        placeholder: 'Оберіть значення..',
        isSuccess: true,
    },
};
export const ComboboxError: StoryCombobox = {
    args: {
        options: optionsMulti,
        placeholder: 'Оберіть значення..',
        isError: true,
    },
};
