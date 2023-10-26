import theme from "../../../../presets"

const PlusIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M4 12H12M12 12H20M12 12V20M12 12V4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default PlusIcon;