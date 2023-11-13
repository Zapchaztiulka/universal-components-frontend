import { FC } from "react"
import { Button } from '../../buttons'
import { CloseIcon, AlertIcon } from '../../icons'

interface ModalProps {
    isOpened?: boolean;
    header?: string;
    message?: string;
    className?: string;
}

const Modal: FC<ModalProps> = ({ message = "Залиште заявку і наш менеджер зв’яжеться з вами!", isOpened = false, header = "Швидке замовлення" }: ModalProps) => {

    if (!isOpened) {
        return null;
    }
    return (
        <div className="bg-[#2A2B30] bg-opacity-40 w-screen h-screen z-0 absolute"> 
            <div className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="w-[345px] p-[24px] flex flex-col gap-[24px] bg-bgWhite z-10">
                    <CloseIcon />
                    <AlertIcon variant="brand" />
                    <h2 className="text-heading3 text-center">{header}</h2>
                    <p className="text-center">{message}</p>
                    <Button text="Відправити" />
                </div>
            </div>
        </div>
    )
}

export default Modal;
