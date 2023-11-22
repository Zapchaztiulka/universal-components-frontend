import type { Meta, StoryObj } from '@storybook/react';

import Combobox from './Combobox';
import FormField from '../../FormField/FormField';
import { ComboboxComponent, ComboboxDisabled, ComboboxError, ComboboxSuccess } from './Combobox.stories';

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
    render: ({ label, isRequired, ...rest }) => {
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
    render: ({ label, ...rest }) => {
        return (
            <FormField label={label}>
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
        children: '',
    },
};

export const ComboboxWithRequiredLabelAndDisabled: Story = {
    render: ({ label, isRequired, ...rest }) => {
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

export const ComboboxErrorWithRequiredLabel: Story = {
    render: ({ label, isRequired, message, hasMessage , ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                status={FormField.STATUS.ERROR}
                hasMessage ={hasMessage }
                message={message}
            >
                <Combobox
                    {...rest}
                    {...ComboboxError.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,
        hasMessage : true,
        message: 'Error message',
        children: '',
    },
};

export const ComboboxErrorWithLabel: Story = {
    render: ({ label, message, hasMessage , ...rest }) => {
        return (
            <FormField
                label={label}
                status={FormField.STATUS.ERROR}
                hasMessage ={hasMessage }
                message={message}
            >
                <Combobox
                    {...rest}
                    {...ComboboxError.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        hasMessage : true,
        message: 'Error message',
        children: '',
    },
};

export const ComboboxSuccessWithRequiredLabel: Story = {
    render: ({ label, isRequired, message, hasMessage , ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                status={FormField.STATUS.SUCCESS}
                hasMessage ={hasMessage }
                message={message}
            >
                <Combobox
                    {...rest}
                    {...ComboboxSuccess.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,
        
        hasMessage : true,
        message: 'Success message',
        children: '',
    },
};
export const ComboboxSuccessWithLabel: Story = {
    render: ({ label, message, hasMessage , ...rest }) => {
        return (
            <FormField
                label={label}
                status={FormField.STATUS.SUCCESS}
                hasMessage ={hasMessage }
                message={message}
            >
                <Combobox
                    {...rest}
                    {...ComboboxSuccess.args}
                   
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        hasMessage : true,
        message: 'Success message',
        children: '',
    },
};
