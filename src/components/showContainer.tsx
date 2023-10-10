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
    componentName: string;
    description?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
}) => {
    return <div className="inline-block p-4 border-black border-solid border-2">

        <p>{componentName}</p>
        
        <div className={`
            ${width ? width : "w-[200px]"} 
            ${height ? height : "h-[100px]"}
            ${backgroundColor ? backgroundColor : "bg-white"}
            border-black border-solid border-2
        `}>

            {component}

        </div>

        {description && <p>{description}</p>}
    </div>
}