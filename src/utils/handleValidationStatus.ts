import { ValidationStatus } from "../types/validationStatus"

export const handleStatus = ({
    status,
    error,
    success
}:{
status:ValidationStatus | undefined;
error?:string;
success?:string
}):string => {
    if(status) {
        if(error && status === ValidationStatus.error) {
            return error;
        }

        if(success && status === ValidationStatus.success) {
            return success;
        }
        return "";
    } else {
        return "";
    }
}