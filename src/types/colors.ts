export interface BackgroundColors {
    bgWhite:string,
    bgContrast:string,
    bgGreyDark:string,
    bgGreyLigth:string,
    bgBrandDark:string,
    bgBrandLight1:string,
    bgBrandLight2:string,
    bgBrandLight3:string,
    bgErrorDark:string,
    bgErrorLight:string,
    bgSuccessDark:string,
    bgSuccessLight:string,
    bgWarningDark:string,
    bgWarningLight:string,
    bgPressedGrey:string,
    bgPressedBlue:string,
    bgPressedDestructive:string,
    bgHover:string,
    bgHoverGrey:string,
    bgHoverBlue:string,
    bgHoverDestructive:string,
    bgDefaultBlue:string,
    bgDefaultDestructive:string,
    bgImg:string,
    bgDisable:string,
}

export interface IconColors {
    iconWhite: string,
    iconPrimary: string,
    iconSecondary: string,
    iconTertiary: string,
    iconContrast: string,
    iconBrand: string,
    iconBrandDark: string,
    iconError: string,
    iconSuccess: string,
    iconWarning: string,
    iconDisabled: string,
}

export interface TextColors {
    
}

export interface BorderColors {
    
}

export interface StaticColors {
    
}

export type BackgroundColorsType = keyof BackgroundColors