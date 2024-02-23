import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react'
import { LightningIcon, CloseIcon, AlertIcon } from "../../icons"
import { Modal } from '..'
import { BUTTON_TYPES } from '../../buttons/Button'
import { Button } from '../../buttons'
import { Input } from '../../inputs'
import { InputTypes, InputTypesFigma } from "../../inputs/universalComponents/Input.types";

const meta = {
    title: 'Modals/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalTemplate: Story = {
    render: ({ ...args }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button text='Click to open modal' onClick={() => setIsOpen(true)} />
                <Modal
                    {...args}
                    isOpen={isOpen}
                    icon={<LightningIcon />}
                    onClose={() => setIsOpen(false)}
                >
                    {args.children}
                </Modal>
            </>
        )
    }
}

export const Default = {
    ...ModalTemplate,
    args: {
        type: "neutral",
        title: "Title",
        description: 'Modal Description',
        zIndex: 10,
        children: <>
            <p>Modal Children</p>
        </>
    },
};


export const Neutral = {
    ...ModalTemplate,
    args: {
        type: "neutral",
        title: "Швидке замовлення",
        description: 'Залиште заявку і наш менеджер зв’яжеться з вами!',
        icon: <LightningIcon />,
        children: <>
            <div>
                <Input type={InputTypes.Phone} phoneCode="+38" inputTypesFigma={InputTypesFigma.PhoneNumber}
                    label="Номер телефону" inputBoxClassName="mb-s" inputClassName="w-[313px] tablet1024:w-[404px] mb-s" />
            </div>
            <Button text='Відправити' className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
        </>
    },
};

export const Warning = {
    ...ModalTemplate,
    args: {
        type: "warning",
        title: "Дані було частково завантажено",
        description: 'В базу було внесено .. товарів. Для завантажання залишку продовжіть, будь ласка, через функцію множинного додавання.',
        icon: <AlertIcon />,
        children: <Button text='Продовжити додавання' className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
    },
};

export const Destructive = {
    ...ModalTemplate,
    args: {
        type: "negative",
        title: "Видалити товар",
        description: 'Ви впевнені, що хочете видалити товар? Відмініти цю дію неможливо.',
        icon: <LightningIcon />,
        children: <div className="flex gap-x-xs2 mt-xs2">
            <Button text="Відмінити" buttonType={BUTTON_TYPES.SECONDARY_GRAY} />
            <Button text='Видалити' buttonType={BUTTON_TYPES.DESTRUCTIVE} />
        </div>
    },
};

export const Negative = {
    ...ModalTemplate,
    args: {
        type: 'negative',
        title: 'Немає в наявності',
        description: 'Введіть адресу своєї пошти і як тільки товар з’явиться, вам прийде лист',
        icon: <CloseIcon />,
        children: <>
            <div>
                <Input type={InputTypes.Text} inputTypesFigma={InputTypesFigma.TextField}
                    label="Електронна пошта" inputClassName="w-[313px] tablet1024:w-[404px] mb-s" />
            </div>
            <Button text='Відправити' className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
        </>
    },
};

export const Success = {
    ...ModalTemplate,
    args: {
        showCloseButton: false,
        type: 'success',
        title: 'Замовлення успішне!',
        description: 'Очікуйте дзвінка нашого менеджера протягом 5 хвилин.',
        icon: <LightningIcon />,
        children: <Button text='Перейти до каталогу' className="w-[313px] tablet1024:mb-m tablet1024:w-[404px]" />
    },
};