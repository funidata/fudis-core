import { createCheckbox } from "../../../storybook-utils";

export default {
  title: "Components/Checkbox",
  argTypes: {
    label: {
      name: "Label",
      control: { type: "text" },
    },
    selected: {
      name: "Selected",
      control: { type: "boolean" },
    },
    focused: {
      name: "Focused",
      control: { type: "boolean" },
    },
    disabled: {
      name: "Disabled",
      control: { type: "boolean" },
    },
    invalid: {
      name: "Invalid",
      control: { type: "boolean" },
    },
  },
};

const Template = ({ label, selected, focused, disabled, invalid }) => {
  return createCheckbox(label, selected, invalid, disabled, focused, false)
    .outerHTML;
};

let defaultValues = {
  label: "Option",
  selected: false,
  focused: false,
  invalid: false,
  disabled: false,
};

export const Checkbox = Template.bind({});
Checkbox.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { selected: false },
    { selected: true },
    { focused: true },
    { invalid: true },
    { disabled: true },
  ];

  return configurations
    .map((config) => {
      return Template({
        ...defaultValues,
        ...config,
      });
    })
    .join("<br/>");
};
