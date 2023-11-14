import type { Meta, StoryObj } from '@storybook/react';

import Button, { BUTTON_TYPES, BUTTON_SIZES } from './Button';
import { ArrowDownIcon, BasketIcon, PhoneIcon, PlusIcon, SearchIcon } from '../icons';
import theme from '../../../presets';


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
    icon: BasketIcon,
    iconProps: {
      // color: 'red',
      className: "hover:text-textBrand!"
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
    icon: PlusIcon,
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
    icon: BasketIcon,
    buttonType: BUTTON_TYPES.SECONDARY_GRAY,
    disabled: false,
  },
};
export const Disabled: Story = {
  args: {
    text: 'Button',
    icon: BasketIcon,
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
    icon: BasketIcon,
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
    icon: PhoneIcon,
    disabled: false,
  },
};
export const TertiaryeWithRightIcon: Story = {
  args: {
    text: 'Показати ще',
    buttonType: BUTTON_TYPES.TERTIARY,
    iconProps: { color: theme.colors.iconBrand },
    icon: ArrowDownIcon,
    iconSide: "right",
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
    icon: BasketIcon,
    iconProps: {
      color: 'white',
    },
    disabled: false,
  },
};

export const SearchType: Story = {
  args: {
    buttonType: BUTTON_TYPES.SEARCH_TYPE,
    icon: SearchIcon,
    iconProps: {
      color: 'white',
    },
    disabled: false,
  },
};


export const Loading: Story = {
  args: {
   isLoading: true
  },
};
export const DisabledLoading: Story = {
  args: {
    isLoading: true,
    disabled: true,
  },
};