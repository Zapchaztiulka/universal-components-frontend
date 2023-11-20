import React, { ReactNode } from 'react';
import cn from 'clsx';

interface FormFieldProps {
    label: string;
    message?: string;
    isMessage?: boolean;
    isRequired?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    isInfo?: boolean;
    className?: string;
    children: ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    isRequired,
    message,
    isMessage,
    isInfo,
    isSuccess,
    isError,
    className,
    children,
}) => {
    return (
        <div>
            <div>
                <label className="text-textSecondary">{label}</label>
                {isRequired ? <span className="text-textError">*</span> : ''}
            </div>
            <div className={className}>{children}</div>
            <div
                className={cn(
                    'my-xs3 text-sm',
                    { 'text-textError': isError },
                    { 'text-textSuccess': isSuccess },
                    { 'text-textPrimary': isInfo },
                )}
            >
                {isMessage && message}
            </div>
        </div>
    );
};

export default FormField;
