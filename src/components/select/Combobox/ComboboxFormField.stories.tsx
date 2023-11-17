import type { Meta, StoryObj } from '@storybook/react';

import Combobox from './Combobox';
import FormField from '../../FormField/FormField';
import { ComboboxComponent } from './Combobox.stories';

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

export const ComboboxWithError: Story = {
    render: ({ label, isRequired, isError, message, ...rest }) => {
        return (
            <FormField
                label={label}
                isRequired={isRequired}
                isError={isError}
                message={message}
            >
                <Combobox
                    {...rest}
                    {...ComboboxComponent.args}
                    isRequired={isRequired}
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
        message: 'Error message',
        children: '',
    },
};

export const ComboboxWithSuccess: Story = {
        render: ({ label, isRequired, isError, message, ...rest }) => {
            return (
                <FormField
                    label={label}
                    isRequired={isRequired}
                    isError={isError}
                    message={message}
                >
                    <Combobox
                        {...rest}
                        {...ComboboxComponent.args}
                        isRequired={isRequired}
                        isError={isError}
                        onChange={() => {}}
                    />
                </FormField>
            );
        },
        args: {
            label: 'Назва',
            isRequired: true,
            isSuccess: true,
            children: '',
        },
    };