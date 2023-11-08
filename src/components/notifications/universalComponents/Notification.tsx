import { FC } from "react"
import { InfoIcon } from "../../icons";
import theme from "../../../../presets"

export enum Sizes {
    Small = "small",
    Big = "big",
}

export enum States {
    Success = "success",
    Error = "error",
}

interface NotificationProps {
    message?: string;
    state?: States;
    size?: Sizes;
    className?: string;
}

const Notification: FC<NotificationProps> =
    ({ message = "", state = States.Success, size = Sizes.Big, className = "" }: NotificationProps) => {

        let sizeStyle = "w-[600px]";
        let textColor = 'textSuccess';
        let borderColor = `border-borderSuccess`;
        let bgColor = 'bgSuccessLight';
        let iconColor = theme.colors.iconSuccess;

        if (size == Sizes.Small) {
            sizeStyle = "w-[343px]"
        }
        if (state == States.Error) {
            textColor = 'textError';
            borderColor = `border-borderError`;
            bgColor = 'bgErrorLight';
            iconColor = theme.colors.iconError;
        }

        return (
            <div className={`w-fit ${className} fixed bottom-[24px] left-[50%] -translate-x-[50%]`}>
                <div className={`inline-block ${sizeStyle} border-1 ${borderColor} bg-${bgColor} text-${textColor} rounded-medium px-[16px] py-[12px]`}>
                    <InfoIcon color={iconColor} className="inline-block mr-[3px]" />
                    <p className="inline-block relative -bottom-[2px]">
                        <span className="capitalize">{state}: </span>
                        <span>{message}</span>
                    </p>
                </div>
            </div>
        )
    }

export default Notification;