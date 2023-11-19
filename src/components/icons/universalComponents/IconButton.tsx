import theme from "../../../../presets"
import { cloneElement, HTMLAttributes } from 'react'

export type Props = {
    children?: JSX.Element;
    disabled?: boolean;
    active?: boolean;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

const IconButton = ({
    children,
    disabled,
    active,
    className,
    ...props
}: Props ) => {

    const childrenWithPropsActive = cloneElement(children as React.ReactElement<any>, {
        color: theme.colors.iconBrand
    });

    const childrenWithPropsDisabled = cloneElement(children as React.ReactElement<any>, {
        color: theme.colors.borderDisabled
    });

    const disabledStyle = `w-fit bg-bgDisable cursor-not-allowed ${className}`;

    return (
        <div {...props} className={disabled ? `${disabledStyle}` : `w-fit hover:bg-bgHoverGrey active:bg-bgPressedGrey ${className}`}>
            {active ? childrenWithPropsActive : (disabled ? childrenWithPropsDisabled : children)}
        </div>
    );
};

export default IconButton; 