import theme from "../../../../presets"

const ArrowUpIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M18 15L12 9L6 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowUpIcon;