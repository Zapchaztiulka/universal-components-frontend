import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { ValidationStatus } from "../../../types/validationStatus";
import { handleStatus } from "../../../utils/handleValidationStatus";
import { TextareaProps } from "./Textarea.types";

const Textarea = ({
  value,
  placeholder,
  label,
  asterisk,
  status,
  disabled,
  maxLength,
  rows=4,
  cols,
  lettersCounter,
  handleChange,
  labelClassName,
  textareaClassName,
  lettersCounterClassName,
  ...rest
}: TextareaProps) => {

  const index = useRef(`textarea-${nanoid()}`);
 
  const onChangeHandler = async (e: React.FormEvent<HTMLTextAreaElement>) => {
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
        <textarea id={index.current}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
           disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          cols={cols}
          className={`        
         w-[100%] block py-s px-xs bg-bgWhite outline-0 text-[16px] text-textInputActive font-400 leading-[1.5]
        border-1 border-solid rounded-minimal resize-none
        hover:bg-bgHoverGrey disabled:bg-bgDisable disabled:border-borderDisabled
        disabled:text-textDisabled placeholder:hover:text-textInputActive placeholder:focus:text-textInputActive placeholder:disabled:text-textDisabled 
  
        ${handleStatus({
          status,
          error: "border-borderError",
          success: "border-borderSuccess",
          defaultBorder: "focus:border-borderActive",
        })}
    ${textareaClassName ? textareaClassName : ""}
                `}
          {...rest} 
        ></textarea>
       
      {lettersCounter && (
        <p
          aria-disabled={disabled}
          className={`mt-xs3  text-[14px] text-right font-400 leading-[1.4] aria-disabled:text-textDisabled
                    ${
                      (status === ValidationStatus.error && "text-textError") ||
                      (status === ValidationStatus.success &&
                        "text-textSuccess") ||
                      "text-textInputDefault"
                    }
                    ${lettersCounterClassName ? lettersCounterClassName : ""}
                `}
        >
          {value.length }/{maxLength}
        </p>
      )}
    </>
  );
};
export default Textarea;
