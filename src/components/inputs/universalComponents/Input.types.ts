// import { InputHTMLAttributes } from "react";
import { ValidationStatus } from "../../../types/validationStatus";

export enum InputTypes {
  Text = "text",
  Password = "password",
  Phone = "tel",
}
export enum InputTypesFigma {
  TextField,
  Password,
  PhoneNumber,
  SearchField,
  TextArea,
}

export type InputProps = {
  value: string;
  type: InputTypes;
  inputTypesFigma: InputTypesFigma;
  placeholder?: string;
  label?: string;
  asterisk?: boolean;
  message?: string;
  status?: ValidationStatus;
  disabled?: boolean;
  mainIcon?: React.ReactElement;
  extraLeftIcon?: React.ReactElement;
  phoneCode?: string;
  maxLength?: number;
  handleChange: (text: string) => void;
  onMainIconClick?: () => void;
  onExtraLeftIconClick?: () => void;
  inputBoxClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
  iconBoxClassName?: string;
};
