import theme from "../../../../presets"

const UploadIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 22 20" fill="none" className={className}>
            <path d="M11 10.0002V19.0002M11 10.0002L8.49996 12.0002M11 10.0002L13.5 12.0002M4.03396 7.11719C3.08817 7.35518 2.26184 7.93035 1.71021 8.73463C1.15859 9.53891 0.919644 10.5169 1.03827 11.485C1.15689 12.453 1.62492 13.3444 2.35443 13.9917C3.08393 14.639 4.02469 14.9976 4.99996 15.0002H5.99996" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.8299 5.13772C14.4881 3.78429 13.6445 2.61146 12.47 1.85698C11.2956 1.10249 9.87819 0.822809 8.50517 1.07462C7.13215 1.32643 5.90625 2.0909 5.07598 3.21306C4.2457 4.33521 3.87318 5.73109 4.03392 7.11772C4.03392 7.11772 4.18692 7.99972 4.49992 8.49972" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 15C16.706 14.9995 17.404 14.8495 18.0479 14.5599C18.6917 14.2702 19.267 13.8475 19.7357 13.3195C20.2045 12.7915 20.5561 12.1702 20.7674 11.4965C20.9787 10.8229 21.045 10.1121 20.9618 9.41094C20.8786 8.70982 20.6479 8.03427 20.2848 7.42874C19.9217 6.82321 19.4345 6.30145 18.8552 5.89778C18.276 5.49412 17.6178 5.21772 16.924 5.08676C16.2302 4.9558 15.5166 4.97327 14.83 5.138L13.5 5.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default UploadIcon;