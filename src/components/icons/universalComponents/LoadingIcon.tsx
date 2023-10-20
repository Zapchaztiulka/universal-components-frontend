import theme from "../../../../presets"

const LoadingIcon = ({
    color = theme.colors.iconBrand,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M5.5 12C5.5 10.2761 6.18482 8.62279 7.40381 7.40381C8.62279 6.18482 10.2761 5.5 12 5.5C13.7239 5.5 15.3772 6.18482 16.5962 7.40381C17.8152 8.62279 18.5 10.2761 18.5 12C18.5 13.7239 17.8152 15.3772 16.5962 16.5962C15.3772 17.8152 13.7239 18.5 12 18.5C10.2761 18.5 8.62279 17.8152 7.40381 16.5962C6.18482 15.3772 5.5 13.7239 5.5 12L5.5 12Z" stroke={theme.colors.borderDefault} strokeWidth="3" />
            <path d="M5.5 12C5.5 10.6273 5.93456 9.2899 6.74139 8.17939C7.54822 7.06889 8.68591 6.24231 9.99139 5.81813C11.2969 5.39396 12.7031 5.39396 14.0086 5.81813C15.3141 6.24231 16.4518 7.06889 17.2586 8.1794" stroke={color} strokeWidth="3" />
        </svg>
    );
};

export default LoadingIcon;