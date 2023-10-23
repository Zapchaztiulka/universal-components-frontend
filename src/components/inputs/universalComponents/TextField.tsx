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
  iconRight,
  iconLeft,
  handleChange,
  onRightIconClick,
  onLeftIconClick,
  labelClassName,
  inputClassName,
  messageClassName,
  inputBoxClassName,
  iconBoxClassName,
}: {
  placeholder?: string;
  label?: string;
  asterisk?: boolean;
  labelWithIcon?: boolean;
  message?: string;
  status?: ValidationStatus;
  disabled?: boolean;
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  handleChange?: (text: string) => void;
  onRightIconClick?: () => void;
  onLeftIconClick?: () => void;
  labelClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
  inputBoxClassName?: string;
  iconBoxClassName?: string;
}) => {
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
      <div className={`relative ${inputBoxClassName ? inputBoxClassName : ""}`}>
        <input
          id={index.current}
          placeholder={placeholder}
          value={value}
          onChange={onChangeHandler}
          disabled={disabled}
          className={` button
                    block p-xs  bg-bgWhite 
                    text-[16px] font-400 leading-[1.5]
                    border-1 border-solid rounded-minimal
                    hover:bg-bgHoverGrey
                    disabled:bg-bgDisable disabled:border-borderDisabled
                    disabled:text-textDisabled 
                    outline-0
                    
                    ${handleStatus({
                      status,
                      error: "border-borderError",
                      success: "border-borderSuccess",
                    })}
                    ${inputClassName ? inputClassName : ""}
                `}
        />

        {(iconLeft || iconRight) && (
          <div
            className={`absolute bottom-xs right-xs flex gap-xs2 ${
              iconBoxClassName ? iconBoxClassName : ""
            }`}
          >
            {iconLeft && (
              <button type="button" onClick={onLeftIconClick}>
                {iconLeft}
              </button>
            )}
            {iconRight && (
              <button type="button" onClick={onRightIconClick}>
                {iconRight}
              </button>
            )}
          </div>
        )}
      </div>

      {message && (
        <p
          aria-disabled={disabled}
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
