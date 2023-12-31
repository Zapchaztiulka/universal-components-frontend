import theme from "../../../../presets"

const EyeIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    if (size == '16') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
                <path d="M1.61342 8.47415C1.52262 8.33039 1.47723 8.25851 1.45182 8.14764C1.43273 8.06436 1.43273 7.93303 1.45182 7.84975C1.47723 7.73889 1.52262 7.66701 1.61341 7.52325C2.36369 6.33526 4.59693 3.33203 8.00027 3.33203C11.4036 3.33203 13.6369 6.33526 14.3871 7.52325C14.4779 7.66701 14.5233 7.73889 14.5487 7.84975C14.5678 7.93303 14.5678 8.06436 14.5487 8.14764C14.5233 8.25851 14.4779 8.33039 14.3871 8.47415C13.6369 9.66214 11.4036 12.6654 8.00027 12.6654C4.59693 12.6654 2.36369 9.66214 1.61342 8.47415Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.00027 9.9987C9.10484 9.9987 10.0003 9.10327 10.0003 7.9987C10.0003 6.89413 9.10484 5.9987 8.00027 5.9987C6.8957 5.9987 6.00027 6.89413 6.00027 7.9987C6.00027 9.10327 6.8957 9.9987 8.00027 9.9987Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" 
        className={`flex content-center justify-center ${className}`}>
            <path d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default EyeIcon;
