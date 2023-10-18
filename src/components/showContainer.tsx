import { ReactElement } from "react"

export const ShowContainer = ({
    component,
    componentName,
    description,
    width,
    height,
    bgColorClassName
}:{
    component:ReactElement;
    componentName:string;
    description?:string;
    width?:number;
    height?:number;
    bgColorClassName?:string;
}) => {
    return <div className="inline-block p-xs border-black border-solid border-1">

        <div className=" text-body">
            component name:
            <p className="text-heading3">{componentName}</p>
        </div>
        
        <div className={`
            ${width ? `w-[${width}px]` : "w-[200px]"} 
            ${height ? `w-[${height}px]` : "h-[100px]"}
            ${bgColorClassName ? bgColorClassName : "bg-bgWhite"}
            border-borderDefault border-solid border-2
        `}>
            {component}
        </div>
        <p className=" text-xs">{description ? description : "default"}</p>
    </div>
}