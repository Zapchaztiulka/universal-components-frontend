import { FC, ReactElement } from 'react';
import { CheckIcon } from '../../icons';
import cn from 'clsx';

type SelectOptionProps = {
    option: string;
    active?: boolean;
    multiple?: boolean;
    updateValue: (id: string) => void;
    icon?: ReactElement;
};

const SelectOption: FC<SelectOptionProps> = ({ option, active = false, multiple = false, updateValue, icon }) => {
    const handleChange = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        updateValue(option);
    };

    if (!icon) icon = <CheckIcon />;

    return (
        <li
            className={cn(
                'w-full cursor-default select-none relative p-xs  flex gap-xs2  hover:bg-bgHoverGrey active:bg-bgPressedGrey focus:border-2 focus:border-borderActive',
                { 'bg-bgGreyLigth': active },
            )}
            onClick={handleChange}
        >
            {multiple ? (
                <input
                    type="checkbox"
                    checked={active}
                />
            ) : (
                active && <span className="absolute right-[12px] top-[12px] flex items-center">{icon}</span>
            )}
            <div className="flex items-center">
                <span className="ml-3 block font-normal truncate">{option}</span>
            </div>
        </li>
    );
};

export default SelectOption;
