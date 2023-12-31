import theme from "../../../../presets"

const FilterIcon = ({
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
            <path d="M14.5357 13.0357L20.1106 8.20412C20.9931 7.43935 21.5 6.32916 21.5 5.16145C21.5 4.52 20.9814 4 20.34 4H12H3.66004C3.01859 4 2.5 4.52 2.5 5.16145C2.5 6.32916 3.00695 7.43935 3.88937 8.20412L9.46429 13.0357C9.80453 13.3306 10 13.7587 10 14.2089V20.0979C10 20.4906 10.432 20.73 10.765 20.5219L13.06 19.0875C13.6448 18.722 14 18.0811 14 17.3915V14.2089C14 13.7587 14.1955 13.3306 14.5357 13.0357Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default FilterIcon;