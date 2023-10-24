import theme from "../../../../presets"

const ClockIcon = ({
    color = theme.colors.iconPrimary,
    size = "16",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" className="flex content-center justify-center">
            <path d="M7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654ZM7.99992 13.332C10.9455 13.332 13.3333 10.9442 13.3333 7.9987C13.3333 5.05318 10.9455 2.66536 7.99992 2.66536C5.0544 2.66536 2.66659 5.05318 2.66659 7.9987C2.66659 10.9442 5.0544 13.332 7.99992 13.332ZM8.66659 7.9987H11.3333V9.33203H7.33325V4.66536H8.66659V7.9987Z" fill={color} />
        </svg>
    );
};

export default ClockIcon;
