import theme from "../../../../presets"

const PriceIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill="none" className={className}>
            <path d="M7.70793 8.21086H7.71729M20.4271 14.2101L13.7166 20.9207C13.5427 21.0947 13.3363 21.2328 13.109 21.327C12.8818 21.4212 12.6382 21.4697 12.3922 21.4697C12.1462 21.4697 11.9027 21.4212 11.6754 21.327C11.4482 21.2328 11.2417 21.0947 11.0679 20.9207L3.02832 12.8905V3.53125H12.3875L20.4271 11.5708C20.7758 11.9215 20.9714 12.396 20.9714 12.8905C20.9714 13.385 20.7758 13.8594 20.4271 14.2101Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default PriceIcon;