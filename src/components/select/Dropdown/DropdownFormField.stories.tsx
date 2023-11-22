import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../../FormField/FormField';
import { DropdownComponent, DropdownDisabled, DropdownError, DropdownSuccess } from './Dropdown.stories';
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
    render: ({ label, isRequired, message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                status={FormField.STATUS.ERROR}
                hasMessage={hasMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownError.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,

        hasMessage: true,
        message: 'Error message',
        children: '',
    },
};
export const DropdownErrorWithLabel: Story = {
    render: ({ label, message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                status={FormField.STATUS.ERROR}
                hasMessage={hasMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownError.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        hasMessage: true,
        message: 'Error message',
        children: '',
    },
};

export const DropdownSuccessWithRequiredLabel: Story = {
    render: ({ label, isRequired,  message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                status={FormField.STATUS.SUCCESS}
                hasMessage={hasMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownSuccess.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        isRequired: true,
        hasMessage: true,
        message: 'Success message',
        children: '',
    },
};
export const DropdownSuccessWithLabel: Story = {
    render: ({ label,  message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                status={FormField.STATUS.SUCCESS}
                hasMessage={hasMessage}
                message={message}
            >
                <Dropdown
                    {...rest}
                    {...DropdownSuccess.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        label: 'Назва',
        hasMessage: true,
        message: 'Success message',
        children: '',
    },
};
