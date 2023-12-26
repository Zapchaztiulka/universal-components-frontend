import { FC, useCallback, useState } from 'react';
import cn from 'clsx';
import { SelectOption } from '../SelectOption';
import PickerButtonWrapper from '../Wrapper/PickerButtonWrapper';
import PickerOptionsWrapper from '../Wrapper/PickerOptionsWrapper';

type SelectProps = {
    name?: string;
    label?: string;
    chosenOption?: string;
    className?: string;
    placeholder?: string;
    options?: string[];
    isError?: boolean;
    isSuccess?: boolean;
    isDisabled?: boolean;
    width?: number;
    onChange: (value: string) => void;
};

const Dropdown: FC<SelectProps> = ({
    name = 'customSelect',
    chosenOption = '',
    className= '',
    placeholder = 'Оберіть значення...',
    options = [],
    isDisabled = false,
    isSuccess = false,
    isError = false,
    width = 343,
    onChange,
}) => {
    const [value, setValue] = useState(chosenOption);
    const [showOptions, setShowOptions] = useState(false);

    const handleOpenPicker = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setShowOptions(!showOptions);
        },
        [showOptions],
    );

    const updateValue = (value: string) => {
        setShowOptions(false);
        setValue(value);
        onChange(value);
    };

    return (
        <div className={`relative transition transition-all duration-500 leading-6 ${className}`}>
            <input
                type="hidden"
                name={name}
                value={value}
            />
            <PickerButtonWrapper
                onClick={handleOpenPicker}
                isOpen={showOptions}
                isDisabled={isDisabled}
                isError={isError}
                isSuccess={isSuccess}
                width={width}
            >
                <span className="flex items-center">
                    <span
                        className={cn('ml-3 block truncate p-xs', {
                            'text-textInputActive': showOptions || value,
                        })}
                    >
                        {value || placeholder}
                    </span>
                </span>
            </PickerButtonWrapper>

            {showOptions && (
                <PickerOptionsWrapper width={width}>
                    {options.map((option) => (
                        <SelectOption
                            key={option}
                            option={option}
                            active={value === option}
                            updateValue={updateValue}
                        />
                    ))}
                </PickerOptionsWrapper>
            )}
        </div>
    );
};

export default Dropdown;
