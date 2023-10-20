import { Basket24 } from "../icons";
import Button, {
    BUTTON_SIZES,
    BUTTON_TYPES,
    buttonTypesToClasses,
    ButtonMapItemType,
    Props,
} from "./Button";

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

const renderBlockColors = (
    buttonType: BUTTON_TYPES,
    categoryTitle: string,
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
                        {renderButtons({
                            text: "Button",
                            buttonType: buttonType,
                            icon: Basket24,
                            className: "",
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex justify-start gap-xl4 pb-xl4">
                        {renderButtons({
                            text: "Button",
                            buttonType: buttonType,
                            icon: Basket24,
                            className: focussedClassName,
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex  justify-start gap-xl4 pb-xl4">
                        {renderButtons({
                            text: "Button",
                            buttonType: buttonType,
                            icon: Basket24,
                            className: hoverClassName,
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex  justify-start gap-xl4 pb-xl4">
                        {renderButtons({
                            text: "Button",
                            buttonType: buttonType,
                            icon: Basket24,
                            className: activeClassName,
                            withSmall: withSmall,
                        })}
                    </div>
                    <div className="components__normal flex justify-start gap-xl4">
                        {renderButtons({
                            text: "Button",
                            buttonType: buttonType,
                            icon: Basket24,
                            disabled: true,
                            withSmall: withSmall,
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Page = () => {
    return (
        <div>
            <header className="bg-brand-900 text-bgWhite font-600 text-heading1 p-xl4">
                Button / Component
            </header>

            {renderBlockColors(BUTTON_TYPES.PRIMARY, "Primary")}

            {renderBlockColors(BUTTON_TYPES.SECONDARY, "Secondary color")}

            {renderBlockColors(BUTTON_TYPES.SECONDARY_GRAY, "Secondary grey")}

            {renderBlockColors(BUTTON_TYPES.DESTRUCTIVE, "Destructive", false)}
        </div>
    );
};
