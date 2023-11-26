import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { ValidationStatus } from "../../../types/validationStatus";
import { handleStatus } from "../../../utils/handleValidationStatus";
import { InputProps, InputTypesFigma } from "./Input.types";
import Tooltip from "../../tooltips/universalComponents/Tooltip";

const Input = ({
  value,
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
  phoneCode,
  maxLength,
  handleChange,
  onMainIconClick,
  onExtraLeftIconClick,
  inputBoxClassName,
  labelClassName,
  inputClassName,
  messageClassName,
  iconBoxClassName,
  phoneCodeClassName,
  tooltipTextMainIcon,
  tooltipClassNameMainIcon,
  tooltipLocationMainIcon,
  tooltipСontainerClassNameMainIcon,
  tooltipTextExtraLeftIcon,
  tooltipClassNameExtraLeftIcon,
  tooltipLocationExtraLeftIcon,
  tooltipСontainerClassNameExtraLeftIcon,
  tooltipWrapContainerRef,
  ...rest
}: InputProps) => {

  const [isInputActive, setInputActive] = useState(false);
  const index = useRef(`input-${nanoid()}`);
 
  const onChangeHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    handleChange && handleChange(e.currentTarget.value);
  };

  const changeInputState = () => {
    if (isInputActive) return;
    setInputActive(true);
    
}
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
          onFocus={changeInputState}
          disabled={disabled}
          maxLength={maxLength}
          className={`        
        block w-[100%] ${(inputTypesFigma === InputTypesFigma.Price) ? "w-[115px]" : ''}
        p-xs border-1 border-solid rounded-minimal bg-bgWhite outline-0 text-[16px] text-textInputActive font-400 leading-[1.5]
        hover:bg-bgHoverGrey disabled:bg-bgDisable disabled:border-borderDisabled
        disabled:text-textDisabled placeholder:hover:text-textInputActive placeholder:focus:text-textInputActive placeholder:disabled:text-textDisabled 
       
        ${(inputTypesFigma === InputTypesFigma.SearchField) ? "rounded-tr-zero rounded-br-zero" : ''}
        ${(inputTypesFigma === InputTypesFigma.Password && mainIcon) ? "pr-l2" : ''}
        ${(inputTypesFigma === InputTypesFigma.TextField && mainIcon && !extraLeftIcon) ? "pr-xl" : ''}
        ${(inputTypesFigma === InputTypesFigma.TextField &&  mainIcon && extraLeftIcon) ? "pr-[80px]" : ''}
        ${(inputTypesFigma === InputTypesFigma.PhoneNumber) ? "pl-[63px]" : ''}

        ${handleStatus({
          status,
          error: "border-borderError",
          success: "border-borderSuccess",
          defaultBorder: "focus:border-borderActive",
        })}
    ${inputClassName ? inputClassName : ""}
                `}
          {...rest}
        />
        
        {inputTypesFigma === InputTypesFigma.PhoneNumber && (
          <span aria-disabled={disabled}
          className={`absolute bottom-xs left-xs leading-[1.5] ${isInputActive ? "text-textInputActive" : "text-textInputDefault"} 
        aria-disabled:text-textDisabled after:content-[''] after:absolute after:w-[1px] after:left-[41px] after:top-[-4px] after-block after:h-[28px]
        after:aria-disabled:bg-textDisabled ${isInputActive ? "after:bg-textInputActive": "after:bg-textInputDefault"} 
          ${phoneCodeClassName ? phoneCodeClassName : ''}`}>{phoneCode}</span>
)}
        {(extraLeftIcon || mainIcon) && (
          <div
            className={`absolute flex gap-xs2
 ${inputTypesFigma === InputTypesFigma.TextField ? "bottom-xs right-xs" : "" }
            ${inputTypesFigma === InputTypesFigma.Password ? "bottom-s right-s" : ""}
            ${iconBoxClassName ? iconBoxClassName : ""}`}
          >
            {extraLeftIcon && (
              <Tooltip wrapContainerRef={tooltipWrapContainerRef} tooltipLocationProps={tooltipLocationExtraLeftIcon} tooltipClassName={tooltipClassNameExtraLeftIcon} textTooltip={tooltipTextExtraLeftIcon} containerClassName={tooltipСontainerClassNameExtraLeftIcon}>
              <button tabIndex={tooltipTextExtraLeftIcon ? -1 : 0} disabled={disabled} type="button" onClick={onExtraLeftIconClick}>
                {extraLeftIcon}
                </button>
                </Tooltip>
            )}
            {mainIcon && (
              <Tooltip wrapContainerRef={tooltipWrapContainerRef} tooltipLocationProps={tooltipLocationMainIcon} tooltipClassName={tooltipClassNameMainIcon} textTooltip={tooltipTextMainIcon} containerClassName={tooltipСontainerClassNameMainIcon}>
              <button  tabIndex={tooltipTextMainIcon ? -1 : 0} disabled={disabled} type="button" onClick={onMainIconClick}>
                {mainIcon}
                </button>
                </Tooltip>
            )}
          </div>
        )}
      </div>

          {message && (
        <p aria-disabled={disabled}
          className={`mt-xs3  text-[14px] font-400 leading-[1.4] aria-disabled:text-textDisabled
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
