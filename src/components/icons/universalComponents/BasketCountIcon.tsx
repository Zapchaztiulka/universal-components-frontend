import theme from "../../../../presets"

const BasketCountIcon = ({
  color = theme.colors.iconPrimary,
  size = "24",
  count = 1,
  className
}: {
  color?: string;
  size?: string;
  count?: number;
  className?: string;
}) => {
  let xPositionOfNumber;
  let textSize;
  switch (count?.toString().length) {
    case 1:
      xPositionOfNumber = 16;
      textSize = 12;
      break;
    case 2:
      xPositionOfNumber = 14;
      textSize = 10;
      break;
    case 3:
      xPositionOfNumber = 13;
      textSize = 8;
      break;
    default:
      break;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <path d="M4.00436 11.4186L0.761719 8.17593L2.17593 6.76172L5.41857 10.0044H20.6603C21.2126 10.0044 21.6603 10.4521 21.6603 11.0044C21.6603 11.1017 21.6461 11.1985 21.6182 11.2917L19.2182 19.2917C19.0913 19.7146 18.7019 20.0043 18.2603 20.0043H6.00436V22.0043H17.0044V24.0043H5.00436C4.45207 24.0043 4.00436 23.5566 4.00436 23.0043V11.4186ZM5.50436 28.0043C4.67593 28.0043 4.00436 27.3327 4.00436 26.5043C4.00436 25.6759 4.67593 25.0043 5.50436 25.0043C6.33279 25.0043 7.00436 25.6759 7.00436 26.5043C7.00436 27.3327 6.33279 28.0043 5.50436 28.0043ZM17.5044 28.0043C16.6759 28.0043 16.0044 27.3327 16.0044 26.5043C16.0044 25.6759 16.6759 25.0043 17.5044 25.0043C18.3328 25.0043 19.0044 25.6759 19.0044 26.5043C19.0044 27.3327 18.3328 28.0043 17.5044 28.0043Z" fill={color} />
      <circle cx="20" cy="10" r="8" fill={theme.colors.bgBrandDark} />
      <text x={xPositionOfNumber} y={14} fill={theme.colors.bgWhite} fontSize={textSize} >{count}</text>
    </svg>
  );
};

export default BasketCountIcon;