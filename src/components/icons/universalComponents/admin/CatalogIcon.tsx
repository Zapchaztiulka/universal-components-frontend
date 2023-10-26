import theme from "../../../../../presets"

const CatalogIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M9.52728 10.3697H6.84243C6.0993 10.3697 5.5 9.77039 5.5 9.02727V6.34242C5.5 5.59929 6.0993 5 6.84243 5H9.52728C10.2704 5 10.8697 5.59929 10.8697 6.34242V9.02727C10.8697 9.77039 10.2704 10.3697 9.52728 10.3697Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5179 10.3697H14.833C14.0899 10.3697 13.4906 9.77039 13.4906 9.02727V6.34242C13.4906 5.59929 14.0899 5 14.833 5H17.5179C18.261 5 18.8603 5.59929 18.8603 6.34242V9.02727C18.8603 9.77039 18.261 10.3697 17.5179 10.3697Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.52728 18.3619H6.84243C6.0993 18.3619 5.5 17.7626 5.5 17.0195V14.3346C5.5 13.5915 6.0993 12.9922 6.84243 12.9922H9.52728C10.2704 12.9922 10.8697 13.5915 10.8697 14.3346V17.0195C10.8697 17.7626 10.2704 18.3619 9.52728 18.3619Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5179 18.3619H14.833C14.0899 18.3619 13.4906 17.7626 13.4906 17.0195V14.3346C13.4906 13.5915 14.0899 12.9922 14.833 12.9922H17.5179C18.261 12.9922 18.8603 13.5915 18.8603 14.3346V17.0195C18.8603 17.7626 18.261 18.3619 17.5179 18.3619Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CatalogIcon;