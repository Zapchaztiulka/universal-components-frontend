import { FC } from "react"
import { CloseIcon, IconWithBg, IconButton, AlertIcon } from '../../icons'

type ModalProps = {
    type?: "success" | "neutral" | "negative" | "warning";
    isOpen?: boolean;
    title?: string;
    description?: string;
    className?: string;
    icon?: React.ReactElement;
    showCloseButton?: boolean;
    onClose?: () => void;
    children?: React.ReactElement | React.ReactElement[];
}

const Modal: FC<ModalProps> = (props: ModalProps) => {

    const { type, title, description, isOpen = false, icon = <AlertIcon/>, className, showCloseButton = true, onClose, children } = props;

    if (!isOpen) {
        return null;
    }

    let variant = type?.toString();
    if (type == "neutral") {
        variant = "brand";
    } else if (type == "negative" ) {
        variant = "error";
    } 

    return (
        <div className="bg-[#2A2B30] bg-opacity-40 w-[100vw] h-[100vh] z-0 fixed top-[0px]">
            <div className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className={`w-[345px] max-mobile320:w-[288px] tablet1024:w-[680px] p-m flex flex-col items-center bg-bgWhite z-10 ${className}`}>
                    {showCloseButton && <IconButton className="self-end !w-[44px] h-[44px] flex items-center justify-center" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>}
                    <IconWithBg variant={variant} className="self-center mb-s">
                        {icon}
                    </IconWithBg>
                    <h2 className="text-heading3 text-center mb-xs">{title}</h2>
                    <p className="text-center mb-m">{description}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;