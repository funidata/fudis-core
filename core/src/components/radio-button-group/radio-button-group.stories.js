import {
  createGuidance,
  createLegend,
  createRadioButton,
} from "../../../storybook-utils";

export default {
  title: "Components/Radio Button Group",
  argTypes: {
    label: {
      name: "Label",
      control: { type: "text" },
    },
    size: {
      name: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
    guidanceText: {
      name: "Guidance text",
      control: { type: "text" },
    },
    selected: {
      name: "Selected",
      control: { type: "boolean" },
    },
    required: {
      name: "Required",
      control: { type: "boolean" },
    },
    disabled: {
      name: "Disabled",
      control: { type: "boolean" },
    },
    errorMessage: {
      name: "Error message",
      control: { type: "text" },
    },
  },
};

const Template = ({
  label,
  required,
  size,
  guidanceText,
  disabled,
  errorMessage,
  selected,
}) => {
  const fieldsetElement = document.createElement("fieldset");
  fieldsetElement.className = `fudis-radio-button-group fudis-fieldset fudis-input-size__${size}`;

  const legendElement = createLegend(label, required);

  const fieldsetContentElement = document.createElement("div");
  fieldsetContentElement.className = "fudis-fieldset-content";

  const guidanceElement = createGuidance(
    size,
    errorMessage,
    guidanceText,
    false,
  );

  const radioButtonElement1 = createRadioButton(
    "Option 1",
    selected,
    !!errorMessage,
    disabled,
    true,
  );
  const radioButtonElement2 = createRadioButton(
    "Option 2",
    false,
    !!errorMessage,
    disabled,
    false,
  );
  const radioButtonElement3 = createRadioButton(
    "Option 3",
    false,
    !!errorMessage,
    disabled,
    false,
  );

  fieldsetElement.appendChild(legendElement);

  fieldsetContentElement.appendChild(radioButtonElement1);
  fieldsetContentElement.appendChild(radioButtonElement2);
  fieldsetContentElement.appendChild(radioButtonElement3);

  if (guidanceElement) fieldsetContentElement.appendChild(guidanceElement);

  fieldsetElement.appendChild(fieldsetContentElement);

  return fieldsetElement;
};

let defaultValues = {
  label: "Label",
  size: "md",
  guidanceText: "Guidance text",
  selected: false,
  disabled: false,
  required: false,
  errorMessage: "",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    // Sizes
    { size: "xs", guidanceText: "" },
    { size: "sm", guidanceText: "" },
    { size: "md", guidanceText: "" },
    { size: "lg", guidanceText: "" },
    // Variants
    { size: "md", selected: true, guidanceText: "" },
    { size: "md", required: true, guidanceText: "" },
    { size: "md" },
    { size: "md", guidanceText: "", errorMessage: "Validator error message" },
    { size: "md", errorMessage: "Validator error message" },
    // Disabled
    { size: "md", disabled: true },
  ];

  return configurations
    .map((config) => {
      const element = Template({
        ...defaultValues,
        ...config,
      });

      return element.outerHTML;
    })
    .join("<br/>");
};
