import { BasketIcon } from "../icons";
import { ElementType } from "react";
import Link from "../link/Link";
import Button, {
    BUTTON_SIZES,
    BUTTON_TYPES,
    buttonTypesToClasses,
    ButtonMapItemType,
    Props,
} from "./Button";

type renderBlockColorsProps = {
    text?: string;
    buttonType?: BUTTON_TYPES;
    icon?: ElementType;
    className?: string;
    withSmall?: boolean;
    disabled?: boolean;
};

const getClassByType = (
    buttonType: BUTTON_TYPES,
    mapItem: keyof ButtonMapItemType
) => {
    const buttonTypeWithClasses = buttonTypesToClasses[buttonType];

    return `!${buttonTypeWithClasses[mapItem]
        .replaceAll(`${mapItem.toLowerCase()}:`, "")
        .split(" ")
        .join(" !")}`;
};

const renderButtons = ({
    withSmall = true,
    icon,
    ...rest
}: Props & { withSmall?: boolean }) => {
    return (
        <>
            <Button {...rest} />
            <Button {...rest} icon={icon} />
            {withSmall && (
                <>
                    <Button {...rest} size={BUTTON_SIZES.SMALL} />
                    <Button {...rest} icon={icon} size={BUTTON_SIZES.SMALL} />
                </>
            )}
        </>
    );
};

const renderTertiaryButtons = ({
    withSmall = true,
    icon,
    ...rest
}: Props & { withSmall?: boolean }) => {
    return (
        <div className="flex ">
            <div className="flex gap-xl">
                <Button {...rest} />
                <Button {...rest} icon={icon} />
                <Button {...rest} icon={icon} iconSide="right" />
            </div>

            {withSmall && (
                <div style={{ marginLeft: "180px" }} className="flex gap-xl">
                    <Button {...rest} size={BUTTON_SIZES.SMALL} />
                    <Button {...rest} icon={icon} size={BUTTON_SIZES.SMALL} />
                    <Button
                        {...rest}
                        icon={icon}
                        iconSide="right"
                        size={BUTTON_SIZES.SMALL}
                    />
                </div>
            )}
        </div>
    );
};

const renderIcons = ({
    icon,
    withSmall = false,
    ...rest
}: Props & { withSmall?: boolean }) => {
    return (
        <>
            <Button {...rest} icon={icon} />
            {withSmall && (
                <Button {...rest} icon={icon} size={BUTTON_SIZES.SMALL} />
            )}
        </>
    );
};

const renderBlockColors = (
    buttonType: BUTTON_TYPES,
    categoryTitle: string,
    text: string,
    itemRenderer: (Props: renderBlockColorsProps) => JSX.Element,
    withSmall = true
) => {
    const focussedClassName = getClassByType(buttonType, "FOCUS");
    const hoverClassName = getClassByType(buttonType, "HOVER");
    const activeClassName = getClassByType(buttonType, "ACTIVE");

    return (
        <div className="flex">
            <div
                className="text-heading2 text-textSecondary font-600 pl-sPlus"
                style={{ marginTop: "160px" }}
            >
                <p className="mb-xl4 h-[48px]">Normal</p>
                <p className="mb-xl4 h-[48px]">Focussed</p>
                <p className="mb-xl4 h-[48px]">Hover</p>
                <p className="mb-xl4 h-[48px]">Pressed</p>
                <p className="mb-xl4 h-[48px]">Disabled</p>
            </div>
            <div className="components p-xl4">
                <div className="components__title text-heading3 mb-m font-600">
                    {categoryTitle}
                </div>
                <div className="components__block border-1 border-borderDefault border-dashed rounded-large p-m ">
                    <div className="components__normal flex gap-xl4 pb-xl4 justify-start">
                        {itemRenderer({
                            text: text,
                            buttonType: buttonType,
                            icon: BasketIcon,
                            className: "",
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex justify-start gap-xl4 pb-xl4">
                        {itemRenderer({
                            text: text,
                            buttonType: buttonType,
                            icon: BasketIcon,
                            className: focussedClassName,
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex  justify-start gap-xl4 pb-xl4">
                        {itemRenderer({
                            text: text,
                            buttonType: buttonType,
                            icon: BasketIcon,
                            className: hoverClassName,
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex  justify-start gap-xl4 pb-xl4">
                        {itemRenderer({
                            text: text,
                            buttonType: buttonType,
                            icon: BasketIcon,
                            className: activeClassName,
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex justify-start gap-xl4">
                        {itemRenderer({
                            text: text,
                            buttonType: buttonType,
                            icon: BasketIcon,
                            disabled: true,
                            withSmall: withSmall,
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderTextLink = () => {
    return (
        <div className="flex">
            <div
                className="text-heading2 text-textSecondary font-600 pl-sPlus"
                style={{ marginTop: "160px" }}
            >
                <p className="mb-m h-[48px]">Normal</p>
                <p className="mb-m h-[48px]">Hover</p>
                <p className="mb-m h-[48px]">Disabled</p>
            </div>
            <div className="components p-xl4">
                <div className="components__title text-heading3 mb-m font-600">
                    Text link
                </div>
                <div className="components__block border-1 border-borderDefault border-dashed rounded-large p-m pt-m1">
                    <div className="components__normal flex flex-col gap-xl justify-between">
                        <Link text="Textlink" href="#" />
                        <Link
                            text="Textlink"
                            className="!text-textBrand underline underline-offset-2"
                        />
                        <Link href="/api" text="Textlink" disabled={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderLoading = () => {
    const activeClassName = getClassByType(BUTTON_TYPES.PRIMARY, "ACTIVE");
    return (
        <div className="flex">
            <div
                className="text-heading2 text-textSecondary font-600 pl-sPlus"
                style={{ marginTop: "160px" }}
            >
                <p className="mb-xl3 h-[48px]">Normal</p>
                <p className="mb-xl3 h-[48px]">Pressed</p>
                <p className="mb-xl3 h-[48px]">Disabled</p>
            </div>
            <div className="components p-xl4">
                <div className="components__title text-heading3 mb-m font-600">
                    Loader
                </div>
                <div className="components__block border-1 border-borderDefault border-dashed rounded-large p-m pt-m1">
                    <div className="components__normal flex flex-col gap-xl justify-between">
                        <Button isLoading />
                        <Button isLoading className={activeClassName} />
                        <Button isLoading disabled />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Page = () => {
    return (
        <>
            <header className="bg-brand-900 text-bgWhite font-600 text-heading1 p-xl4">
                Button / Component
            </header>
            {renderBlockColors(
                BUTTON_TYPES.PRIMARY,
                "Primary",
                "Button",
                renderButtons
            )}
            {renderBlockColors(
                BUTTON_TYPES.SECONDARY,
                "Secondary color",
                "Button",
                renderButtons
            )}
            {renderBlockColors(
                BUTTON_TYPES.SECONDARY_GRAY,
                "Secondary grey",
                "Button",
                renderButtons
            )}
            {renderBlockColors(
                BUTTON_TYPES.TERTIARY,
                "Tertiary",
                "Показати ще",
                renderTertiaryButtons
            )}
            {renderBlockColors(
                BUTTON_TYPES.DESTRUCTIVE,
                "Destructive",
                "Button",
                renderButtons,
                false
            )}
            {renderBlockColors(
                BUTTON_TYPES.ICON_ONLY,
                "Icon only",
                "",
                renderIcons,
                false
            )}
            {renderBlockColors(
                BUTTON_TYPES.SEARCH_TYPE,
                "Search type",
                "",
                renderIcons,
                true
            )}
            {renderTextLink()}

            {renderLoading()}
        </>
    );
};
