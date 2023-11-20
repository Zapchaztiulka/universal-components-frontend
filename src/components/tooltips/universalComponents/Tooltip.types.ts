export enum TooltipLocation {
  TopLeft = "TopLeft",
  TopRight = "opRight",
  TopCenter = "TopCenter",
  BottomRight = "BottomRight",
  BottomLeft = "BottomLeft",
  BottomCenter = "BottomCenter",
  Right = "Right",
  Left = "Left",
}
export type TooltipProps = {
  children: React.ReactNode;
  textTooltip?: string;
  containerClassName?: string;
  tooltipClassName?: string;
  tooltipLocation?: TooltipLocation;
};
