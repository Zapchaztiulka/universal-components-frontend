import { ReactElement } from "react"

export const ShowContainer = ({
    component,
    componentName,
    description,
    width,
    height,
    backgroundColor
}:{
    component:ReactElement;
    componentName:string;
    description?:string;
    width?:number;
    height?:number;
    backgroundColor?:string;
}) => {
    return <div className="inline-block p-xs border-black border-solid border">

        <div className=" text-xs">
            component name:
            <p className="text-xl">{componentName}</p>
        </div>
        
        <div className={`
            ${width ? `w-[${width}px]` : "w-[200px]"} 
            ${height ? `w-[${height}px]` : "h-[100px]"}
            ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-bgWhite"}
            border-borderDefault border-solid border-2
        `}>
            {component}
        </div>
        <p className=" text-xs">{description ? description : "default"}</p>
    </div>
}