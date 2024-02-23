import { FC } from "react"
import { CloseIcon, IconWithBg, IconButton, AlertIcon } from '../../icons'
import { createPortal } from 'react-dom';

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
    zIndex?: number;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {

    const { type, title, description, zIndex = 0, isOpen = false, icon = <AlertIcon />, className, showCloseButton = true, onClose, children } = props;

    const root = document.getElementById('root') ?? document.body;

    if (!isOpen) {
        return null;
    }

    let variant = type?.toString();
    if (type == "neutral") {
        variant = "brand";
    } else if (type == "negative") {
        variant = "error";
    }

    return (
        createPortal(
            <div className={`z-${zIndex} bg-[#2A2B30] bg-opacity-40 w-[100vw] h-[100vh]  fixed top-[0px]`}>
                <div className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <div className={`w-[345px] max-mobile320:w-[288px] tablet1024:w-[680px] p-m flex flex-col items-center bg-bgWhite ${className} z-${zIndex+10}`}>
                        {showCloseButton && <IconButton className="self-end !w-[44px] h-[44px] flex items-center justify-center cursor-pointer" onClick={onClose} >
                            <CloseIcon />
                        </IconButton>}
                        <IconWithBg variant={variant} className="self-center mb-s tablet1024:mb-xs">
                            {icon}
                        </IconWithBg>
                        <h2 className="text-center text-heading3 mb-xs tablet1024:text-heading2 tablet1024:mb-2xs !leading-[1.2]">{title}</h2>
                        <p className="text-center text-mobileBody tablet1024:text-body mb-m !leading-[1.4] tablet1024:!leading-6">{description}</p>
                        {children}
                    </div>
                </div>
            </div>, root)
    )
}

export default Modal;