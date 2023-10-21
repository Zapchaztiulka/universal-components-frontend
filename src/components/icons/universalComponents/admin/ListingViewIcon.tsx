import theme from "../../../../../presets"

const ListingViewIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M14 6.5H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 9.5H17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9 10H6C5.4475 10 5 9.5525 5 9V6C5 5.4475 5.4475 5 6 5H9C9.5525 5 10 5.4475 10 6V9C10 9.5525 9.5525 10 9 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 15.5H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 18.5H17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9 19H6C5.4475 19 5 18.5525 5 18V15C5 14.4475 5.4475 14 6 14H9C9.5525 14 10 14.4475 10 15V18C10 18.5525 9.5525 19 9 19Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ListingViewIcon;