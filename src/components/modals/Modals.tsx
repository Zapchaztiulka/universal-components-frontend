import { Modal } from '.'
import { useState } from 'react'
import { createPortal } from 'react-dom';
import { CloseIcon, LightningIcon } from '../icons'
import { Button } from '../buttons'
import { Input } from '../inputs'
import { InputTypes, InputTypesFigma } from "../inputs/universalComponents/Input.types";
import { BUTTON_TYPES } from "../buttons/Button";

export const Modals = () => {

    const [open1, setOpen1] = useState(false)
    const handleClick = () => {
        setOpen1(!open1);
    }
    const [open2, setOpen2] = useState(false)
    const handleClick2 = () => {
        setOpen2(!open2);
    }

    const [open3, setOpen3] = useState(false)
    const handleClick3 = () => {
        setOpen3(!open3);
    }

    const [open4, setOpen4] = useState(false)
    const handleClick4 = () => {
        setOpen4(!open4);
    }

    const root = document.getElementById('root') ?? document.body;

    return <div>
        All Modals
        <div className='flex gap-s'>
            <button className='bg-bgBrandDark' onClick={handleClick}>open modal 1</button>
            {createPortal(
                <Modal type="neutral" isOpen={open1} title="Швидке замовлення" description='Залиште заявку і наш менеджер зв’яжеться з вами!' onClose={handleClick} icon={<LightningIcon />}>
                    <Input type={InputTypes.Phone} phoneCode="+38" inputTypesFigma={InputTypesFigma.PhoneNumber}
                        label="Номер телефону" inputBoxClassName="mb-s" inputClassName="w-[313px] tablet1024:w-[404px] mb-s" />
                    <Button onClick={handleClick} text='Відправити' className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
                </Modal>,
                root)}

            <button className='bg-bgBrandDark' onClick={handleClick2}>open modal 2</button>
            {createPortal(
                <Modal type="negative" title='Немає в наявності' description='Введіть адресу своєї пошти і як тільки товар з’явиться, вам прийде лист' isOpen={open2} onClose={handleClick2} icon={<CloseIcon />} >
                    <Input type={InputTypes.Text} inputTypesFigma={InputTypesFigma.TextField}
                        label="Електронна пошта" inputClassName="w-[313px] tablet1024:w-[404px] mb-s" />
                    <Button onClick={handleClick2} text='Відправити' className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
                </Modal>,
                root)}

            <button className='bg-bgBrandDark' onClick={handleClick3}>open modal 3</button>
            {createPortal(
                <Modal type='negative' title='Видалити товар' description='Ви впевнені, що хочете видалити товар? Відмініти цю дію неможливо.' isOpen={open3} icon={<LightningIcon />} >
                    <div className="flex gap-x-xs2 mt-xs2">
                        <Button text="Відмінити" buttonType={BUTTON_TYPES.SECONDARY_GRAY} onClick={handleClick3} />
                        <Button text='Видалити' buttonType={BUTTON_TYPES.DESTRUCTIVE} onClick={handleClick3} />
                    </div>
                </Modal>,
                root)}

            <button className='bg-bgBrandDark' onClick={handleClick4}>open modal 4</button>
            {createPortal(
                <Modal type="success" title='Замовлення успішне!' description='Очікуйте дзвінка нашого менеджера протягом 5 хвилин.' isOpen={open4} icon={<LightningIcon />} >
                    <Button onClick={handleClick4} text='Перейти до каталогу' className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
                </Modal>,
            root)}
        </div>
    </div>
}  