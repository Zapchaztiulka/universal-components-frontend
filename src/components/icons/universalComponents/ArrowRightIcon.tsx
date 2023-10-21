import theme from "../../../../presets"

const ArrowRightIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowRightIcon;