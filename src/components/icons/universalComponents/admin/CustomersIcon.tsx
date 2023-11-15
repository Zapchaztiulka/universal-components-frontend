import theme from "../../../../../presets"

const CustomersIcon = ({
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
            <path d="M12.25 6.01563C12.7997 5.39282 13.604 5 14.5 5C16.1569 5 17.5 6.34315 17.5 8C17.5 9.65685 16.1569 11 14.5 11C13.604 11 12.7997 10.6072 12.25 9.98437M14.5 18.5H5.5V17.75C5.5 15.2647 7.51472 13.25 10 13.25C12.4853 13.25 14.5 15.2647 14.5 17.75V18.5ZM14.5 18.5H19V17.75C19 15.2647 16.9853 13.25 14.5 13.25C13.6804 13.25 12.9119 13.4691 12.25 13.852M13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CustomersIcon;