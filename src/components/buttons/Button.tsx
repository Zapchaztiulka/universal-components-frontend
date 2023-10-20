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
}

export enum BUTTON_SIZES {
    SMALL = "small",
    BIG = "big",
}

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
        DEFAULT: "w-[150px] bg-bgBrandDark text-textContrast",
        HOVER: "hover:bg-bgHoverBlue",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "",
        ACTIVE: "active:bg-bgPressedBlue",
    },

    [BUTTON_TYPES.SECONDARY]: {
        DEFAULT:
            "w-[150px] bg-bgAWhite text-textBrand border-solid border-1 border-borderDefaultBlue",
        HOVER: "hover:bg-bgHoverGrey",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "disabled:border-borderDisabled",
        ACTIVE: "active:bg-bgPressedGrey",
    },

    [BUTTON_TYPES.SECONDARY_GRAY]: {
        DEFAULT:
            "w-[150px] bg-bgWhite text-textPrimary border-solid border-1 border-borderDefault",
        HOVER: "hover:bg-bgHoverGrey",
        FOCUS: "focus:shadow-btFocus",
        DISABLED: "",
        ACTIVE: "active:bg-bgPressedGrey active:border-borderDefault",
    },

    [BUTTON_TYPES.TERTIARY]: {
        DEFAULT: "h-[40px] text-textBrand px-xs py-xs2 rounded-zero",
        HOVER: "hover:bg-bgHoverGrey",
        FOCUS: "focus:outline-none",
        DISABLED: "disabled:text-textTertiary disabled:bg-bgDisable",
        ACTIVE: "active:bg-bgPressedGrey",
    },

    [BUTTON_TYPES.DESTRUCTIVE]: {
        DEFAULT: "w-[150px] bg-bgDefaultDestructive",
        HOVER: "hover:bg-bgHoverDestructive",
        FOCUS: "focus:bg-bgDefaultDestructive focus:shadow-btFocus",
        DISABLED:
            "disabled:border-solid  disabled:border-1 disabled:border-borderDisabled",
        ACTIVE: "active:bg-bgPressedDestructive",
    },

    [BUTTON_TYPES.ICON_ONLY]: {
        DEFAULT: "bg-bgDefaultBlue w-[56px] h-[56px] px-s",
        HOVER: "",
        FOCUS: "",
        DISABLED: "",
        ACTIVE: "",
    },
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
};

export type Props = {
    buttonType?: BUTTON_TYPES;
    className?: string;
    text?: string;
    icon?: ElementType;
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
                "leading-6 font-500 py-xs px-m rounded-medium flex justify-center items-center gap-xs2 transition-colors duration-300 ",
                "focus:outline-none",
                {
                    "disabled:bg-bgDisable disabled:text-textDisabled":
                        disabled === true,
                },

                getButtonClasses,
                sizeClassName,
                className
            )}
            disabled={disabled}
            {...rest}
        >
            {IconComponent && (
                <IconComponent
                    {...buttonTypeToIconProps[buttonType]}
                    size="24"
                    {...iconProps}
                    {...(disabled ? { color: theme.colors.textDisabled } : {})}
                />
            )}
            {text}
        </button>
    );
};

export default Button;
