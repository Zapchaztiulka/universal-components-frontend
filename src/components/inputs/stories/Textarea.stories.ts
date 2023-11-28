import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "..";
import { ValidationStatus } from "../../../types/validationStatus";

const meta = {
  title: "Inputs/Textarea",
  component: Textarea,
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

    label: {
      description: 'Example: label="Label"',
    },

    value: {
      description:
        'Example:  const [text, setText] = useState("");  value={text}',
    },
    placeholder: {
      description: 'Example: placeholder="Я шукаю..."',
    },

    maxLength: {
      description: "Example:  maxLength={13} ",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const TextArea: Story = {
  args: {
    label: "Label",
    asterisk: true,
    disabled: false,
    handleChange: () => {},
    rows: 5,
    maxLength: 200,
    lettersCounter: true,
    value: "value",
  },
};
