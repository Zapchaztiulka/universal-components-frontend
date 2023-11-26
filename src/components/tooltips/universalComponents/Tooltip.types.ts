export enum TooltipLocation {
  TopLeft = "TopLeft",
  TopRight = "TopRight",
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
  tooltipLocationProps?: TooltipLocation;
  wrapContainerRef?: React.RefObject<HTMLElement>;
};
