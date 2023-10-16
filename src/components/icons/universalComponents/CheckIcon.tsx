import theme from "../../../../presets"

const CheckIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M18.9381 7.04297L9.39862 16.9541L5.0625 12.449" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CheckIcon;