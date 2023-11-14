

import { FC, useState, ReactElement } from "react";
import { ArrowDownIcon } from "../../icons";
import cn from "clsx";
import { SelectOption } from "./../SelectOption";
import theme from "../../../../presets";


type ComboboxProps = {
  name?: string,
  label?: string,
  value?: string,
  options?: string[],
  required?: boolean,
  icon?: ReactElement,
}



const Combobox: FC<ComboboxProps> = ({
  name = "customSelect",
  label,
  value = "Оберіть значення...",
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

  const updateValue = (value: string) => {
    setState((prev) => ({ ...prev, showOptions: false, value }));
  };

  if (!icon) icon = (<ArrowDownIcon />);
    const handleSearch = (e) => {
    console.log('', e);
}
 
  return (
    <div className="relative w-[343px] transition transition-all duration-500">
      <div>
        <label className="text-textSecondary">{label}</label>
        {required ? <span className="text-textError"> *</span> : '' }
      </div>
      
          <input type="hidden" name={name} value={state.value} />
         
          

        <button
        type="button"
          className={cn("w-full text-textInputDefault relative w-full bg-bgWhite p-xs text-left cursor-default border-1 border-solid  border-borderDefault rounded-minimal  active:bg-bgPressedGrey",
            {'text-textInputActive': state.showOptions  }
          )}
          onClick={handleClick}
          >
          <input type="text" onChange={handleSearch}/>
        <span className="flex items-center">
          <span className={cn("ml-3 block truncate hover:text-textInputActive",
            { 'text-textInputActive': state.showOptions }
            )}
          >{state.value}</span>
        </span>
        <span className={cn("absolute right-[12px] top-[12px] flex items-center pointer-events-none  transition transition-all duration-100",
          {'rotate-180': state.showOptions})}>
          {icon && <ArrowDownIcon color={state.showOptions ? theme.colors.iconPrimary : theme.colors.iconSecondary } />}
        </span>
      </button>
      {state.showOptions && (
        <div className="mt-xs4 bg-bgWhite absolute w-[343px] z-40">
          <ul className="border-1 border-solid border-borderDefault rounded-minimal py-1 overflow-auto focus:outline-none">
            {options.map((option, idx) => (
              <SelectOption
                key={idx}
                option={option}
                active={state.value === option}
                updateValue={updateValue}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};



export default Combobox;
