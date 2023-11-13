import theme from "../../../../presets"

const OptionsIcon = ({
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
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5444 4.1938C14.5444 5.405 13.5274 6.38791 12.2722 6.38791C11.017 6.38791 10 5.405 10 4.1938C10 2.98169 11.017 1.99969 12.2722 1.99969C13.5274 1.99969 14.5444 2.98169 14.5444 4.1938ZM14.5444 11.9647C14.5444 13.1686 13.5274 14.1443 12.2722 14.1443C11.017 14.1443 10 13.1686 10 11.9647C10 10.7607 11.017 9.78507 12.2722 9.78507C13.5274 9.78507 14.5444 10.7607 14.5444 11.9647ZM14.5444 19.7356C14.5444 20.9477 13.5274 21.9297 12.2722 21.9297C11.017 21.9297 10 20.9477 10 19.7356C10 18.5244 11.017 17.5415 12.2722 17.5415C13.5274 17.5415 14.5444 18.5244 14.5444 19.7356Z" fill={color}/>
        </svg>
    );
};

export default OptionsIcon;