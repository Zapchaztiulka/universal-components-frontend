import theme from "../../../../presets";

const ArrowTooltipLeftIcon = ({
  color = theme.colors.iconPrimary,
  width = "8",
  height = "16",
  iconClassName
}: {
  color?: string;
  width?: string;
    height?: string;
  iconClassName?: string;
}) => {
  return (
    <svg
      className={` ${iconClassName ? iconClassName : ""}` }
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 16"
      fill="none"
    >
      <path d="M8 16L8 0L0 8L8 16Z" fill={color} />
    </svg>
  );
};

export default ArrowTooltipLeftIcon;
