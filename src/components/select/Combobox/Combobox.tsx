import { FC, useState, useRef, useCallback, useEffect } from 'react';

import cn from 'clsx';
import { SelectOption } from './../SelectOption';
import PickerButtonWrapper from '../Wrapper/PickerButtonWrapper';
import PickerOptionsWrapper from '../Wrapper/PickerOptionsWrapper';
import EmptyState from './EmptyState/EmptyState';

type ComboboxProps = {
    name?: string;
    placeholder?: string;
    chosenOption?: string;
    options?: string[];
    isError?: boolean;
    isSuccess?: boolean;
    isDisabled?: boolean;
    width?: number;
    onChange: (value: string) => void;
    onCreate?: (newOption: string) => void;
};

const Combobox: FC<ComboboxProps> = ({
    name = 'customSelect',
    chosenOption = '',
    placeholder = 'Оберіть значення...',
    options = [],
    isDisabled = false,
    isSuccess = false,
    isError = false,
    width = 343,
    onChange,
    onCreate,
}) => {
    const [value, setValue] = useState(chosenOption);
    const [showOptions, setShowOptions] = useState(false);
    const [search, setSearch] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpenPicker = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setShowOptions(!showOptions);
        },
        [showOptions],
    );

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
        
        <div className="relative transition transition-all duration-500 leading-6">
            <PickerButtonWrapper
                onClick={handleOpenPicker}
                isOpen={showOptions}
                isDisabled={isDisabled}
                isError={isError}
                isSuccess={isSuccess}
                width={width}
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
                <PickerOptionsWrapper width={width}>
                    {filteredOptions.map((option) => (
                        <SelectOption
                            key={option}
                            option={option}
                            active={value === option}
                            updateValue={handleSelectOption}
                        />
                    ))}
                    {!filteredOptions.length && (
                        <EmptyState
                            search={search}
                            onCreate={onCreate}
                        />
                    )}
                </PickerOptionsWrapper>
            )}
        </div>
    );
};

export default Combobox;
