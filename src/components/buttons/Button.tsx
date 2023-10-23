import { ElementType, ButtonHTMLAttributes, useMemo } from "react";
import cn from "clsx";
import theme from "./../../../presets";

export enum BUTTON_TYPES {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SECONDARY_GRAY = "secondary-gray",
    TERTIARY = "tertiary",
    DESTRUCTIVE = "desctructive",
    ICON_ONLY = "icon-only",
    SEARCH_TYPE = "search-type",
}

export enum BUTTON_SIZES {
    SMALL = "small",
    BIG = "big",
}

export type IconSideType = "left" | "right" 

export type ButtonMapItemType = {
    DEFAULT: string;
    HOVER: string;
    FOCUS: string;
    DISABLED: string;
    ACTIVE: string;
};

export type ButtonMapType = {
    [key in BUTTON_TYPES]: ButtonMapItemType;
};

export const buttonTypesToClasses: ButtonMapType = {
    [BUTTON_TYPES.PRIMARY]: {
        DEFAULT:
            "w-[150px] bg-bgBrandDark text-textContrast py-xs px-m leading-6",
        HOVER: "hover:bg-bgHoverBlue",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "",
        ACTIVE: "active:bg-bgPressedBlue",
    },

    [BUTTON_TYPES.SECONDARY]: {
        DEFAULT:
            "w-[150px] bg-bgAWhite text-textBrand border-solid border-1 border-borderDefaultBlue py-xs px-m leading-6",
        HOVER: "hover:bg-bgHoverGrey",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "disabled:border-borderDisabled",
        ACTIVE: "active:bg-bgPressedGrey",
    },

    [BUTTON_TYPES.SECONDARY_GRAY]: {
        DEFAULT:
            "w-[150px] bg-bgWhite text-textPrimary border-solid border-1 border-borderDefault py-xs px-m leading-6",
        HOVER: "hover:bg-bgHoverGrey",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "",
        ACTIVE: "active:bg-bgPressedGrey active:border-borderDefault",
    },

    [BUTTON_TYPES.TERTIARY]: {
        DEFAULT: "h-[40px]  text-textBrand rounded-zero whitespace-nowrap",
        HOVER: "hover:bg-bgHoverGrey",
        FOCUS: "focus:outline-none",
        DISABLED: "disabled:text-textTertiary disabled:bg-bgDisable",
        ACTIVE: "active:bg-bgPressedGrey",
    },

    [BUTTON_TYPES.DESTRUCTIVE]: {
        DEFAULT: "w-[150px] bg-bgDefaultDestructive py-xs px-m leading-6",
        HOVER: "hover:bg-bgHoverDestructive",
        FOCUS: "focus:bg-bgDefaultDestructive focus:shadow-btFocus",
        DISABLED:
            "disabled:border-solid  disabled:border-1 disabled:border-borderDisabled",
        ACTIVE: "active:bg-bgPressedDestructive",
    },

    [BUTTON_TYPES.ICON_ONLY]: {
        DEFAULT: "bg-bgDefaultBlue w-[56px] h-[56px] px-s py-s",
        HOVER: "hover:bg-bgHoverBlue",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "",
        ACTIVE: "active:bg-bgPressedBlue",
    },
    [BUTTON_TYPES.SEARCH_TYPE]: {
        DEFAULT: "bg-bgDefaultBlue rounded-l-zero",
        HOVER: "hover:bg-bgHoverBlue",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "",
        ACTIVE: "active:bg-bgPressedBlue",
    },
};
const buttonSearchTypeToSizes = {
    [BUTTON_SIZES.BIG]: "h-[56px] w-[56px] p-s rounded-r-medium2",
    [BUTTON_SIZES.SMALL]: "h-[48px] w-[48px] p-xs rounded-r-minimal",
};

const buttonTertiaryToSizes = {
    [BUTTON_SIZES.BIG]: "text-button px-xs py-xs2",
    [BUTTON_SIZES.SMALL]: "text-caption px-xs2 py-xs2",
};

const buttonSizesToClasses = {
    [BUTTON_SIZES.BIG]: "h-[48px]",
    [BUTTON_SIZES.SMALL]: "h-[40px]",
};

const buttonTypeToIconProps = {
    [BUTTON_TYPES.PRIMARY]: { color: theme.colors.iconWhite },
    [BUTTON_TYPES.SECONDARY]: { color: theme.colors.iconPrimary },
    [BUTTON_TYPES.SECONDARY_GRAY]: { color: theme.colors.iconPrimary },
    [BUTTON_TYPES.TERTIARY]: { color: theme.colors.iconPrimary },
    [BUTTON_TYPES.DESTRUCTIVE]: { color: theme.colors.iconWhite },
    [BUTTON_TYPES.ICON_ONLY]: { color: theme.colors.iconWhite },
    [BUTTON_TYPES.SEARCH_TYPE]: { color: theme.colors.iconWhite },
    
};

export type Props = {
    buttonType?: BUTTON_TYPES;
    className?: string;
    text?: string;
    icon?: ElementType;
    iconSide?: IconSideType;
    iconProps?: any;
    disabled?: boolean;
    size?: BUTTON_SIZES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    buttonType = BUTTON_TYPES.PRIMARY,
    className,
    text,
    icon: IconComponent,
    iconProps,
    disabled,
    iconSide = "left",
    size = BUTTON_SIZES.BIG,
    ...rest
}: Props) => {
    let sizeClassName = "";
    if (![BUTTON_TYPES.ICON_ONLY, BUTTON_TYPES.TERTIARY].includes(buttonType)) {
        sizeClassName = buttonSizesToClasses[size];
    }
    const getButtonClasses = useMemo(() => {
        return Object.values(buttonTypesToClasses[buttonType]).join(" ");
    }, [buttonType]);

    return (
        <button
            className={cn(
                " font-500 rounded-medium flex justify-center items-center gap-xs2 transition-colors duration-300 ",
                "focus:outline-none",
                {
                    "disabled:bg-bgDisable disabled:text-textDisabled":
                        disabled === true,
                },
                {
                    [buttonSearchTypeToSizes[size]]:
                        buttonType === BUTTON_TYPES.SEARCH_TYPE,
                },
                {
                    [buttonTertiaryToSizes[size]]:
                        buttonType === BUTTON_TYPES.TERTIARY,
                },

                getButtonClasses,
                sizeClassName,
                className
            )}
            disabled={disabled}
            {...rest}
        >
            {iconSide === "right" && text}
            {IconComponent && (
                <IconComponent
                    {...buttonTypeToIconProps[buttonType]}
                    size="24"
                    {...iconProps}
                    {...(disabled ? { color: theme.colors.textDisabled } : {})}
                />
            )}
            {iconSide === "left" && text}
        </button>
    );
};

export default Button;
