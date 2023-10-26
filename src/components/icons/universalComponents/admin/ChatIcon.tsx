import theme from "../../../../../presets"

const ChatIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M6.5 8.76153C6.5 7.78866 7.29368 7 8.27273 7H17.7273C18.7063 7 19.5 7.78867 19.5 8.76153V14.7496C19.5 15.7225 18.7063 16.5111 17.7273 16.5111H13.9828C13.2325 16.5111 12.4964 16.7138 11.8532 17.0977L10.3412 18C10.1939 17.1543 9.45189 16.5111 8.55873 16.5111H8.11924C7.22496 16.5111 6.5 15.7907 6.5 14.9021V8.76153Z" stroke={color} strokeWidth="1.5" />
            <path d="M10.3871 12.3477C11.3091 12.9074 13.6449 13.6909 15.612 12.3477" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};

export default ChatIcon;