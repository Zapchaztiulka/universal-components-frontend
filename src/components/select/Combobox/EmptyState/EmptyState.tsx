import React, { FC } from 'react';
import { PlusIcon } from '../../../icons';

type EmptyStateProps = {
    search: string;
    onCreate?: (newOption: string) => void;
};

const EmptyState: FC<EmptyStateProps> = ({ search, onCreate }) => {
    if (onCreate) {
        const handleClick = () => onCreate(search);

        return (
            <div
                onClick={handleClick}
                className="w-full cursor-default select-none relative p-xs  flex gap-xs2  hover:bg-bgHoverGrey active:bg-bgPressedGrey focus:border-2 focus:border-borderActive"
            >
                <div className="flex items-center">
                    <span className="ml-3 block font-normal truncate">Створити новий</span>
                </div>
                <span className="absolute right-[12px] top-[12px] flex items-center">
                    <PlusIcon />
                </span>
            </div>
        );
    }
    return (
        <div className="w-full cursor-default select-none relative p-xs  flex gap-xs2  hover:bg-bgHoverGrey active:bg-bgPressedGrey focus:border-2 focus:border-borderActive">
            Відсутні відповідності
        </div>
    );
};
export default EmptyState;
