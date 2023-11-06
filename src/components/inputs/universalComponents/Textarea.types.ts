import { TextareaHTMLAttributes } from "react";
import { ValidationStatus } from "../../../types/validationStatus";

export type TextareaProps = {
  value: string;
  placeholder?: string;
  label?: string;
  asterisk?: boolean;
  status?: ValidationStatus;
  disabled?: boolean;
  maxLength?: number;
  rows?: number;
  cols?: number;
  lettersCounter?: boolean;
  handleChange: (text: string) => void;
  textareaBoxClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  lettersCounterClassName?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
