import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
import { TooltipLocation } from "./universalComponents/Tooltip.types";
import { EyeOffIcon } from "../icons";

const meta: Meta<typeof Tooltip> = {
    title: "Tooltip/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{
        margin: '50px',
            }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {

    textTooltip: {
      description: 'Example: textTooltip="Показати пароль"',
    },

    tooltipLocationProps: {
      description: "Example: tooltipLocationProps={TooltipLocation.TopCenter}",
    },
    },
}
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    textTooltip: "Показати пароль",
    children: <EyeOffIcon />,
      },
  };

export const TooltipTopRight: Story = {
  args: {
  ...Default.args,
    tooltipLocationProps: TooltipLocation.TopRight,
  }
};

export const TooltipTopCenter: Story = {
    args: {
    ...Default.args,
     tooltipLocationProps: TooltipLocation.TopCenter,
  }
};
export const TooltipTopLeft: Story = {
    args: {
    ...Default.args,
     tooltipLocationProps: TooltipLocation.TopLeft,
  }
};

export const TooltipBottomRight: Story = {
  args: {
  ...Default.args,
    tooltipLocationProps: TooltipLocation.BottomRight,
  }
};

export const TooltipBottomCenter: Story = {
    args: {
    ...Default.args,
     tooltipLocationProps: TooltipLocation.BottomCenter,
  }
};
export const TooltipBottomLeft: Story = {
    args: {
    ...Default.args,
     tooltipLocationProps: TooltipLocation.BottomLeft,
  }
};

export const TooltipRight: Story = {
    args: {
    ...Default.args,
     tooltipLocationProps: TooltipLocation.Right,
  }
};
export const TooltipLeft: Story = {
    args: {
    ...Default.args,
     tooltipLocationProps: TooltipLocation.Left,
  }
};

