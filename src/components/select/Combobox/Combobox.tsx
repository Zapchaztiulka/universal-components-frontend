import { FC, useState, useRef, useCallback, useEffect } from 'react';

import cn from 'clsx';
import { SelectOption } from './../SelectOption';
import PickerButtonWrapper from '../Wrapper/PickerButtonWrapper';
import PickerOptionsWrapper from '../Wrapper/PickerOptionsWrapper';
import EmptyState from './EmptyState/EmptyState';

type ComboboxProps = {
    name?: string;
    label?: string;
    placeholder?: string;
    choseOption?: string;
    options?: string[];
    isError?: boolean;
    isSuccess?: boolean;
    isDisabled?: boolean;
    onChange: (value: string) => void;
    onCreate?: (newOption: string) => void;
};

const Combobox: FC<ComboboxProps> = ({
    name = 'customSelect',
    choseOption = '',
    placeholder = 'Оберіть значення...',
    options = [],
    isDisabled = false,
    isSuccess = false,
    isError = false,
    onChange,
    onCreate,
}) => {
    const [value, setValue] = useState(choseOption);
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
        <div className="relative w-[343px] transition transition-all duration-500 leading-6">
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
                    {!filteredOptions.length && <EmptyState search={search} onCreate={ onCreate} />}
                </PickerOptionsWrapper>
            )}
        </div>
    );
};

export default Combobox;
