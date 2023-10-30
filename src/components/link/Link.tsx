import cn from "clsx";

export type LinkProps = {
    text?: string;
    href?: string;
    disabled?: boolean;
    className?: string;
};

const mapPropsToClasses = {
    normal: "px-xs3 text-textPrimary",
    disabled:
        "aria-disabled:text-textDisabled aria-disabled:pointer-events-none aria-disabled:underline aria-disabled:underline-offset-2",
};

const Link = ({
    href,
    className,
    text = "Link Text",
    disabled = false,
    ...rest
}: LinkProps) => {
    const classes = disabled
        ? mapPropsToClasses.disabled
        : mapPropsToClasses.normal;

    return (
        <>
            <a
                href={href}
                className={cn(
                    " text-body transition-colors duration-300 hover:text-textBrand  hover:underline hover:underline-offset-2 ",
                    classes,
                    className
                )}
                aria-disabled={disabled}
                {...rest}
            >
                {text}
            </a>
        </>
    );
};

export default Link;
