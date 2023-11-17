import React, { ReactNode } from 'react';

interface PickerOptionsWrapperProps {
    children?: ReactNode;
  }

  const PickerOptionsWrapper: React.FC<PickerOptionsWrapperProps> =({ children }) => {
    return (
        <div className="mt-xs4 bg-bgWhite absolute w-[343px] z-40 ">
            <ul className="max-h-[266px] overflow-y-auto border-1 border-solid border-borderDefault rounded-minimal py-1 overflow-auto focus:outline-none">
                { children}
            </ul>
        </div>
    );
}

export default PickerOptionsWrapper;