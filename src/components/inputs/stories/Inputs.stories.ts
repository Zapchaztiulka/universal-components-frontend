import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "..";
import {
  InputTypes,
  InputTypesFigma,
} from "../universalComponents/Input.types";
import { ValidationStatus } from "../../../types/validationStatus";

const meta = {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      type: "string",
      description:
        "A state that notifies the user of an error or success Example: status={ValidationStatus.success}",
      defaultValue: "false",
      options: [ValidationStatus.error, ValidationStatus.success, "false"],
      control: {
        type: "radio",
      },
    },
    handleChange: {
      description:
        'A function that takes the value after the change. Example: "const getText = (value: string) => { setText(value); }  handleChange={getText}',
    },
    inputTypesFigma: {
      description: "Example: inputTypesFigma={InputTypesFigma.TextField}",
    },
    type: {
      description: "Example: type={InputTypes.Text}",
    },
    label: {
      description: 'Example: label="Label"',
    },
    message: {
      description: 'Example: message="infooooo"',
    },
    value: {
      description:
        'Example:  const [text, setText] = useState("");  value={text}',
    },
    placeholder: {
      description: 'Example: placeholder="Я шукаю..."',
    },
    mainIcon: {
      description: 'Example: "mainIcon={<AttachIcon />}"',
    },
    extraLeftIcon: {
      description:
        "Add an icon if the input contains two icons. Example: extraLeftIcon={<MenuIcon />}",
    },
    phoneCode: {
      description: 'Example: phoneCode="+38" ',
    },
    maxLength: {
      description: "Example:  maxLength={13} ",
    },
    onMainIconClick: {
      description: " onMainIconClick={clickOnIcon}",
    },
    onExtraLeftIconClick: {
      description: " onExtraLeftIconClick={clickOnIcon}",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const TextField: Story = {
  args: {
    inputTypesFigma: InputTypesFigma.TextField,
    type: InputTypes.Text,
    label: "Label",
    message: "info",
    asterisk: true,
    disabled: false,
    handleChange: () => {},
  },
};

export const Password: Story = {
  args: {
    inputTypesFigma: InputTypesFigma.Password,
    type: InputTypes.Password,
    label: "Label",
    message: "info",
    asterisk: true,
    disabled: false,
  },
};

export const PhoneNumber: Story = {
  args: {
    inputTypesFigma: InputTypesFigma.PhoneNumber,
    type: InputTypes.Phone,
    label: "Label",
    message: "info",
    asterisk: true,
    disabled: false,
    handleChange: () => {},
    phoneCode: "+38",
    maxLength: 13,
  },
};

export const SearchField: Story = {
  args: {
    inputTypesFigma: InputTypesFigma.SearchField,
    type: InputTypes.Text,
    label: "Label",
    message: "info",
    asterisk: true,
    disabled: false,
    handleChange: () => {},
    placeholder: "Я шукаю...",
  },
};

export const Price: Story = {
  args: {
    inputTypesFigma: InputTypesFigma.Price,
    type: InputTypes.Text,
    label: "Label",
    message: "info",
    asterisk: true,
    disabled: false,
    handleChange: () => {},
    placeholder: "0",
  },
};
