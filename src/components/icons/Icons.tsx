import { LogoIcon, LogoIconWithText } from "."

export const Icons = () => {
    return <div>
        <div>
            <p><b>LogoIcon</b> default</p>
            <LogoIcon />
        </div>

        <div>
            <p><b>LogoIcon</b> with color props</p>
            <LogoIcon color1="black" color2="black"/>
        </div>

        <div>
            <p><b>LogoIconWithText</b> default</p>
            <LogoIconWithText />
        </div>

        <div>
            <p><b>LogoIconWithText</b> with color props</p>
            <LogoIconWithText color1="black" color2="black" color3="black"/>
        </div>
    </div>
}