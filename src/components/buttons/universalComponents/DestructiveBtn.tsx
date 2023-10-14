import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Basket24 } from "../../icons";

const DestructiveBtn = ({
    text,
    to,
    disabled,
    // pressed,
    onClick,
    buttonStyle,
    withIcon = false,
}:{
    text?:string;
    to?:string;
    disabled?:boolean;
    pressed?:boolean;
    onClick?:()=>void;
    buttonStyle?:string;
    withIcon?:boolean;
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
            className={`font-sans font-semibold  p-xs w-[150px] flex justify-center items-center gap-xs2
                text-textContrast  bg-bgDefaultDestructive
                hover:bg-bgHoverDestructive focus:outline-none 
                focus:drop-shadow-focusButton rounded-medium transition-colors duration-300

                disabled:text-textDisabled disabled:bg-bgDisable disabled:border disabled:border-solid
                disabled:border-borderDisabled disabled:rounded-medium disabled:cursor-not-allowed
                ${buttonStyle}`}
            onClick={handleButtonClick}
            disabled={disabled}
        >
        {withIcon && <Basket24 color="white"/>}
        {text}
        </button>
    )
}

export default DestructiveBtn;