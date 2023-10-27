import theme from "../../../../presets"

const LoaderIcon = ({
    color = theme.colors.iconContrast,
    size = "64",
}: {
    color?: string;
    size?: string;
    }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={+size / 4}
            viewBox="0 0 64 16"
            fill="none"
        >
            <circle
                opacity="0.2"
                cx="8"
                cy="8"
                r="8"
                fill={color}
                className="animate-pulse"
            />
            <circle
                opacity="0.5"
                cx="32"
                cy="8"
                r="8"
                fill={color}
                className="animate-pulse"
            />
            <circle
                cx="56"
                cy="8"
                r="8"
                fill={color}
                className="animate-pulse"
            />
        </svg>
    );
};

export default LoaderIcon;