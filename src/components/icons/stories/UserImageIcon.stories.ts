import type { Meta, StoryObj } from '@storybook/react';

import { UserImageIcon } from ".."

const meta = {
    title: 'Icons/UserImageIcon',
    component: UserImageIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserImageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const WithText: Story = {
    args: {
        ...Default.args,
        text: 'AB',
    },
};

export const WithImage: Story = {
    args: {
        ...Default.args,
        imgSrc: 'https://s3-alpha-sig.figma.com/img/f3ae/d919/f9e6f3e260c7d2849b8b9c5cb324673e?Expires=1699228800&Signature=Qr407QaWEq5zQJXGjptmVjkamEaMQQ-fL4svvLpbgiGoyn2cvleXLdbHE4FzI7228bhWf6yYHVocqBIY-ZIDmhehR3CINcPc-mb6fVfPmHAYrHaAix3vsDr4lK~B9NYZl31j5Ge-r82nV2iTZ536z2ugBn5U8mefHjJyKodEgQ633DiZZuFvVEV39D4lsvGmzbW2u6W2zIfT6ytd50szF6qk1vpa8ZXw58YNBRFPUdmqK3M1WMjrtAg3VJPzjJy-dxXPo5RZNOQLSI8SAeedk0yHXXO0U3iTEQQv6xJAZ8iShnjC-FIaYznY39tuGtSEeGsYlnRrv0QGIZ~FyT6qHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
};