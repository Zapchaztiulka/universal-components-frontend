import theme from "../../../../../presets"

const ItalicIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M14 18C14.2807 18 14.5146 18.0994 14.7018 18.2982C14.9006 18.4854 15 18.7193 15 19C15 19.269 14.9006 19.5029 14.7018 19.7018C14.5146 19.9006 14.2807 20 14 20H8C7.73099 20 7.49708 19.9006 7.29825 19.7018C7.09942 19.5029 7 19.269 7 19C7 18.7193 7.09942 18.4854 7.29825 18.2982C7.49708 18.0994 7.73099 18 8 18H14ZM14 5.14035L12 19.1404L10.0175 18.8596L12.0175 4.85965L14 5.14035ZM10 6C9.73099 6 9.49708 5.90058 9.29825 5.70175C9.09942 5.50292 9 5.269 9 5C9 4.7193 9.09942 4.48538 9.29825 4.29824C9.49708 4.09941 9.73099 4 10 4H16C16.2807 4 16.5146 4.09941 16.7018 4.29824C16.9006 4.48538 17 4.7193 17 5C17 5.269 16.9006 5.50292 16.7018 5.70175C16.5146 5.90058 16.2807 6 16 6H10Z" fill={color} />
        </svg>
    );
};

export default ItalicIcon;