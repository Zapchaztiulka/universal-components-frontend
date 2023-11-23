import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../../FormField/FormField';
import { DropdownComponent, DropdownDisabled } from './Dropdown.stories';
import { Dropdown } from '.';

const meta = {
    title: 'Select/Dropdown',
    component: FormField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownWithLabel: Story = {
    render: ({ label, ...rest }) => {
        return (
            <FormField label={label}>
                <Dropdown
                    {...rest}
                    {...DropdownComponent.args}
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

export const DropdownWithRequiredLabel: Story = {
    render: ({ label, isRequired, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
            >
                <Dropdown
                    {...rest}
                    {...DropdownComponent.args}
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

export const DropdownDisabledWithLabel: Story = {
    render: ({ label, ...rest }) => {
        return (
            <FormField label={label}>
                <Dropdown
                    {...rest}
                    {...DropdownDisabled.args}
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

export const DropdownDisabledWithRequiredLabel: Story = {
    render: ({ label, isRequired, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
            >
                <Dropdown
                    {...rest}
                    {...DropdownDisabled.args}
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

export const DropdownErrorWithRequiredLabel: Story = {
    render: ({ label, isRequired, isError, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                isError={isError}
                isMessage={isMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownComponent.args}
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
export const DropdownErrorWithLabel: Story = {
    render: ({ label, isError, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isError={isError}
                isMessage={isMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownComponent.args}
                    isError={isError}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isError: true,
        isMessage: true,
        message: 'Error message',
        children: '',
    },
};

export const DropdownSuccessWithRequiredLabel: Story = {
    render: ({ label, isRequired, isSuccess, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                isSuccess={isSuccess}
                isMessage={isMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownComponent.args}
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
export const DropdownSuccessWithLabel: Story = {
    render: ({ label, isSuccess, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isSuccess={isSuccess}
                isMessage={isMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownComponent.args}
                    isSuccess={isSuccess}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isSuccess: true,
        isMessage: true,
        message: 'Success message',
        children: '',
    },
};
