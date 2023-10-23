import type { Meta, StoryObj } from '@storybook/react';

import Button, { BUTTON_TYPES, BUTTON_SIZES } from './Button'
import { Basket24 } from '../icons';


const meta = {
  title: 'Buttons/Component',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;



export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
    disabled: false,
  },
};
export const PrimaryWithIcon: Story = {
  args: {
    text: 'Button',
    icon: Basket24,
    iconProps: {
      color: 'white',
    },
    disabled: false,
  },
};
export const Secondary: Story = {
  args: {
    text: 'Button',
    buttonType: BUTTON_TYPES.SECONDARY,
    disabled: false,
  },
};
export const SecondaryWithIcon: Story = {
  args: {
    text: 'Button',
    icon: Basket24,
    buttonType: BUTTON_TYPES.SECONDARY,
    disabled: false,
  },
};
export const SecondaryGray: Story = {
  args: {
    text: 'Button',
    buttonType: BUTTON_TYPES.SECONDARY_GRAY,
    disabled: false,
  },
};
export const SecondaryGrayWithIcon: Story = {
  args: {
    text: 'Button',
    icon: Basket24,
    buttonType: BUTTON_TYPES.SECONDARY_GRAY,
    disabled: false,
  },
};
export const Disabled: Story = {
  args: {
    text: 'Button',
    icon: Basket24,
    disabled: true,
    iconProps: {
      color: 'white',
    }
  },
};
export const Desctructive: Story = {
  args: {
    text: 'Button',

    buttonType: BUTTON_TYPES.DESTRUCTIVE,
    disabled: false,
  },
};
export const DesctructiveWithIcon: Story = {
  args: {
    text: 'Button',
    buttonType: BUTTON_TYPES.DESTRUCTIVE,
    icon: Basket24,
    disabled: false,
  },
};
export const Tertiary: Story = {
  args: {
    text: 'Показати ще',
    buttonType: BUTTON_TYPES.TERTIARY,
    disabled: false,
  },
};
export const TertiaryeWithIcon: Story = {
  args: {
    text: 'Показати ще',
    buttonType: BUTTON_TYPES.TERTIARY,
    icon: Basket24,
    disabled: false,
  },
};
export const SmallSize: Story = {
  args: {
    text: 'Button',
    size: BUTTON_SIZES.SMALL,
  },
};

export const IconOnly: Story = {
  args: {
    buttonType: BUTTON_TYPES.ICON_ONLY,
    icon: Basket24,
    iconProps: {
      color: 'white',
    },
    disabled: false,
  },
};

export const SearchType: Story = {
  args: {
    buttonType: BUTTON_TYPES.SEARCH_TYPE,
    icon: Basket24,
    iconProps: {
      color: 'white',
    },
    disabled: false,
  },
};

