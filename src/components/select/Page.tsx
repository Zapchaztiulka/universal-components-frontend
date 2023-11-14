import { Select } from "."
import Multiselect from "./Multiselect/Multiselect"

const optionsFirst = ["За популярністю", "Від дешевих до дорогих", "Від дорогих до дешевих"]
const optionsThird = ["Назва 1", "Назва 2", "Назва 3", "Назва 4", "Назва 5"]


export const Page = () => {
    return (
        <>
             <header className="w-full bg-brand-900 text-bgWhite font-600 text-heading1 p-xl4">
                Dropdown & Multiselect & Combo-box / Components
            </header>
            <div className="flex mt-[160px] ml-[60px] flex-col">
                 <div className="">
                    <Select value="За популярністю..." options={optionsFirst} />
                </div>
                <div className=" ml-[114px]">
                    <Select value="Оберіть значення.." label="Label" required={ true} options={optionsFirst}/>
                </div>
                <div className=" ml-[114px]">
                    <Select value="Оберіть значення.." label="Назва" required={ true} options={optionsThird}/>
                </div>
                <div className=" ml-[114px]">
                    <Multiselect placeholder="Оберіть значення.." label="Назва" required={ true} options={optionsThird}/>
                </div>
            </div>
        </>
    )
}