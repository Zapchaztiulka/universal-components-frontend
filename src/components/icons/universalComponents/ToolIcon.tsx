import theme from "../../../../presets"

const ToolIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M14.7 6.29974C14.5168 6.48666 14.4141 6.73798 14.4141 6.99974C14.4141 7.26149 14.5168 7.51281 14.7 7.69974L16.3 9.29974C16.4869 9.48296 16.7382 9.58559 17 9.58559C17.2617 9.58559 17.513 9.48296 17.7 9.29974L21.47 5.52974C21.9728 6.64092 22.1251 7.87897 21.9064 9.07888C21.6878 10.2788 21.1087 11.3836 20.2463 12.246C19.3838 13.1084 18.279 13.6876 17.0791 13.9062C15.8792 14.1248 14.6412 13.9726 13.53 13.4697L6.61998 20.3797C6.22215 20.7776 5.68259 21.0011 5.11998 21.0011C4.55737 21.0011 4.0178 20.7776 3.61998 20.3797C3.22215 19.9819 2.99866 19.4423 2.99866 18.8797C2.99866 18.3171 3.22215 17.7776 3.61998 17.3797L10.53 10.4697C10.0271 9.35855 9.87489 8.1205 10.0935 6.92059C10.3121 5.72068 10.8913 4.61589 11.7537 3.75346C12.6161 2.89102 13.7209 2.3119 14.9208 2.09328C16.1207 1.87465 17.3588 2.0269 18.47 2.52974L14.71 6.28974L14.7 6.29974Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ToolIcon;
