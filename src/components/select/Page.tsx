import FormField from '../FormField/FormField';
import { Input } from '../inputs';
import { Combobox } from './Combobox';
import { Dropdown } from './Dropdown';
import Multiselect from './Multiselect/Multiselect';

const optionsFirst = ['За популярністю', 'Від дешевих до дорогих', 'Від дорогих до дешевих'];
const optionsSecond = ['Варіант 1', 'Варіант 2', 'Варіант 3', 'Варіант 4'];
const optionsThird = ['Назва 1', 'Назва 2', 'Назва 3', 'Назва 4', 'Назва 5', 'Назва 6', 'Назва 7'];

export const Page = () => {
    return (
        <>
            <header className="w-full bg-brand-900 text-bgWhite font-600 text-heading1 p-xl4">
                Dropdown & Multiselect & Combo-box / Components
            </header>
            <div className="my-[160px] mx-xl3 grid grid-cols-3 gap-[60px]">
                <Dropdown
                    placeholder="За популярністю..."
                    options={optionsFirst}
                    onChange={() => {}}
                />

                <FormField
                    label="Label"
                    isRequired={true}
                >
                    <Dropdown
                        placeholder="Оберіть значення.."
                        options={optionsFirst}
                        onChange={() => {}}
                    />
                </FormField>

                <FormField
                    label="Назва"
                    isRequired={true}
                >
                    <Dropdown
                        placeholder="Оберіть значення.."
                        options={optionsSecond}
                        onChange={() => {}}
                    />
                </FormField>
                {/* ////1 */}

                <FormField
                    label="Назва"
                    isRequired={true}
                >
                    <Multiselect
                        placeholder="Оберіть значення.."
                        options={optionsThird}
                        onChange={() => {}}
                    />
                </FormField>

                <FormField
                    label="Назва"
                    isRequired={true}
                >
                    <Combobox
                        placeholder="Оберіть значення.."
                        options={optionsSecond}
                        onChange={() => {}}
                    />
                </FormField>

                <FormField
                    label="Назва"
                    isRequired={true}
                >
                    <Combobox
                        placeholder="Оберіть значення.."
                        options={optionsThird}
                        onCreate={() => {}}
                        onChange={() => {}}
                    />
                </FormField>

                <div className="min-w-[350px]">
                    <FormField
                        label="Label"
                        isRequired={true}
                        className="flex gap-xs"
                    >
                        <Input placeholder="12" />
                        <Dropdown
                            placeholder="штук"
                            options={optionsSecond}
                            width={150}
                            onChange={() => {}}
                        />
                    </FormField>
                </div>

                <FormField
                    label="Назва"
                    isRequired={true}
                    isMessage={true}
                    message="Success message"
                    isSuccess={true}
                >
                    <Combobox
                        placeholder="Оберіть значення.."
                        options={optionsThird}
                        isSuccess={true}
                        onChange={() => {}}
                    />
                </FormField>

                <FormField
                    label="Назва"
                    isRequired={true}
                    message="Error message"
                    isMessage={true}
                    isError={true}
                >
                    <Combobox
                        placeholder="Оберіть значення.."
                        options={optionsThird}
                        isError={true}
                        onChange={() => {}}
                    />
                </FormField>
            </div>
        </>
    );
};
