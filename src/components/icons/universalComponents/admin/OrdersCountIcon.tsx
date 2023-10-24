import theme from "../../../../../presets"

const OrdersCountIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    count = 1
}: {
    color?: string;
    size?: string;
    count?: number;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M14.75 15.5H18.5L17.4463 14.4463C17.1605 14.1605 17 13.773 17 13.3688V11C17 9.04067 15.7478 7.37382 14 6.75606V6.5C14 5.67157 13.3284 5 12.5 5C11.6716 5 11 5.67157 11 6.5V6.75606C9.25221 7.37382 8 9.04067 8 11V13.3688C8 13.773 7.83946 14.1605 7.5537 14.4463L6.5 15.5H10.25M14.75 15.5V16.25C14.75 17.4926 13.7426 18.5 12.5 18.5C11.2574 18.5 10.25 17.4926 10.25 16.25V15.5M14.75 15.5H10.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="6" r="6" fill={theme.colors.bgBrandDark}/>
            <text x={15} y={9} fill={theme.colors.bgWhite} fontSize={9} >{count}</text>
        </svg>
    );
};

export default OrdersCountIcon;