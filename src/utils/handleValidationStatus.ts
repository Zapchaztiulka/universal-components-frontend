import { ValidationStatus } from "../types/validationStatus";

export const handleStatus = ({
  status,
  error,
    success,
  defaultBorder,
}: 
{
  status: ValidationStatus | undefined;
  error?: string;
        success?: string;
        defaultBorder: string;
}): string => {
  if (status) {
    if (error && status === ValidationStatus.error) {
      return error;
    }

    if (success && status === ValidationStatus.success) {
      return success;
    }
    return defaultBorder;
  } else {
    return defaultBorder;
  }
};
