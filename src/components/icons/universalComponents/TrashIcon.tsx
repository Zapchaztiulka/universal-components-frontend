import theme from "../../../../presets"

const TrashIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M5.29053 7.52881H6.78149M6.78149 7.52881H18.7092M6.78149 7.52881V17.9656C6.78149 18.361 6.93858 18.7402 7.21819 19.0198C7.4978 19.2995 7.87703 19.4565 8.27246 19.4565H15.7273C16.1227 19.4565 16.502 19.2995 16.7816 19.0198C17.0612 18.7402 17.2183 18.361 17.2183 17.9656V7.52881H6.78149ZM9.01794 7.52881V6.03784C9.01794 5.64241 9.17503 5.26318 9.45464 4.98357C9.73425 4.70396 10.1135 4.54688 10.5089 4.54688H13.4908C13.8863 4.54688 14.2655 4.70396 14.5451 4.98357C14.8247 5.26318 14.9818 5.64241 14.9818 6.03784V7.52881M10.5089 11.2562V15.7291M13.4908 11.2562V15.7291" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default TrashIcon;