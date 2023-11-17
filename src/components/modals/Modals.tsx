import { Modal } from '.'
import { useState } from 'react'


export const Modals = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    }

    return <div>
        All Modals
        <div>
            <button className='bg-bgBrandDark' onClick={handleClick}>open modal</button>
            <Modal isOpen={open} />
        </div>
    </div>
}