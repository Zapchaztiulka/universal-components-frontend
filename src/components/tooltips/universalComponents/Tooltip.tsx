import { useCallback, useEffect, useRef, useState } from "react";
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
  tooltipLocationProps = TooltipLocation.BottomLeft,
  wrapContainerRef,
}: TooltipProps) => {
  const [isShowToolTip, setShowToolTip] = useState(false);
  const refSetTimeout = useRef<NodeJS.Timeout>();
  const targetElementRef = useRef(null);
  const tooltipElementRef = useRef(null);
  const [tooltipLocation, setTooltipLocation] = useState(tooltipLocationProps);

  const isTop =
    tooltipLocation === TooltipLocation.TopLeft ||
    tooltipLocation === TooltipLocation.TopRight ||
    tooltipLocation === TooltipLocation.TopCenter;
  const isBottom =
    tooltipLocation === TooltipLocation.BottomLeft ||
    tooltipLocation === TooltipLocation.BottomRight ||
    tooltipLocation === TooltipLocation.BottomCenter;

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

  const calculateTooltipPosition = useCallback(() => {
    if (!textTooltip || !targetElementRef.current || !tooltipElementRef.current)
      return;
    const targetElement = targetElementRef.current as HTMLElement;
    const tooltipElement = tooltipElementRef.current as HTMLElement;
    const targetRect = targetElement.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const tooltipRectWidth = tooltipRect.width + 12;
    const tooltipRectHeight = tooltipRect.height + 12;

    let wrapContainerRect: DOMRect | undefined;
    let freeSpaceTop: number | undefined;
    let freeSpaceLeft: number | undefined;
    let freeSpaceRight: number | undefined;
    let freeSpaceBottom: number | undefined;
    if (wrapContainerRef && wrapContainerRef.current) {
      wrapContainerRect = wrapContainerRef.current.getBoundingClientRect();
      freeSpaceTop = targetRect.top - wrapContainerRect.top;
      freeSpaceLeft = targetRect.left - wrapContainerRect.left;
      freeSpaceRight = wrapContainerRect.right - targetRect.right;
      freeSpaceBottom = wrapContainerRect.bottom - targetRect.bottom;
    }

    if (
      tooltipLocation === TooltipLocation.Right &&
      targetRect.right + tooltipRectWidth <= viewportWidth &&
      (freeSpaceRight ? freeSpaceRight >= tooltipRect.width : true)
    )
      return;

    if (
      tooltipLocation === TooltipLocation.Left &&
      targetRect.left - tooltipRectWidth >= 0 &&
      (freeSpaceLeft ? freeSpaceLeft >= tooltipRect.width : true)
    )
      return;
    if (
      (tooltipLocation === TooltipLocation.TopCenter ||
        tooltipLocation === TooltipLocation.TopRight ||
        tooltipLocation === TooltipLocation.TopLeft) &&
      targetRect.top - tooltipRectHeight >= 0 &&
      (freeSpaceTop ? freeSpaceTop >= tooltipRectHeight : true)
    )
      return;

    if (
      (tooltipLocation === TooltipLocation.BottomCenter ||
        tooltipLocation === TooltipLocation.BottomLeft ||
        tooltipLocation === TooltipLocation.BottomRight) &&
      targetRect.bottom + tooltipRectHeight <= viewportHeight &&
      (freeSpaceBottom ? freeSpaceBottom >= tooltipRect.height : true)
    )
      return;

    if (
      tooltipLocation === TooltipLocation.Right ||
      tooltipLocation === TooltipLocation.Left
    ) {
      if (
        targetRect.left - tooltipRectWidth > 0 &&
        (freeSpaceLeft ? freeSpaceLeft >= tooltipRectWidth : true) &&
        (targetRect.right + tooltipRectWidth > viewportWidth ||
          (freeSpaceRight ? freeSpaceRight < tooltipRectWidth : true))
      ) {
        setTooltipLocation(TooltipLocation.Left);
      } else if (
        (targetRect.left - tooltipRectWidth < 0 ||
          (freeSpaceLeft ? freeSpaceLeft < tooltipRectWidth : true)) &&
        targetRect.right + tooltipRectWidth <= viewportWidth &&
        (freeSpaceRight ? freeSpaceRight >= tooltipRectWidth : true)
      ) {
        setTooltipLocation(TooltipLocation.Right);
      } else if (
        targetRect.bottom + tooltipRectHeight < viewportHeight &&
        (freeSpaceBottom ? freeSpaceBottom >= tooltipRectHeight : true)
      ) {
        setTooltipLocation(TooltipLocation.BottomRight);
      } else if (
        targetRect.top - tooltipRectHeight > 0 &&
        (freeSpaceTop ? freeSpaceTop >= tooltipRectHeight : true)
      ) {
        setTooltipLocation(TooltipLocation.TopRight);
      } else {
        setTooltipLocation(tooltipLocationProps);
      }
    }
    // Adaptive Tooltip for Top/Bottom
    const changeLocationTopBottom = (
      top: TooltipLocation,
      bottom: TooltipLocation
    ) => {
      if (
        targetRect.bottom + tooltipRectHeight <= viewportHeight &&
        (freeSpaceBottom ? freeSpaceBottom >= tooltipRectHeight : true)
      ) {
        setTooltipLocation(bottom);
      } else if (
        targetRect.top - tooltipRectHeight >= 0 &&
        (freeSpaceTop ? freeSpaceTop >= tooltipRectHeight : true)
      ) {
        setTooltipLocation(top);
      } else {
        setTooltipLocation(tooltipLocationProps);
      }
    };
    if (
      tooltipLocation === TooltipLocation.TopCenter ||
      tooltipLocation === TooltipLocation.BottomCenter
    ) {
      changeLocationTopBottom(
        TooltipLocation.TopCenter,
        TooltipLocation.BottomCenter
      );
    }

    if (
      tooltipLocation === TooltipLocation.TopRight ||
      tooltipLocation === TooltipLocation.BottomRight
    ) {
      changeLocationTopBottom(
        TooltipLocation.TopRight,
        TooltipLocation.BottomRight
      );
    }

    if (
      tooltipLocation === TooltipLocation.TopLeft ||
      tooltipLocation === TooltipLocation.BottomLeft
    ) {
      changeLocationTopBottom(
        TooltipLocation.TopLeft,
        TooltipLocation.BottomLeft
      );
    }
  }, [textTooltip, tooltipLocationProps, wrapContainerRef, tooltipLocation]);

  useEffect(() => {
    window.addEventListener("resize", calculateTooltipPosition);

    return () => {
      window.removeEventListener("resize", calculateTooltipPosition);
    };
  });
  useEffect(() => {
    if (isShowToolTip) {
      calculateTooltipPosition();
    }
  }, [isShowToolTip, calculateTooltipPosition]);

  const renderIcon = () => {
    return (
      <>
        {isTop && (
          <ArrowTooltipDownIcon
            color="#F79009"
            iconClassName={`absolute ${IconLocationStyles[tooltipLocation]} `}
          />
        )}

        {isBottom && (
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
      ref={targetElementRef}
      className={`relative inline-flex ${
        containerClassName ? containerClassName : ""
      }`}
    >
      {children}
      {isShowToolTip && textTooltip && (
        <div
          ref={tooltipElementRef}
          className={`absolute  p-xs2 z-[5000] min-w-max  bg-bgGreyDark ${
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
