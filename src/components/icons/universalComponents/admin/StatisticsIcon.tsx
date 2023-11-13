import theme from "../../../../../presets"

const StatisticsIcon = ({
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
            <path d="M10 17V12.5C10 11.6716 9.32843 11 8.5 11H7C6.17157 11 5.5 11.6716 5.5 12.5V17C5.5 17.8284 6.17157 18.5 7 18.5H8.5C9.32843 18.5 10 17.8284 10 17ZM10 17V9.5C10 8.67157 10.6716 8 11.5 8H13C13.8284 8 14.5 8.67157 14.5 9.5V17M10 17C10 17.8284 10.6716 18.5 11.5 18.5H13C13.8284 18.5 14.5 17.8284 14.5 17M14.5 17V6.5C14.5 5.67157 15.1716 5 16 5H17.5C18.3284 5 19 5.67157 19 6.5V17C19 17.8284 18.3284 18.5 17.5 18.5H16C15.1716 18.5 14.5 17.8284 14.5 17Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default StatisticsIcon;