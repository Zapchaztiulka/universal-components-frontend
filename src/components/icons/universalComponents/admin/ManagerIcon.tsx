import theme from "../../../../../presets"

const ManagerIcon = ({
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
            <path d="M5.5 8.5V16C5.5 16.8284 6.17157 17.5 7 17.5H17.5C18.3284 17.5 19 16.8284 19 16V10C19 9.17157 18.3284 8.5 17.5 8.5H13L11.5 7H7C6.17157 7 5.5 7.67157 5.5 8.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ManagerIcon;