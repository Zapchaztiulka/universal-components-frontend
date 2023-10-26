import theme from "../../../../presets"

const EllipseIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="6" fill={color} />
        </svg>
    );
};

export default EllipseIcon;