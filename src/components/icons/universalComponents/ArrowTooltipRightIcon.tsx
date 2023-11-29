import theme from "../../../../presets";

const ArrowTooltipRightIcon = ({
  color = theme.colors.iconPrimary,
  width = "8",
  height = "16",
  className,
}: {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}) => {
  return (
    <svg
      className={` ${className ? className : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 16"
      fill="none"
    >
      <path d="M0 0L0 16L8 8L0 0Z" fill={color} />
    </svg>
  );
};

export default ArrowTooltipRightIcon;
