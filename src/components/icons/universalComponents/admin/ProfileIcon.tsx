import theme from "../../../../../presets"

const ProfileIcon = ({
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
            <path d="M15.75 8C15.75 9.65685 14.4069 11 12.75 11C11.0931 11 9.75 9.65685 9.75 8C9.75 6.34315 11.0931 5 12.75 5C14.4069 5 15.75 6.34315 15.75 8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.75 13.25C9.85051 13.25 7.5 15.6005 7.5 18.5H18C18 15.6005 15.6495 13.25 12.75 13.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ProfileIcon;