import React, { ReactNode } from 'react';

interface PickerOptionsWrapperProps {
    children?: ReactNode;
    width?: number;
}

const PickerOptionsWrapper: React.FC<PickerOptionsWrapperProps> = ({ children, width = 343 }) => {
    return (
        <div
            className={`mt-xs4 bg-bgWhite absolute z-40`}
            style={{ width: `${width}px` }}
        >
            <ul className="max-h-[266px] overflow-y-auto border-1 border-solid border-borderDefault rounded-minimal py-1 overflow-auto focus:outline-none">
                {children}
            </ul>
        </div>
    );
};

export default PickerOptionsWrapper;
