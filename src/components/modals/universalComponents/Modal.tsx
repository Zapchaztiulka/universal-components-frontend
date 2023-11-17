import { FC } from "react"
import { Button } from '../../buttons'
import { CloseIcon, IconWithBg, LightningIcon } from '../../icons'

interface ModalProps {
    isOpen?: boolean;
    header?: string;
    message?: string;
    className?: string;
    showClose?: boolean;
}

const Modal: FC<ModalProps> = ({ message = "Залиште заявку і наш менеджер зв’яжеться з вами!", isOpen = true, header = "Швидке замовлення" }: ModalProps) => {

    if (!isOpen) {
        return (<h2>no modal</h2>);
    }
    return (
        <div className="bg-[#2A2B30] bg-opacity-40 w-screen h-screen z-0 absolute"> 
            <div className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="w-[345px] p-[24px] flex flex-col gap-[24px] align-content-center bg-bgWhite z-10">
                    <CloseIcon className="self-end" />
                    <IconWithBg variant="brand" className="self-center"><LightningIcon /></IconWithBg>
                    <h2 className="text-heading3 text-center">{header}</h2>
                    <p className="text-center">{message}</p>
                    <Button text="Відправити" />
                </div>
            </div>
        </div>
    )
}
// 680px
export default Modal;
