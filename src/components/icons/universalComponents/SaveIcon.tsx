import theme from "../../../../presets"

const SaveIcon = ({
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
            <path d="M16.6689 20.406V12.9356H7.33089V20.406M7.33089 3.59766V8.26664H14.8013M18.5365 20.406H5.4633C4.96798 20.406 4.49295 20.2092 4.14271 19.859C3.79247 19.5088 3.5957 19.0337 3.5957 18.5384V5.46525C3.5957 4.96993 3.79247 4.4949 4.14271 4.14466C4.49295 3.79442 4.96798 3.59766 5.4633 3.59766H15.7351L20.4041 8.26664V18.5384C20.4041 19.0337 20.2073 19.5088 19.857 19.859C19.5068 20.2092 19.0318 20.406 18.5365 20.406Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default SaveIcon;