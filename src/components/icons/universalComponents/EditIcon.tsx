import theme from "../../../../presets"

const EditIcon = ({
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
            <path d="M11.9999 19.2939H19.6697M15.8348 5.23262C16.1738 4.89359 16.6336 4.70312 17.1131 4.70312C17.3505 4.70312 17.5856 4.74988 17.8049 4.84074C18.0242 4.93159 18.2235 5.06475 18.3914 5.23262C18.5593 5.40048 18.6924 5.59977 18.7833 5.81911C18.8741 6.03844 18.9209 6.27352 18.9209 6.51092C18.9209 6.74832 18.8741 6.9834 18.7833 7.20273C18.6924 7.42206 18.5593 7.62135 18.3914 7.78922L7.73889 18.4417L4.33008 19.2939L5.18228 15.8851L15.8348 5.23262Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default EditIcon;