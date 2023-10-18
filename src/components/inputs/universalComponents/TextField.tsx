import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import { ValidationStatus } from "../../../types/validationStatus";
import { handleStatus } from "../../../utils/handleValidationStatus";

const TextField = ({
    placeholder,
    label,
    message,
    status,
    handleChange,
    labelClassName,
    inputClassName,
    messageClassName
}:{
    placeholder?:string;
    label?:string;
    labelWithIcon?:boolean;
    message?:string;
    status?: ValidationStatus;
    disabled?:boolean;
    handleChange?:(text:string)=>void;
    labelClassName?:string;
    inputClassName?:string;
    messageClassName?:string;
}) => {
    const [value, setValue] = useState("");
    const index = useRef(`text-field-${nanoid()}`)
    const onChangeHandler = async (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        handleChange && handleChange(e.currentTarget.value);
    }

    return(
        <>
            {label && <label 
                htmlFor={index.current}
                className={`
                    block
                    ${labelClassName ? labelClassName : ""}
                `}
            >
                {label}
            </label>}

            <input
                id={index.current}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                className={`
                    block p-xs
                    text-body
                    border-1 border-solid rounded-minimal
                    ${handleStatus({status, error:"border-borderError", success:"border-borderSuccess"})}
                    ${inputClassName ? inputClassName : ""}
                `}
            />

            {message && <p
                className={`
                    
                    ${messageClassName ? messageClassName : ""}
                `}
                >
                    {message}
                </p>
            }
        </>
    )
}

export default TextField;