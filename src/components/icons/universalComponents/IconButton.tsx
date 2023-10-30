import theme from "../../../../presets"
import { cloneElement } from 'react'

const IconButton = ({
    children,
    disabled,
    active
}: {
    children?: JSX.Element;
    disabled?: boolean;
    active?: boolean;
}) => {

    const childrenWithPropsActive = cloneElement(children as React.ReactElement<any>, {
        color: theme.colors.iconBrand
    });

    const childrenWithPropsDisabled = cloneElement(children as React.ReactElement<any>, {
        color: theme.colors.borderDisabled
    });

    const disabledStyle = `w-fit bg-bgDisable cursor-not-allowed`;

    return (
        <div className={disabled ? `${disabledStyle}` : `w-fit hover:bg-bgHoverGrey active:bg-bgPressedGrey`}>
            {active ? childrenWithPropsActive : (disabled ? childrenWithPropsDisabled : children)}
        </div>
    );
};

export default IconButton; 