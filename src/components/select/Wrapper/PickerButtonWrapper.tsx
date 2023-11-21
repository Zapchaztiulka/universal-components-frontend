import React, { ReactNode, MouseEvent } from 'react';
import cn from 'clsx';
import { ArrowDownIcon } from '../../icons';
import theme from '../../../../presets';

interface PickerButtonWrapperProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    isOpen?: boolean;
    isDisabled?: boolean;
    children?: ReactNode;
    isError?: boolean;
    isSuccess?: boolean;
    width?: number;
}

const PickerButtonWrapper: React.FC<PickerButtonWrapperProps> = ({ onClick, isOpen, isDisabled, isError=false, isSuccess=false, children, width }) => {
    return (
        <button
            type="button"
            className={cn(
                `w-[${width}px]  text-textInputDefault relative w-full bg-bgWhite text-left cursor-default overflow-hidden border-1 border-solid rounded-minimal active:bg-bgPressedGrey active:border-borderActive hover:text-textInputActive hover:bg-bgHoverGrey focus:focus:shadow-btFocus disabled:bg-bgDisable`,
                { 'text-textInputActive border-borderActive': isOpen },
                { 'border-borderDefault': !isOpen },
                { 'border-borderError': isError },
                { 'border-borderSuccess': isSuccess },
            )}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
            <span
                className={cn(
                    'absolute right-[12px] top-[12px] flex items-center pointer-events-none  transition transition-all duration-100',
                    { 'rotate-180': isOpen },
                )}
            >
                <ArrowDownIcon color={isOpen ? theme.colors.iconPrimary : theme.colors.iconSecondary} />
            </span>
        </button>
    );
};

export default PickerButtonWrapper;
