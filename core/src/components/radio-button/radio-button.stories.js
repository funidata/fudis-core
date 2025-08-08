import { createRadioButton } from "../../../storybook-utils";

export default {
  title: "Components/Radio Button",
  argTypes: {
    label: {
      name: "Label",
      control: { type: "text" },
    },
    selected: {
      name: "Selected",
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

const Template = ({ label, selected, disabled, invalid }) => {
  return createRadioButton(label, selected, invalid, disabled, false).outerHTML;
};

let defaultValues = {
  label: "Option",
  selected: false,
  invalid: false,
  disabled: false,
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { selected: false },
    { selected: true },
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
