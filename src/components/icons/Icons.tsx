import { BasketIcon, LogoIcon, LogoIconWithText, ArrowLeftIcon, ArrowRightIcon, ArrowDownIcon, ArrowUpIcon, ChevronsLeftIcon, ChevronsRightIcon, CloseIcon, CheckIcon, PlusIcon, MinusIcon, EllipseIcon, EyeIcon, EyeOffIcon, MailIcon, TrashIcon, UploadIcon, QuestionIcon, ZoomInIcon, ZoomOutIcon, AlertIcon, NumberIcon, EmptyImageIcon, LoadingIcon, BasketCountIcon, LoaderIcon, IconButton, OrdersCountIcon, OrdersIcon, UserImageIcon } from "."
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
            component={<BasketIcon />}
            componentName="BasketIcon"
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
            component={<EyeIcon size="16" />}
            componentName="EyeIcon"
            width={100}
            description="size 16"
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
            component={<AlertIcon variant="warning" />}
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
        <ShowContainer
            component={<NumberIcon number={5} />}
            componentName="NumberIcon"
            width={100}
            description="number=5"
        />
        <ShowContainer
            component={<EmptyImageIcon />}
            componentName="EmptyImageIcon"
            width={100}
        />
        <ShowContainer
            component={<EmptyImageIcon size="big" />}
            componentName="EmptyImageIcon"
            width={120} height={150}
            description="size big"
        />
        <ShowContainer
            component={<LoadingIcon />}
            componentName="LoadingIcon"
            width={100}
        />
        <ShowContainer
            component={<BasketCountIcon />}
            componentName="BasketCountIcon"
            width={100}
        />
        <ShowContainer
            component={<LoaderIcon />}
            componentName="LoaderIcon"
            width={100}
            bgColorClassName="bg-bgGreyDark"
        />
        <ShowContainer
            component={<IconButton><PlusIcon /></IconButton>}
            componentName="IconButton"
            width={100}
            description="with <PlusIcon />"
        />
        <ShowContainer
            component={<IconButton disabled><PlusIcon /></IconButton>}
            componentName="IconButton"
            width={100}
            description="disabled"
        />
        <ShowContainer
            component={<IconButton active><PlusIcon /></IconButton>}
            componentName="IconButton"
            width={100}
            description="active"
        />
        <ShowContainer
            component={<OrdersCountIcon />}
            componentName="OrdersCountIcon"
            width={100}
        />
        <ShowContainer
            component={<OrdersIcon />}
            componentName="OrdersIcon"
            width={100}
        />
        <ShowContainer
            component={<UserImageIcon imgSrc="https://s3-alpha-sig.figma.com/img/f3ae/d919/f9e6f3e260c7d2849b8b9c5cb324673e?Expires=1699228800&Signature=Qr407QaWEq5zQJXGjptmVjkamEaMQQ-fL4svvLpbgiGoyn2cvleXLdbHE4FzI7228bhWf6yYHVocqBIY-ZIDmhehR3CINcPc-mb6fVfPmHAYrHaAix3vsDr4lK~B9NYZl31j5Ge-r82nV2iTZ536z2ugBn5U8mefHjJyKodEgQ633DiZZuFvVEV39D4lsvGmzbW2u6W2zIfT6ytd50szF6qk1vpa8ZXw58YNBRFPUdmqK3M1WMjrtAg3VJPzjJy-dxXPo5RZNOQLSI8SAeedk0yHXXO0U3iTEQQv6xJAZ8iShnjC-FIaYznY39tuGtSEeGsYlnRrv0QGIZ~FyT6qHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />}
            componentName="UserImageIcon"
            width={100}
            description="imgSrc='path...'"
        />
        <ShowContainer
            component={<UserImageIcon text="ab" />}
            componentName="UserImageIcon"
            width={100}
            description="text='ab'"
        />
        <ShowContainer
            component={<UserImageIcon />}
            componentName="UserImageIcon"
            width={100}
        />
    </div>
}