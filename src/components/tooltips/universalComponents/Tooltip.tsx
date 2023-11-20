import { useRef, useState } from "react";
import { TooltipLocation, TooltipProps } from "./Tooltip.types";
import {
  ArrowTooltipDownIcon,
  ArrowTooltipLeftIcon,
  ArrowTooltipRightIcon,
  ArrowTooltipUpIcon,
} from "../../icons";

const Tooltip = ({
  children,
  textTooltip,
  containerClassName,
  tooltipClassName,
  tooltipLocation = TooltipLocation.BottomLeft,
}: // isFocusedTooltip,
TooltipProps) => {
  const [isShowToolTip, setShowToolTip] = useState(true);
  const refSetTimeout = useRef<NodeJS.Timeout>();
  console.log(isShowToolTip);
  const showTooltip = () => {
    if (!textTooltip) return;
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 750);
  };

  const hideTooltip = () => {
    if (!textTooltip) return;
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };
  const IconLocationStyles = {
    [TooltipLocation.BottomRight]: "top-[-8px] right-[16px]",
    [TooltipLocation.BottomLeft]: "top-[-8px] left-[16px]",
    [TooltipLocation.BottomCenter]:
      "top-[-8px] left-1/2 transform -translate-x-1/2",
    [TooltipLocation.TopLeft]: "bottom-[-8px] left-[16px]",
    [TooltipLocation.TopRight]: "bottom-[-8px] right-[16px]",
    [TooltipLocation.TopCenter]:
      "bottom-[-8px] left-1/2 transform -translate-x-1/2",
    [TooltipLocation.Right]: " left-[-8px] top-1/2 transform -translate-y-1/2",
    [TooltipLocation.Left]: "right-[-8px] top-1/2 transform -translate-y-1/2 ",
  };

  const TooltipLocationStyles = {
    [TooltipLocation.BottomRight]:
      "top-full transform translate-y-[12px] right-[-16px]  ",
    [TooltipLocation.BottomLeft]:
      "top-full transform translate-y-[12px] left-[-16px]  ",
    [TooltipLocation.BottomCenter]:
      "left-1/2 transform -translate-x-1/2 top-full translate-y-[12px]",
    [TooltipLocation.TopLeft]:
      "bottom-full transform -translate-y-[12px] left-[-16px]",
    [TooltipLocation.TopRight]:
      "bottom-full transform -translate-y-[12px] right-[-16px]",
    [TooltipLocation.TopCenter]:
      "left-1/2 transform -translate-x-1/2 bottom-full -translate-y-[12px]",
    [TooltipLocation.Right]:
      "top-1/2 transform -translate-y-1/2 left-full translate-x-[12px]",
    [TooltipLocation.Left]:
      "top-1/2 transform -translate-y-1/2 right-full -translate-x-[12px]",
  };

  const isTopIcon =
    tooltipLocation === TooltipLocation.TopLeft ||
    tooltipLocation === TooltipLocation.TopRight ||
    tooltipLocation === TooltipLocation.TopCenter;
  const isBottomIcon =
    tooltipLocation === TooltipLocation.BottomLeft ||
    tooltipLocation === TooltipLocation.BottomRight ||
    tooltipLocation === TooltipLocation.BottomCenter;

  const renderIcon = () => {
    return (
      <>
        {isTopIcon && (
          <ArrowTooltipDownIcon
            color="#F79009"
            iconClassName={`absolute ${IconLocationStyles[tooltipLocation]} `}
          />
        )}

        {isBottomIcon && (
          <ArrowTooltipUpIcon
            color="#F79009"
            iconClassName={`absolute ${IconLocationStyles[tooltipLocation]} `}
          />
        )}

        {tooltipLocation === TooltipLocation.Right && (
          <ArrowTooltipLeftIcon
            color="#F79009"
            iconClassName={`absolute ${IconLocationStyles[tooltipLocation]} `}
          />
        )}
        {tooltipLocation === TooltipLocation.Left && (
          <ArrowTooltipRightIcon
            color="#F79009"
            iconClassName={`absolute ${IconLocationStyles[tooltipLocation]} `}
          />
        )}
      </>
    );
  };

  return (
    <div
      tabIndex={textTooltip ? 0 : -1}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      className={`relative flex  ${
        containerClassName ? containerClassName : ""
      }`}
    >
      {children}
      {isShowToolTip && textTooltip && (
        <div
          className={`absolute  p-xs2 z-50 min-w-max  bg-bgGreyDark ${
            TooltipLocationStyles[tooltipLocation]
          }
          rounded-[8px] text-center text-textContrast text-[14px] leading-[1.4] 
          ${tooltipClassName ? tooltipClassName : ""}`}
        >
          {textTooltip}
          {renderIcon()}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
