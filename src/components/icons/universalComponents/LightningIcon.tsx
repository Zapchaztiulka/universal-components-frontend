import theme from "../../../../presets"

const LightningIcon = ({
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
            <path d="M13.0001 2L4.09356 12.6879C3.74475 13.1064 3.57035 13.3157 3.56768 13.4925C3.56537 13.6461 3.63384 13.7923 3.75336 13.8889C3.89085 14 4.16328 14 4.70814 14H12.0001L11.0001 22L19.9067 11.3121C20.2555 10.8936 20.4299 10.6843 20.4325 10.5075C20.4348 10.3539 20.3664 10.2077 20.2468 10.1111C20.1094 10 19.8369 10 19.2921 10H12.0001L13.0001 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default LightningIcon;