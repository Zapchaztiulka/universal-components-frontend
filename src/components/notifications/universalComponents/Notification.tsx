import { FC, useState, useEffect } from "react"
import { InfoIcon, AlertIcon, CheckCircleIcon, CloseIcon, IconButton } from "../../icons";
import theme from "../../../../presets"

interface NotificationProps {
    message?: string;
    state?: "success" | "error" | "information";
    className?: string;
    showCloseButton?: boolean;
    onClose?: () => void;
    index?: number;
    topRightCornerPosition?: boolean;
}

const Notification: FC<NotificationProps> =
    ({ message = "", state = "success", className = "", showCloseButton = false, onClose, index = 1, topRightCornerPosition }: NotificationProps) => {

        const [isShowing, setIsShowing] = useState(true);

        useEffect(() => {
            if (index > 1) {
                const notificationEl = document.getElementById(`notification-${index}`);
                const prevNotificationEl = document.getElementById(`notification-${index - 1}`);
                if (notificationEl && prevNotificationEl) {
                    const prevBottom = prevNotificationEl.getBoundingClientRect().bottom;
                    notificationEl.className += ` !bottom-[${prevBottom - 24}px]`;
                }
            }

            if (showCloseButton) return;
            const timer = setTimeout(() => setIsShowing(false), 3000);
            return () => {
                clearTimeout(timer);
            }
        }, [index, showCloseButton]);

        const bottomStyle = index == 1 ? 'bottom-[24px]' : '';
        let textColor = 'textSuccess';
        let borderColor = 'borderSuccess';
        let bgColor = 'bgSuccessLight';
        let iconColor = theme.colors.iconSuccess;
        const iconClassname = "inline-block relative";
        let icon = <CheckCircleIcon color={theme.colors.iconSuccess} className={iconClassname} />
        let desktopSizeStyle = "tablet1024:w-[600px]";
        let placementStyle = `${bottomStyle} left-[50%] -translate-x-[50%]`;
        let desktopMarginStyle = "tablet1024:-ml-xs";

        if (state == "error") {
            textColor = 'textError';
            borderColor = 'borderError';
            bgColor = 'bgErrorLight';
            iconColor = theme.colors.iconError;
            icon = <AlertIcon color={theme.colors.iconError} className={iconClassname} />
        } else if (state == "information") {
            desktopSizeStyle = "";
            desktopMarginStyle = "";
            iconColor = theme.colors.iconBrand;
            textColor = 'textBrand';
            borderColor = 'borderDefaultBlue';
            bgColor = 'bgBrandLight1';
            icon = <InfoIcon color={theme.colors.iconBrand} className={iconClassname} />
        }

        if(topRightCornerPosition) {
            placementStyle = "right-[24px] top-[24px] max-mobile375:top-auto max-mobile375:right-auto max-mobile375:bottom-[24px] max-mobile375:left-[50%] max-mobile375:-translate-x-[50%]";

        }

        return (isShowing && <div id={`notification-${index}`} className={`w-fit ${className} fixed ${placementStyle}`}>
            <div className={`inline-block w-[343px] ${desktopSizeStyle} border-1 border-${borderColor} bg-${bgColor} text-${textColor} rounded-medium px-s py-xs`}>
                <div className="grid grid-cols-12 grid-flow-col justify-items-start relative">
                    {icon}
                    <div className={`col-span-10 relative top-[3px] ml-xs3 ${desktopMarginStyle}`}>
                        <span className="capitalize">{state}: </span>
                        <span className="w-fit">{message}</span>
                    </div>
                    {showCloseButton &&
                        <IconButton className="col-span-1 justify-self-end inline-flex !w-[24px] h-[24px] items-center justify-center" onClick={onClose}><CloseIcon color={iconColor} size="16" /></IconButton>
                    }
                </div>
            </div>
        </div>)
    }

export default Notification;