import { InputHTMLAttributes } from "react";
import { ValidationStatus } from "../../../types/validationStatus";
import { TooltipLocation } from "../../tooltips/universalComponents/Tooltip.types";

export enum InputTypes {
  Text = "text",
  Password = "password",
  Phone = "tel",
}
export enum InputTypesFigma {
  TextField = 'TextField',
  Password = 'Password',
  PhoneNumber = 'PhoneNumber',
  SearchField = 'SearchField',
  TextArea = 'TextArea',
  Price= 'Price',
}

export type InputProps = {
  value?: string;
  type?: InputTypes;
  inputTypesFigma?: InputTypesFigma;
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
  handleChange?: (text: string) => void;
  onMainIconClick?: () => void;
  onExtraLeftIconClick?: () => void;
  inputBoxClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
  iconBoxClassName?: string;
  phoneCodeClassName?: string;
  tooltipTextMainIcon?: string;
  tooltipClassNameMainIcon?: string;
  tooltipLocationMainIcon?: TooltipLocation;
  tooltipcontainerClassNameMainIcon?:string;
  tooltipTextExtraLeftIcon?: string;
  tooltipClassNameExtraLeftIcon?: string;
  tooltipLocationExtraLeftIcon?: TooltipLocation;
  tooltipcontainerClassNameExtraLeftIcon?:string;
} & InputHTMLAttributes<HTMLInputElement>;
