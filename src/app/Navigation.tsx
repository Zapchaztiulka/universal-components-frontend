import { Link } from "react-router-dom";
import TypesOfComponents from "./TypesOfComponents";

export const Navigation = () => {
    return <nav style={{display:"flex", gap: "10px"}}>
        {Object.values(TypesOfComponents).map((type:string) => 
            <Link 
                key={type} 
                to={type}
            >
                    {type}
            </Link>
        )}
    </nav>
}