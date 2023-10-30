import theme from "../../../../../presets"

const UserImageIcon = ({
    color = theme.colors.iconBrand,
    size = "36",
    text = "",
    imgSrc = "",
}: {
    color?: string;
    size?: string;
    text?: string;
    imgSrc?: string;
}) => {

    let icon: React.ReactNode;

    if (imgSrc != "") {
        icon = <>
            <defs>
                <clipPath id="circle">
                    <circle cx="18" cy="18" r="18" />
                </clipPath>
            </defs>
            <image href={imgSrc} width={size} height={size} clipPath="url(#circle)" />
        </>
    }
    else if (text?.length == 2) {
        icon = <>
            <circle cx="18" cy="18" r="18" fill={theme.colors.bgBrandLight2} />
            <text className="uppercase font-500" x={9} y={22}  fill={theme.colors.textBrand} fontSize={14} >{text}
            </text>
        </>
    } else {
        icon = <>
            <circle cx="18" cy="18" r="18" fill={theme.colors.bgBrandLight2} />
            <path d="M22.2143 12.7778C22.2143 14.8642 20.5513 16.5556 18.5 16.5556C16.4487 16.5556 14.7857 14.8642 14.7857 12.7778C14.7857 10.6914 16.4487 9 18.5 9C20.5513 9 22.2143 10.6914 22.2143 12.7778Z" fill={color} />
            <path d="M18.5 19.3889C14.9101 19.3889 12 22.3488 12 26H25C25 22.3488 22.0899 19.3889 18.5 19.3889Z" fill={color} />
            <path d="M22.2143 12.7778C22.2143 14.8642 20.5513 16.5556 18.5 16.5556C16.4487 16.5556 14.7857 14.8642 14.7857 12.7778C14.7857 10.6914 16.4487 9 18.5 9C20.5513 9 22.2143 10.6914 22.2143 12.7778Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 19.3889C14.9101 19.3889 12 22.3488 12 26H25C25 22.3488 22.0899 19.3889 18.5 19.3889Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>;
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 36 36" fill="none">
            {icon}
        </svg>
    );
};

export default UserImageIcon;