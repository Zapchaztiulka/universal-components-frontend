import theme from "../../../../presets"

const ArrowDownIcon = ({
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
            <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default ArrowDownIcon; 