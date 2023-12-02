import { FC } from "react"
import { Sizes } from './Notification'

interface CookiesNotificationProps {
    size?: Sizes;
    className?: string;
}

const CookiesNotification: FC<CookiesNotificationProps> =
    ({ size = Sizes.Big, className = "" }: CookiesNotificationProps) => {

        let sizeStyle = "w-[495px]";
        if (size == Sizes.Small) {
            sizeStyle = "w-[300px]"
        }

        return (
            <div className={`fixed bottom-[24px] left-[50%] -translate-x-[50%] w-fit border-1 border-bgBrandDark rounded-medium3 px-s py-xs ${className}`}>
                <p className={`text-textPrimary leading-6 ${sizeStyle}`}>Ми використовуємо cookies, аби сайт був кращим.{' '}
                    <a href='https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%BA%D0%B8' target="_blank" className="hover:text-textBrand hover:underline" ><span className="text-textBrand">Що це?</span></a>
                </p>
            </div>
        )
    }

export default CookiesNotification;