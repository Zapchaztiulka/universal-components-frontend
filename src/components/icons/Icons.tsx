import { Basket24, LogoIcon, LogoIconWithText, ArrowLeftIcon, ArrowRightIcon, ArrowDownIcon, ArrowUpIcon, ChevronsLeftIcon, ChevronsRightIcon, CloseIcon, CheckIcon, PlusIcon, MinusIcon, EllipseIcon, EyeIcon, EyeOffIcon, MailIcon, TrashIcon, UploadIcon, QuestionIcon, ZoomInIcon, ZoomOutIcon, AlertIcon, NumberIcon } from "."
import theme from "../../../presets"
import { ShowContainer } from "../showContainer"

export const Icons = () => {
    return <div>
        <ShowContainer
            component={<LogoIcon />}
            componentName="LogoIcon"
            width={100}
        />
        <ShowContainer
            component={<LogoIcon color1={theme.colors.iconWhite} color2={theme.colors.iconWhite} />}
            componentName="LogoIcon"
            description="with white color props"
            width={100}
            bgColorClassName="bg-bgGreyDark"
        />
        <ShowContainer
            component={<LogoIconWithText />}
            componentName="LogoIconWithText"
            width={260}
        />
        <ShowContainer
            component={<LogoIconWithText color1="black" color2="black" color3="black" />}
            componentName="LogoIconWithText"
            description="with black color props"
            width={260}
        />
        <ShowContainer
            component={<Basket24 />}
            componentName="Basket24"
            width={100}
        />
        <ShowContainer
            component={<ArrowLeftIcon />}
            componentName="ArrowLeftIcon"
            width={100}
        />
        <ShowContainer
            component={<ArrowRightIcon />}
            componentName="ArrowRightIcon"
            width={100}
        />
        <ShowContainer
            component={<ArrowDownIcon />}
            componentName="ArrowDownIcon"
            width={100}
        />
        <ShowContainer
            component={<ArrowUpIcon />}
            componentName="ArrowUpIcon"
            width={100}
        />
        <ShowContainer
            component={<ChevronsLeftIcon />}
            componentName="ChevronsLeftIcon"
            width={100}
        />
        <ShowContainer
            component={<ChevronsRightIcon />}
            componentName="ChevronsRightIcon"
            width={100}
        />
        <ShowContainer
            component={<CloseIcon />}
            componentName="CloseIcon"
            width={100}
        />
        <ShowContainer
            component={<CheckIcon />}
            componentName="CheckIcon"
            width={100}
        />
        <ShowContainer
            component={<PlusIcon />}
            componentName="PlusIcon"
            width={100}
        />
        <ShowContainer
            component={<MinusIcon />}
            componentName="MinusIcon"
            width={100}
        />
        <ShowContainer
            component={<EllipseIcon />}
            componentName="EllipseIcon"
            width={100}
        />
        <ShowContainer
            component={<EyeIcon />}
            componentName="EyeIcon"
            width={100}
        />
        <ShowContainer
            component={<EyeOffIcon />}
            componentName="EyeOffIcon"
            width={100}
        />
        <ShowContainer
            component={<TrashIcon />}
            componentName="TrashIcon"
            width={100}
        />
        <ShowContainer
            component={<MailIcon />}
            componentName="MailIcon"
            width={100}
        />
        <ShowContainer
            component={<UploadIcon />}
            componentName="UploadIcon"
            width={100}
        />
        <ShowContainer
            component={<ZoomInIcon />}
            componentName="ZoomInIcon"
            width={100}
        />
        <ShowContainer
            component={<ZoomOutIcon />}
            componentName="ZoomOutIcon"
            width={100}
        />
        <ShowContainer
            component={<QuestionIcon />}
            componentName="QuestionIcon"
            width={100}
        />
        <ShowContainer
            component={<AlertIcon />}
            componentName="AlertIcon"
            width={100}
        />
        <ShowContainer
            component={<AlertIcon variant="warning"/>}
            componentName="AlertIcon"
            width={100}
            description="variant='warning'"
        />
        <ShowContainer
            component={<AlertIcon variant="error" />}
            componentName="AlertIcon"
            width={100}
            description="variant='error'"
        />
        <ShowContainer
            component={<AlertIcon variant="brand" />}
            componentName="AlertIcon"
            width={100}
            description="variant='brand'"
        />
        <ShowContainer
            component={<AlertIcon variant="success" />}
            componentName="AlertIcon"
            width={100}
            description="variant='success'"
        />
        <ShowContainer
            component={<NumberIcon />}
            componentName="NumberIcon"
            width={100}
        />
    </div>
}