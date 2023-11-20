import theme from "../../../../presets"

const ArrowTooltipDownIcon = ({
    color = theme.colors.iconPrimary,
    width = "17",
  height = '8',
    iconClassName
}: {
    color?: string;
    width?: string;
    height?: string;
    iconClassName?: string;
}) => {
    return (
      <svg className={` ${iconClassName ? iconClassName : ""}` } xmlns="http://www.w3.org/2000/svg" width={width}  height={height} viewBox="0 0 17 8" fill="none">
  <path d="M16.5 0H0.5L8.5 8L16.5 0Z" fill={color} />
</svg>
    );
};

export default ArrowTooltipDownIcon; 