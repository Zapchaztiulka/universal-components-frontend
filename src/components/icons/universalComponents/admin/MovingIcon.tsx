import theme from "../../../../../presets"

const MovingIcon = ({
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
            <path d="M12 4V20M12 4L9.33333 6.66667M12 4L14.6667 6.66667M12 20L14.6667 17.3333M12 20L9.33333 17.3333M4 12H20M4 12L6.66667 14.6667M4 12L6.66667 9.33333M20 12L17.3333 9.33333M20 12L17.3333 14.6667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default MovingIcon;