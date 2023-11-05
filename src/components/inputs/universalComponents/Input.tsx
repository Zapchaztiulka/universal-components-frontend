import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import { ValidationStatus } from "../../../types/validationStatus";
import { handleStatus } from "../../../utils/handleValidationStatus";
import { InputProps, InputTypesFigma } from "./Input.types";

const Input = ({
  inputTypesFigma,
  type,
  placeholder,
  label,
  asterisk,
  message,
  status,
  disabled,
  mainIcon,
  extraLeftIcon,
  handleChange,
  onMainIconClick,
  onExtraLeftIconClick,
  inputBoxClassName,
  labelClassName,
  inputClassName,
  messageClassName,
  iconBoxClassName,
}: InputProps) => {
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
          type={type}
          value={value}
          onChange={onChangeHandler}
          disabled={disabled}
          className={`        
        w-[100%] block p-xs bg-bgWhite outline-0 text-[16px] font-400 leading-[1.5]
        border-1 border-solid rounded-minimal
        hover:bg-bgHoverGrey disabled:bg-bgDisable disabled:border-borderDisabled
        disabled:text-textDisabled group 
        ${inputTypesFigma === InputTypesFigma.Password && mainIcon && "pr-l2"}
        ${inputTypesFigma === InputTypesFigma.TextField && mainIcon && !extraLeftIcon && "pr-xl"}
        ${inputTypesFigma === InputTypesFigma.TextField && (mainIcon && extraLeftIcon) && "pr-[80px]"}
       
        ${handleStatus({
          status,
          error: "border-borderError",
          success: "border-borderSuccess",
          defaultBorder: "focus:border-borderActive",
        })}
    ${inputClassName ? inputClassName : ""}
                `}
        />
        {(extraLeftIcon || mainIcon) && (
          <div
            className={`absolute flex gap-xs2
            ${inputTypesFigma === InputTypesFigma.TextField ? 'bottom-xs right-xs' : ''}
            ${inputTypesFigma === InputTypesFigma.Password ? 'bottom-s right-s' : ''}
            ${iconBoxClassName ? iconBoxClassName : ""}`}
          >
            {extraLeftIcon && (
              <button
                disabled={disabled}
                type="button"
                onClick={onExtraLeftIconClick}
              >
                {extraLeftIcon}
              </button>
            )}
            {mainIcon && (
              <button
                disabled={disabled}
                type="button"
                onClick={onMainIconClick}
              >
                {mainIcon}
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
                    ${
                      (status === ValidationStatus.error && "text-textError") ||
                      (status === ValidationStatus.success &&
                        "text-textSuccess") ||
                      "text-textInputDefault"
                    }
           
                    ${messageClassName ? messageClassName : ""}
                `}
        >
          {message}
        </p>
      )}
    </>
  );
};
export default Input;
