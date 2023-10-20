import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import { ValidationStatus } from "../../../types/validationStatus";
import { handleStatus } from "../../../utils/handleValidationStatus";

const TextField = ({
  placeholder,
  label,
  asterisk,
  message,
  status,
  disabled,
  handleChange,
  labelClassName,
  inputClassName,
  messageClassName,
}: {
  placeholder?: string;
  label?: string;
  asterisk?: boolean;
  labelWithIcon?: boolean;
  message?: string;
  status?: ValidationStatus;
  disabled?: boolean;
  handleChange?: (text: string) => void;
  labelClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
}) => {
  console.log(disabled);
  const [value, setValue] = useState("");
  const index = useRef(`text-field-${nanoid()}`);
  const onChangeHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    handleChange && handleChange(e.currentTarget.value);
  };

  return (
    <>
      {label && (
        <label
          htmlFor={index.current}
          className={`
                    block mb-xs3 text-textSecondary text-[14px] font-400 leading-[1.4]
                    ${labelClassName ? labelClassName : ""}
                `}
        >
          {label} {asterisk && <span className="ml-xs4 text-textError">*</span>}
        </label>
      )}

      <input
        id={index.current}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        className={`
                    block p-xs bg-bgWhite outline-0
                    text-[16px] font-400 leading-[1.5]
                    border-1 border-solid rounded-minimal
                    hover:bg-bgHoverGrey
                    disabled:bg-bgDisable disabled:border-borderDisabled
                    disabled:text-textDisabled
                    ${handleStatus({
                      status,
                      error: "border-borderError",
                      success: "border-borderSuccess",
                    })}
                    ${inputClassName ? inputClassName : ""}
                `}
      />

      {message && (
              <p aria-disabled={disabled}
          className={`
                    mt-xs3  text-[14px]
                    font-400 leading-[1.4] 
                     aria-disabled:text-textDisabled
                                
                    ${messageClassName ? messageClassName : ""}
                `}
        >
          {message}
        </p>
      )}
    </>
  );
};
export default TextField;
