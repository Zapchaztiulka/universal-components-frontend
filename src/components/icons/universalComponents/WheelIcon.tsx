import theme from "../../../../presets"

const WheelIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className="flex content-center justify-center">
            <path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 17.5C11.2905 17.5 10.6125 17.3657 9.98975 17.121L7.52964 19.5815C8.83978 20.3557 10.368 20.8 12 20.8C13.632 20.8 15.1602 20.3557 16.4704 19.5815L14.0103 17.121C13.3875 17.3657 12.7095 17.5 12 17.5ZM3.2 12C3.2 13.632 3.64425 15.1602 4.41841 16.4704L6.87896 14.0103C6.63434 13.3875 6.5 12.7095 6.5 12C6.5 11.2905 6.63434 10.6125 6.87896 9.98975L4.41841 7.52964C3.64425 8.83978 3.2 10.368 3.2 12ZM19.5815 7.52964L17.121 9.98975C17.3657 10.6125 17.5 11.2905 17.5 12C17.5 12.7095 17.3657 13.3875 17.121 14.0103L19.5815 16.4704C20.3557 15.1602 20.8 13.632 20.8 12C20.8 10.368 20.3557 8.83978 19.5815 7.52964ZM12 8.7C10.1774 8.7 8.7 10.1774 8.7 12C8.7 13.8226 10.1774 15.3 12 15.3C13.8226 15.3 15.3 13.8226 15.3 12C15.3 10.1774 13.8226 8.7 12 8.7ZM12 3.2C10.368 3.2 8.83978 3.64425 7.52964 4.41841L9.98975 6.87896C10.6125 6.63434 11.2905 6.5 12 6.5C12.7095 6.5 13.3875 6.63434 14.0103 6.87896L16.4704 4.41841C15.1602 3.64425 13.632 3.2 12 3.2Z" fill={color} />
        </svg>
    );
};

export default WheelIcon;