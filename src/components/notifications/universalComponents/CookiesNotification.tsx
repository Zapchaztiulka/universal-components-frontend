import {FC} from "react"

export enum Sizes {
    Small = "small",
    Big = "big",
}

interface CookiesNotificationProps {
    size?: Sizes;
    className?: string;
}

const CookiesNotification: FC<CookiesNotificationProps> =
    ({ size = Sizes.Big, className = "" }: CookiesNotificationProps) => {

        let sizeStyle = "w-[495px]";
        if(size == Sizes.Small){
            sizeStyle = "w-[300px]"
        }

        return (
            <div className={`fixed bottom-[24px] left-[50%] -translate-x-[50%] w-fit border-1 border-bgBrandDark rounded-medium3 px-[16px] py-[12px] ${className}`}>
                <p className={`text-textPrimary ${sizeStyle}`}>Ми використовуємо cookies, аби сайт був кращим. <span className="text-textBrand">Що це?</span></p>
            </div>
        )
    }

export default CookiesNotification;