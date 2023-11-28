import theme from "../../../../presets";

const ArrowTooltipDownIcon = ({
  color = theme.colors.iconPrimary,
  width = "17",
  height = "8",
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
      viewBox="0 0 17 8"
      fill="none"
    >
      <path d="M16.5 0H0.5L8.5 8L16.5 0Z" fill={color} />
    </svg>
  );
};

export default ArrowTooltipDownIcon;
