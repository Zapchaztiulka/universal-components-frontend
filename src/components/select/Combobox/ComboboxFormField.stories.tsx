import type { Meta, StoryObj } from '@storybook/react';

import Combobox from './Combobox';
import FormField from '../../FormField/FormField';
import { ComboboxComponent, ComboboxDisabled } from './Combobox.stories';

const meta = {
    title: 'Select/Combobox',
    component: FormField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComboboxWithLabel: Story = {
    render: ({ label, ...rest }) => {
        return (
            <FormField label={label}>
                <Combobox
                    {...rest}
                    {...ComboboxComponent.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        children: '',
    },
};

export const ComboboxWithRequiredLabel: Story = {
    render: ({ label,isRequired, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
            >
                <Combobox
                    {...rest}
                    {...ComboboxComponent.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,
        children: '',
    },
};

export const ComboboxWithLabelAndDisabled: Story = {
    render: ({ label,isRequired, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
            >
                <Combobox
                    {...rest}
                    {...ComboboxDisabled.args}
                   
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,
        children: '',
    },
};

export const ComboboxWithError: Story = {
    render: ({ label, isRequired, isError, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                isError={isError}
                isMessage={isMessage}
                message={message}
            >
                <Combobox
                    {...rest}
                    {...ComboboxComponent.args}
                    isError={isError}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,
        isError: true,
        isMessage: true,
        message: 'Error message',
        children: '',
    },
};

export const ComboboxWithSuccess: Story = {
    render: ({ label, isRequired, isSuccess, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                isSuccess={isSuccess}
                isMessage={isMessage}
                message={message}
            >
                <Combobox
                    {...rest}
                    {...ComboboxComponent.args}
                    isSuccess={isSuccess}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,
        isSuccess: true,
        isMessage: true,
        message: 'Success message',
        children: '',
    },
};
