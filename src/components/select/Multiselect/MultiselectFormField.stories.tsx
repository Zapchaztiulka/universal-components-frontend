import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../../FormField/FormField';
import { MultiselectComponent, MultiselectDisabled, MultiselectError, MultiselectSuccess } from './Multiselect.stories';
import Multiselect from './Multiselect';

const meta = {
    title: 'Select/Multiselect',
    component: FormField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MultiselectWithLabel: Story = {
    render: ({ label, ...rest }) => {
        return (
            <FormField label={label}>
                <Multiselect
                    {...rest}
                    {...MultiselectComponent.args}
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

export const MultiselectWithRequiredLabel: Story = {
    render: ({ label, isRequired, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectComponent.args}
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

export const MultiselectDisabledWithLabel: Story = {
    render: ({ label, ...rest }) => {
        return (
            <FormField label={label}>
                <Multiselect
                    {...rest}
                    {...MultiselectDisabled.args}
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

export const MultiselectDisabledWithRequiredLabel: Story = {
    render: ({ label, isRequired, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectDisabled.args}
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

export const MultiselectErrorWithRequiredLabel: Story = {
    render: ({ label, isRequired, message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                status={FormField.STATUS.ERROR}
                hasMessage={hasMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectError.args}
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
export const MultiselectErrorWithLabel: Story = {
    render: ({ label, message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                status={FormField.STATUS.ERROR}
                hasMessage={hasMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectError.args}
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
export const MultiselectErrorNoLabel: Story = {
    render: ({ message, hasMessage, ...rest }) => {
        return (
            <FormField
                status={FormField.STATUS.ERROR}
                hasMessage={hasMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectError.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        hasMessage: true,
        message: 'Error message',
        children: '',
    },
};

export const MultiselectSuccessWithRequiredLabel: Story = {
    render: ({ label, isRequired, message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                status={FormField.STATUS.SUCCESS}
                hasMessage={hasMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectSuccess.args}
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
export const MultiselectSuccessWithLabel: Story = {
    render: ({ label, message, hasMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                status={FormField.STATUS.SUCCESS}
                hasMessage={hasMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectSuccess.args}
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
export const MultiselectSuccessNoLabel: Story = {
    render: ({ message, hasMessage, ...rest }) => {
        return (
            <FormField
                status={FormField.STATUS.SUCCESS}
                hasMessage={hasMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectSuccess.args}
                    onChange={() => {}}
                />
            </FormField>
        );
    },
    args: {
        hasMessage: true,
        message: 'Success message',
        children: '',
    },
};
