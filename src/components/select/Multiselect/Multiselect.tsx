import { FC, ReactElement, useState } from "react";
import { ArrowDownIcon } from "../../icons";
import cn from 'clsx';
import theme from "../../../../presets";

import { SelectOption } from "../SelectOption";


type MultiselectProps = {
    name?: string,
    label?: string,
    placeholder?: string,
    value?: string[],
    options?: string[],
    required?: boolean,
    icon?: ReactElement,
  }
const Multiselect:FC<MultiselectProps> = ({
    name = "customSelect",
    label,
    placeholder = "Оберіть значення...",
    value = [],
    options = [],
    required = false, 
    icon
  }) => {
    const [state, setState] = useState({
      value,
      showOptions: false
    });
  
    const handleClick = (e: Event) => {
      e.preventDefault();
      setState((prev) => ({ ...prev, showOptions: !state.showOptions }));
    };
  
    const updateValue = (id: string) => {
        setState((prev) => {
            let newValue
            if (prev.value.includes(id)) {
                newValue =  prev.value.filter(item => item !== id)
            } else {
                newValue =  [...prev.value, id]
            } 
            return {
                ...prev, value: newValue
            }
        })
    };
  
    if (!icon) icon = (<ArrowDownIcon />);

    const optionPlaceholder = () => {
        const len = state.value.length
        if (len == 0) {
            return placeholder
        } else if (len < 3){
            return state.value.join('; ')
        } else {
            return `Обрано ${len} елементи`
        }
    }
  
    return (
      <div className="relative w-[343px] transition transition-all duration-500">
        <div className="">
          <label className="text-textSecondary">{label}</label>
          {required ? <span className="text-textError"> *</span> : '' }
        </div>
        
        <input type="hidden" name={name} value={state.value} />  
          <button
            type="button"
            className={cn("w-full text-textInputDefault relative w-full bg-bgWhite p-xs text-left cursor-default border-1 border-solid  border-borderDefault rounded-minimal active:bg-bgPressedGrey",
              {'text-textInputActive': state.showOptions  }
            )}
            onClick={handleClick}
          >
          <span className="flex items-center">
            <span className={cn("ml-3 block truncate flex gap-xs3  hover:text-textInputActive",
              { 'text-textInputActive': state.showOptions }
              )}
            >{optionPlaceholder()}</span>
          </span>
          <span className={cn("absolute right-[12px] top-[12px] flex items-center pointer-events-none  transition transition-all duration-100",
            {'rotate-180': state.showOptions})}>
            {icon && <ArrowDownIcon color={state.showOptions ? theme.colors.iconPrimary : theme.colors.iconSecondary } />}
          </span>
        </button>
        {state.showOptions && (
          <div className="mt-xs4 absolute w-[343px] z-40 bg-bgWhite">
            <ul className="border-1 border-solid border-borderDefault rounded-minimal py-1 overflow-auto focus:outline-none">
              {options.map((option, idx) => (
                <SelectOption
                  key={idx}
                  option={option}
                  multiple={true}
                  active={state.value.includes(option)}
                  updateValue={updateValue}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  


export default Multiselect