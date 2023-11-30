import React, { ReactNode, FC } from 'react';
import cn from 'clsx';

interface FormFieldProps {
    label?: string;
    message?: string;
    hasMessage?: boolean;
    status?: FIELD_STATUS;
    isRequired?: boolean;
    className?: string;
    children: ReactNode;
}

export interface FormFieldComponent<T> extends FC<T> {
    STATUS: typeof FIELD_STATUS;
}

export enum FIELD_STATUS {
    INFO = 'info',
    ERROR = 'error',
    SUCCESS = 'success',
}

const statusPropToClasses = {
    [FIELD_STATUS.INFO]: 'text-textPrimary',
    [FIELD_STATUS.ERROR]: 'text-textError',
    [FIELD_STATUS.SUCCESS]: 'text-textSuccess',
};

const FormField = ({
    label,
    isRequired,
    message,
    hasMessage,
    status = FIELD_STATUS.INFO,
    className,
    children,
}: FormFieldProps) => {
    return (
        <div>
            <div>
                {label ? <label className="text-textSecondary">{label}</label> : ''}
                {isRequired ? <span className="text-textError">*</span> : ''}
            </div>
            <div className={className}>{children}</div>
            <div className={cn('my-xs3 text-sm', statusPropToClasses[status])}>{hasMessage && message}</div>
        </div>
    );
};

FormField.STATUS = FIELD_STATUS;

export default FormField as FormFieldComponent<FormFieldProps>;
