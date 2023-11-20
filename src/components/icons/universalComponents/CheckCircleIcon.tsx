import theme from "../../../../presets"

const CheckCircleIcon = ({
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
            <path d="M20.6228 11.2369V12.0302C20.6217 13.8897 20.0196 15.699 18.9063 17.1883C17.7929 18.6776 16.2279 19.7671 14.4448 20.2943C12.6616 20.8215 10.7558 20.7582 9.01158 20.1138C7.26734 19.4694 5.77814 18.2785 4.76607 16.7185C3.754 15.1586 3.2733 13.3133 3.39564 11.4579C3.51799 9.60247 4.23684 7.83629 5.44497 6.42278C6.65311 5.00926 8.2858 4.02415 10.0995 3.61436C11.9133 3.20456 13.8109 3.39205 15.5094 4.14885M20.6228 5.13186L11.9999 13.7634L9.413 11.1765" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CheckCircleIcon;