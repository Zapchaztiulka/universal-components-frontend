import theme from "../../../../presets"
import { cloneElement } from 'react'

export type Props = {
    children?: JSX.Element;
    variant?: string;
    className?: string;
};

const IconWithBg = ({
    children,
    variant = "brand",
    className
}: Props) => {

    let color = theme.colors.iconPrimary;

    switch (variant) {
        case "error":
            color = theme.colors.iconError;
            break;
        case "warning":
            color = theme.colors.iconWarning;
            break;
        case "success":
            color = theme.colors.iconSuccess;
            break;
        case "brand":
            color = theme.colors.iconBrand;
            break;
    }

    const icon = cloneElement(children as React.ReactElement<any>, {
        color: color
    });

    let iconWithBg: React.ReactNode;
    switch (variant) {
        case "error":
            iconWithBg =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgErrorLight flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgErrorDark flex place-content-center items-center">
                        {icon}
                    </div>
                </div>;
            break;
        case "warning":
            iconWithBg =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgWarningLight flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgWarningDark flex place-content-center items-center">
                        {icon}
                    </div>
                </div>;
            break;
        case "success":
            iconWithBg =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgSuccessLight flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgSuccessDark flex place-content-center items-center">
                        {icon}
                    </div> 
                </div>;
            break;
        case "brand":
            iconWithBg =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgBrandLight1 flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgBrandLight2 flex place-content-center items-center">
                        {icon}
                    </div>
                </div>;
            break;
        default:
            iconWithBg = icon;
    }

    return (
        <>
            {iconWithBg}
        </>
    );
};

export default IconWithBg;