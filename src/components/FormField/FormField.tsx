import React, { ReactNode } from 'react';

interface FormFieldProps {
    label: string;
    message?: string;
    isRequired?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    isDisabled?: boolean;
    children: ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, isRequired, message, isError, children }) => {
    return (
        <div>
            <div>
                <label className="text-textSecondary">{label}</label>
                {isRequired ? <span className="text-textError">*</span> : ''}
            </div>
            {children}
            <div className='my-xs3 text-sm text-textError'>{isError && message}</div>
        </div>
    );
};

export default FormField;
