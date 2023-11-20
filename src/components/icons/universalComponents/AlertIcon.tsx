import theme from "../../../../presets"

const AlertIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    variant,
    className
}: {
    color?: string;
    size?: string;
    variant?: string;
    className?: string;
}) => {

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

    const icon: React.ReactNode =
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M11.9998 9.15624V13.0146M11.9998 16.873H12.0094M10.3503 4.19819L2.18016 17.8376C2.01171 18.1294 1.92258 18.4601 1.92164 18.797C1.9207 19.1338 2.00797 19.465 2.17479 19.7577C2.3416 20.0504 2.58214 20.2942 2.87246 20.4651C3.16279 20.6359 3.49279 20.7277 3.82963 20.7314H20.17C20.5068 20.7277 20.8368 20.6359 21.1271 20.4651C21.4175 20.2942 21.658 20.0504 21.8248 19.7577C21.9916 19.465 22.0789 19.1338 22.0779 18.797C22.077 18.4601 21.9879 18.1294 21.8194 17.8376L13.6493 4.19819C13.4773 3.9147 13.2352 3.68032 12.9463 3.51765C12.6573 3.35499 12.3314 3.26953 11.9998 3.26953C11.6682 3.26953 11.3423 3.35499 11.0533 3.51765C10.7644 3.68032 10.5223 3.9147 10.3503 4.19819Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>;

    let alertIcon: React.ReactNode;
    switch (variant) {
        case "error":
            alertIcon =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgErrorLight flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgErrorDark flex place-content-center items-center">
                        {icon}
                    </div>
                </div>;
            break;
        case "warning":
            alertIcon =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgWarningLight flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgWarningDark flex place-content-center items-center">
                        {icon}
                    </div>
                </div>;
            break;
        case "success":
            alertIcon =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgSuccessLight flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgSuccessDark flex place-content-center items-center">
                        {icon}
                    </div> 
                </div>;
            break;
        case "brand":
            alertIcon =
                <div className={`w-[59px] h-[59px] rounded-large2 bg-bgBrandLight1 flex place-content-center items-center ${className}`}>
                    <div className="w-[40px] h-[40px] rounded-large2 bg-bgBrandLight2 flex place-content-center items-center">
                        {icon}
                    </div>
                </div>;
            break;
        default:
            alertIcon = icon;
    }

    return (
        <>
            {alertIcon}
        </>
    );
};

export default AlertIcon;