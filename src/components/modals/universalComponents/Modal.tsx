import { FC } from "react"
import { Button } from '../../buttons'
import { CloseIcon, IconWithBg, IconButton } from '../../icons'
import { Input } from '../../inputs'
import { InputTypes, InputTypesFigma } from "../../inputs/universalComponents/Input.types";

interface ModalProps {
    type?: string;
    isOpen?: boolean;
    header?: string;
    message?: string;
    className?: string;
    showClose?: boolean;
    onClose?: () => void;
    icon?: React.ReactElement;
}

const Modal: FC<ModalProps> = ({ message = "Залиште заявку і наш менеджер зв’яжеться з вами!", isOpen = false, header = "Швидке замовлення", icon, showClose = true, onClose, type = "neutral" }: ModalProps) => {

    if (!isOpen) {
        return (<h2>no modal</h2>);
    }

    let variant = "brand";
    if(type == "success") {
        variant = "success";
    } else if (type == "negative" || type == "destructive"){
        variant = "error";
    }

    return (
        <div className="bg-[#2A2B30] bg-opacity-40 w-[100dvw] h-[100dvh] z-0 fixed top-[0px]">
            <div className="fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="w-[345px] max-mobile320:w-[288px] tablet1024:w-[680px] p-[24px] flex flex-col gap-[24px] items-center bg-bgWhite z-10">
                    {showClose && <IconButton className="self-end" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>}
                    <IconWithBg variant={variant} className="self-center -mt-m">
                        {icon}
                    </IconWithBg>
                    <h2 className="text-heading3 text-center -mt-[8px]">{header}</h2>
                    <p className="text-center -mt-[12px]">{message}</p>
                    {type=="negative" &&  <Input type={InputTypes.Text} phoneCode="+38" inputTypesFigma={InputTypesFigma.TextField}
                        label="Електронна пошта" labelClassName="-mb-m" inputClassName="w-[313px] tablet1024:w-[404px]" /> }
                    <Input type={InputTypes.Phone} phoneCode="+38" inputTypesFigma={InputTypesFigma.PhoneNumber}
                        label="Номер телефону" labelClassName="-mb-m" inputClassName="w-[313px] tablet1024:w-[404px]" message="info" />
                    <Button text="Відправити" className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
                </div>
            </div>
        </div>
    )
}

export default Modal;
