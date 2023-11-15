import theme from "../../../../presets"

const PinIcon = ({
    color = theme.colors.staticBlack,
    size = "16",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
            <path d="M8 15.8173L3.75736 11.5747C1.41421 9.2315 1.41421 5.43254 3.75736 3.08939C6.10051 0.746245 9.89947 0.746245 12.2427 3.08939C14.5858 5.43254 14.5858 9.2315 12.2427 11.5747L8 15.8173ZM11.2998 10.6318C13.1223 8.80943 13.1223 5.85464 11.2998 4.0322C9.4774 2.20975 6.52261 2.20975 4.70017 4.0322C2.87772 5.85464 2.87772 8.80943 4.70017 10.6318L8 13.9317L11.2998 10.6318ZM8 8.66536C7.2636 8.66536 6.66667 8.06843 6.66667 7.33203C6.66667 6.59565 7.2636 5.9987 8 5.9987C8.7364 5.9987 9.33333 6.59565 9.33333 7.33203C9.33333 8.06843 8.7364 8.66536 8 8.66536Z" fill={color} />
        </svg>
    );
};

export default PinIcon;