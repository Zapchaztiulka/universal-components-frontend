import FormField from '../FormField/FormField';
import { Combobox } from './Combobox';
import { Dropdown } from './Dropdown';
import Multiselect from './Multiselect/Multiselect';

const optionsFirst = ['За популярністю', 'Від дешевих до дорогих', 'Від дорогих до дешевих'];
const optionsThird = ['Назва 1', 'Назва 2', 'Назва 3', 'Назва 4', 'Назва 5', 'Назва 6', 'Назва 7'];

export const Page = () => {
    return (
        <>
            <header className="w-full bg-brand-900 text-bgWhite font-600 text-heading1 p-xl4">
                Dropdown & Multiselect & Combo-box / Components
            </header>
            <div className="flex mt-[160px] ml-[60px] flex-col">
                <div className="flex  ">
                    <div className="">
                        <Dropdown
                            value="За популярністю..."
                            options={optionsFirst}
                        />
                    </div>
                    <div className=" ml-[114px]">
                        <Dropdown
                            value="Оберіть значення.."
                            label="Label"
                            required={true}
                            options={optionsFirst}
                        />
                    </div>
                    <div className=" ml-[114px]">
                        <Dropdown
                            value="Оберіть значення.."
                            label="Назва"
                            required={true}
                            options={optionsThird}
                        />
                    </div>
                </div>
                <div className="flex mt-[60px]   ">
                    <div className="">
                        <Multiselect
                            placeholder="Оберіть значення.."
                            label="Назва"
                            required={true}
                            options={optionsThird}
                        />
                    </div>
                    <div className=" ml-[114px]">
                        <FormField
                            label="Назва"
                            isRequired={true}
                            message="Error message"
                            isError={true}
                        >
                            <Combobox
                                placeholder="Оберіть значення.."
                                options={optionsThird}
                                isError={true}
                                onChange={()=>{}}
                            />
                        </FormField>
                    </div>
                </div>
            </div>
        </>
    );
};
