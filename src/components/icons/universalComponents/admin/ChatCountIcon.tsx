import theme from "../../../../../presets"

const ChatCountIcon = ({
    color = theme.colors.iconPrimary,
    countColor = theme.colors.iconPrimary,
    size = "32",
    count = 1,
    className
}: {
    color?: string;
    countColor?: string;
    size?: string;
    count?: number;
    className?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 -8 32 32" fill="none" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.72727 5C3.77163 5 3 5.77282 3 6.72237V16.2124C3 17.0317 3.66588 17.699 4.49115 17.699H5.16727C6.54448 17.699 7.74988 18.4337 8.41161 19.5331L9.72157 18.7478C10.8665 18.0614 12.1767 17.699 13.512 17.699H19.2727C20.2284 17.699 21 16.9262 21 15.9766V6.72237C21 5.77282 20.2284 5 19.2727 5H4.72727ZM1 6.72237C1 4.66486 2.67046 3 4.72727 3H19.2727C21.3296 3 23 4.66488 23 6.72237V15.9766C23 18.0341 21.3296 19.699 19.2727 19.699H13.512C12.5387 19.699 11.584 19.9632 10.7499 20.4632L7.17329 22.6073L6.92422 21.1708C6.77949 20.3361 6.04801 19.699 5.16727 19.699H4.49115C2.56477 19.699 1 18.1397 1 16.2124V6.72237Z" fill={color} />
            <path d="M8 12C9.41178 12.7546 12.9882 13.8111 16 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <circle cx="22" cy="0" r="9" fill={theme.colors.bgWhite} />
            <text x="22" y="4" textAnchor="middle" fill={countColor} fontSize={11} >{count}</text>
        </svg>
    );
};

export default ChatCountIcon;