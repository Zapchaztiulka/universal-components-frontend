import theme from "../../../../presets"

const MailIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M21 6.75C21 5.7875 20.19 5 19.2 5H4.8C3.81 5 3 5.7875 3 6.75M21 6.75V17.25C21 18.2125 20.19 19 19.2 19H4.8C3.81 19 3 18.2125 3 17.25V6.75M21 6.75L12 12.875L3 6.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default MailIcon;