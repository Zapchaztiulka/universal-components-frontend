import theme from "../../../../presets"

const SearchIcon = ({
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
            <path d="M11.25 19.5C15.8063 19.5 19.5 15.8063 19.5 11.25C19.5 6.69365 15.8063 3 11.25 3C6.69365 3 3 6.69365 3 11.25C3 15.8063 6.69365 19.5 11.25 19.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21L17.25 17.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default SearchIcon;