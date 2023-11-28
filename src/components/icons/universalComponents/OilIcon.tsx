import theme from "../../../../presets"

const OilIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} >
            <path d="M14.5634 7.5C15.1269 7.5 17.25 10.5 17.25 11.645C17.25 12.7901 17.25 19.2 17.25 19.2H6.75V7.5C6.75 7.5 14 7.5 14.5634 7.5ZM15.5 5.7C15 5.7 5.875 5.7 5.875 5.7C5.39174 5.7 5 6.10295 5 6.6V20.1C5 20.5971 5.39174 21 5.875 21H18.125C18.6082 21 19 20.5971 19 20.1C19 20.1 19 13 19 11.1C19 9.2 16 5.7 15.5 5.7ZM11.125 3H6.75C6.26674 3 5.875 3.40295 5.875 3.9V5.7H12V3.9C12 3.40295 11.6083 3 11.125 3ZM15.5 12H13.75V17.4H15.5V12Z" fill={color} />
        </svg>
    );
};

export default OilIcon;
