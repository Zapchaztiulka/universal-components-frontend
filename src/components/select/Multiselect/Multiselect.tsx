import { FC, useState } from 'react';
import cn from 'clsx';
import { SelectOption } from '../SelectOption';
import PickerButtonWrapper from '../Wrapper/PickerButtonWrapper';
import { useCallback } from 'react';
import PickerOptionsWrapper from '../Wrapper/PickerOptionsWrapper';

type MultiselectProps = {
    name?: string;
    placeholder?: string;
    className?: string;
    options?: string[];
    chosenOption?: string[];
    isError?: boolean;
    isSuccess?: boolean;
    isDisabled?: boolean;
    width?: number;
    onChange: (value: string[]) => void;
};
const Multiselect: FC<MultiselectProps> = ({
    name = 'customSelect',
    placeholder = 'Оберіть значення...',
    className = '',
    options = [],
    chosenOption = [],
    isDisabled = false,
    isSuccess = false,
    isError = false,
    width = 343,
    onChange,
}) => {
    const [value, setValue] = useState<string[]>(chosenOption);
    const [showOptions, setShowOptions] = useState(false);

    const handleOpenPicker = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setShowOptions(!showOptions);
        },
        [showOptions],
    );

    const updateValue = (id: string) => {
        let newValue;
        if (value.includes(id)) {
            newValue = value.filter((item) => item !== id);
        } else {
            newValue = [...value, id];
        }
        setShowOptions(false);
        setValue(newValue);
        onChange(newValue);
    };

    const optionPlaceholder = () => {
        const len = value.length;
        if (len == 0) {
            return placeholder;
        } else if (len < 3) {
            return options.filter((_, i) => value.includes(String(i))).join('; ');
        } else {
            return `Обрано ${len} елементи`;
        }
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
                        className={cn('ml-3 block truncate flex gap-xs3 p-xs hover:text-textInputActive', {
                            'text-textInputActive': showOptions || value.length,
                        })}
                    >
                        {optionPlaceholder()}
                    </span>
                </span>
            </PickerButtonWrapper>

            {showOptions && (
                <PickerOptionsWrapper width={width}>
                    {options.map((option, index) => (
                        <SelectOption
                            key={index}
                            value={String(index)}
                            option={option}
                            multiple={true}
                            active={value.includes(String(index))}
                            updateValue={updateValue}
                        />
                    ))}
                </PickerOptionsWrapper>
            )}
        </div>
    );
};

export default Multiselect;
