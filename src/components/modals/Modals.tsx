import { Modal } from '.'
import { useState } from 'react'
import { createPortal } from 'react-dom';
import { CloseIcon, LightningIcon } from '../icons'

export const Modals = () => {

    const [open1, setOpen1] = useState(false)
    const handleClick = () => {
        setOpen1(!open1);
    }
    const [open2, setOpen2] = useState(false)
    const handleClick2 = () => {
        setOpen2(!open2);
    }

    const root = document.getElementById('root') ?? document.body;

    return <div>
        All Modals
        <div>
            <button className='bg-bgBrandDark' onClick={handleClick}>open modal 1</button>
            { createPortal( <Modal isOpen={open1} onClose={handleClick} icon={<LightningIcon />} />, root) } 
            <button className='bg-bgBrandDark' onClick={handleClick2}>open modal 2</button>
            { createPortal( <Modal type="negative" header='Немає в наявності' message='Введіть адресу своєї пошти і як тільки товар з’явиться, вам прийде лист' isOpen={open2} onClose={handleClick2} icon={<CloseIcon />} />, root) } 
        </div>
    </div>
}