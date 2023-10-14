import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const DestructiveBtn = ({
    text,
    to,
    disabled,
    // pressed,
    onClick,
    buttonStyle
}:{
    text?:string;
    to?:string;
    disabled?:boolean;
    pressed?:boolean;
    onClick?:()=>void;
    buttonStyle?:string;
    }):ReactElement => {

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
            className={`font-sans font-semibold  p-xs w-[150px] flex justify-center gap-xs2
                text-textContrast  bg-bgDefaultDestructive
                hover:bg-bgHoverDestructive focus:outline-none 
                focus:drop-shadow-focusButton rounded-medium transition-colors duration-300

                disabled:text-textDisabled disabled:bg-bgDisable disabled:border disabled:border-solid
                disabled:border-borderDisabled disabled:rounded-medium disabled:cursor-not-allowed
                ${buttonStyle}`}
            onClick={handleButtonClick}
            disabled={disabled}
        >
        {text}
        </button>
    )
}

export default DestructiveBtn;