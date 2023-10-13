import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const DestructiveBtn = ({
    children,
    to,
    disabled,
    // pressed,
    onClick,
    buttonStyle
}:{
    children?:ReactElement | string;
    to?:string;
    disabled?:boolean;
    pressed?:boolean;
    onClick?:()=>void;
    buttonStyle?:string;
    }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (onClick) {
        onClick();
        }
        if(to) {
            navigate(to);
        }
    };

    return (
        <button
            className={`font-sans font-semibold px-l py-xs text-base leading-6 tracking-button
                text-textColors-contrast  bg-bgColors-defaultDestructive
                hover:bg-bgColors-hoverDestructive focus:outline-none 
                focus:drop-shadow-focusButton rounded-medium transition-colors duration-300

                disabled:text-textColors-disabled disabled:bg-bgColors-disable disabled:border disabled:border-solid
                disabled:border-borderColors-disabled disabled:rounded-medium disabled:cursor-not-allowed
                ${buttonStyle}`}
            onClick={handleButtonClick}
            disabled={disabled}
        >
        {children}
        </button>
    )
}

export default DestructiveBtn;