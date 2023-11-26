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
        block w-[100%] py-s px-xs outline-1 outline outline-borderDefault -outline-offset-1 rounded-minimal resize-none bg-bgWhite  text-[16px] text-textInputActive font-400 
        leading-[1.5] hover:bg-bgHoverGrey disabled:bg-bgDisable disabled:outline-borderDisabled disabled:text-textDisabled placeholder:hover:text-textInputActive
        placeholder:focus:text-textInputActive placeholder:disabled:text-textDisabled 
  
        ${handleStatus({
          status,
          error: "outline-borderError",
          success: "outline-borderSuccess",
          defaultBorder: "focus:outline-borderActive",
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
