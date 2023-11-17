import React, { ReactNode } from 'react';

interface PickerWrapperProps {
    label: string;
    isRequired?: boolean;
    children: ReactNode;
}

const PickerWrapper: React.FC<PickerWrapperProps> = ({ label, isRequired, children }) => {
    return (
        <div className="relative w-[343px] transition transition-all duration-500 leading-6">
            {/* <div>
                <label className="text-textSecondary">{label}</label>
                {isRequired ? <span className="text-textError"> *</span> : ''}
            </div> */}
            {children}
        </div>
    );
};

export default PickerWrapper;
