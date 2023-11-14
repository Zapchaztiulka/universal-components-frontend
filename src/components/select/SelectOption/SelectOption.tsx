import { FC, ReactElement } from "react";
import { CheckIcon } from "../../icons";


type SelectOptionProps = {
    option: string, 
    active?: boolean,
    multiple?: boolean,
    updateValue: (id: string) => void,
    icon?:  ReactElement,
}
  
const SelectOption: FC<SelectOptionProps> = ({ option, active = false, multiple=false, updateValue, icon } ) => {
    const handleChange = (e: MouseEvent) => {
      e.preventDefault();
      updateValue(option);
    };
  
    if (!icon) icon = (<CheckIcon />);
    
    return (
      <li
        className="w-full cursor-default select-none relative p-xs  flex gap-xs2  hover:bg-bgHoverGrey active:bg-bgPressedGrey"
        onClick={handleChange}
        >
            {multiple ? (<input type="checkbox" checked={active} />) :
                (active && (<span className="absolute right-[12px] top-[12px] flex items-center ">{icon}</span>))
        }
            <div className="flex items-center">
               
          <span className="ml-3 block font-normal truncate">{option}</span>
        </div>
       
      </li>
    );
};
  
export default SelectOption