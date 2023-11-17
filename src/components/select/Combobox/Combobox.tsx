import { FC, useState, useRef, useCallback, useEffect } from 'react';

import cn from 'clsx';
import { SelectOption } from './../SelectOption';
import PickerWrapper from '../Wrapper/PickerWrapper';
import PickerButtonWrapper from '../Wrapper/PickerButtonWrapper';
import PickerOptionsWrapper from '../Wrapper/PickerOptionsWrapper';

type ComboboxProps = {
    name?: string;
    label?: string;
    placeholder?: string;
    choosedOption?: string;
    options?: string[];
    isRequired?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    isDisabled?: boolean;
    onChange: (value: string) => void;
};

const Combobox: FC<ComboboxProps> = ({
    name = 'customSelect',
    label = '',
    choosedOption = '',
    placeholder = 'Оберіть значення...',
    options = [],
    isRequired = false,
    isDisabled = false,
    isSuccess = false,
    isError = false,
    onChange,
}) => {
    const [value, setValue] = useState(choosedOption);
    const [showOptions, setShowOptions] = useState(false);
    const [search, setSearch] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpenPicker = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowOptions(!showOptions);
    };

    const handleSelectOption = useCallback(
        (val: string) => {
            setShowOptions(false);
            setValue(val);
            onChange(val);
        },
        [onChange],
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setSearch(target.value);
    };

    useEffect(() => {
        showOptions && inputRef.current && inputRef.current.focus();
    }, [showOptions]);

    const filteredOptions = options.filter((option) => option.includes(search));

    return (
        <PickerWrapper
            label={label}
            isRequired={isRequired}
        >
            <PickerButtonWrapper
                onClick={handleOpenPicker}
                isOpen={showOptions}
                isDisabled={isDisabled}
                isError={isError}
                isSuccess={isSuccess}
            >
                {showOptions ? (
                    <input
                        type="text"
                        name={name}
                        placeholder={placeholder}
                        onChange={handleSearch}
                        value={search}
                        ref={inputRef}
                        className="w-full bg-bgWhite p-xs text-left outline-none"
                    />
                ) : (
                    <span className="flex items-center">
                        <span
                            className={cn('ml-3 block truncate p-xs', {
                                'text-textInputActive': showOptions || value,
                            })}
                        >
                            {value || placeholder}
                        </span>
                    </span>
                )}
            </PickerButtonWrapper>

            {showOptions && (
                <PickerOptionsWrapper>
                    {filteredOptions.map((option, idx) => (
                        <SelectOption
                            key={idx}
                            option={option}
                            active={value === option}
                            updateValue={handleSelectOption}
                        />
                    ))}
                </PickerOptionsWrapper>
            )}
        </PickerWrapper>
    );
};

export default Combobox;
