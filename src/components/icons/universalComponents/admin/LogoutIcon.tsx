import theme from "../../../../../presets"

const LogoutIcon = ({
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
            <path d="M16 15L19 12M19 12L16 9M19 12L8.5 12M13 15V15.75C13 16.9926 11.9926 18 10.75 18H7.75C6.50736 18 5.5 16.9926 5.5 15.75V8.25C5.5 7.00736 6.50736 6 7.75 6H10.75C11.9926 6 13 7.00736 13 8.25V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default LogoutIcon;