import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../../FormField/FormField';
import { MultiselectComponent, MultiselectDisabled } from './Multiselect.stories';
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

export const MultiselectWithError: Story = {
    render: ({ label, isRequired, isError, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                isError={isError}
                isMessage={isMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectComponent.args}
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

export const MultiselectWithSuccess: Story = {
    render: ({ label, isRequired, isSuccess, message, isMessage, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                isSuccess={isSuccess}
                isMessage={isMessage}
                message={message}
            >
                <Multiselect
                    {...rest}
                    {...MultiselectComponent.args}
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
