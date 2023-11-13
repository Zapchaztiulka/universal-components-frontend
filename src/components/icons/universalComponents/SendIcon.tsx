import theme from "../../../../presets"

const SendIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M3.69276 1.49327L3.69277 1.49327L22.1552 11.6477L22.1552 11.6477C22.3488 11.7541 22.4195 11.9973 22.313 12.1908L22.313 12.1909C22.2764 12.2573 22.2217 12.3121 22.1552 12.3486L22.2034 12.4362L22.1552 12.3486L3.69277 22.5029L3.74096 22.5906L3.69276 22.5029C3.49918 22.6094 3.25597 22.5388 3.14951 22.3453L3.14951 22.3452C3.11704 22.2862 3.1 22.2199 3.1 22.1525V1.84375C3.1 1.62284 3.27909 1.44375 3.5 1.44375C3.5674 1.44375 3.63371 1.46078 3.69276 1.49327ZM5.04819 4.29304L4.9 4.21153V4.38066V10.9981V11.0982H5H9.9V12.8981H5H4.9V12.9981V19.6156V19.7847L5.04819 19.7032L18.8981 12.0858L19.0574 11.9982L18.8981 11.9105L5.04819 4.29304Z" fill={color} stroke="white" strokeWidth="0.2" />
        </svg>
    );
};

export default SendIcon;