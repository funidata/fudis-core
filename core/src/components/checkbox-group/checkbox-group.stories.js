import {
  createCheckbox,
  createGuidance,
  createLegend,
} from "../../../storybook-utils";

export default {
  title: "Components/Checkbox Group",
  argTypes: {
    label: {
      name: "Label",
      control: { type: "text" },
    },
    size: {
      name: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "full-width"],
    },
    guidanceText: {
      name: "Guidance text",
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
  focused,
}) => {
  const fieldsetElement = document.createElement("fieldset");
  fieldsetElement.className = `fudis-checkbox-group fudis-fieldset fudis-input-size__${size}`;

  const legendElement = createLegend(label, required);

  const fieldsetContentElement = document.createElement("div");
  fieldsetContentElement.className = "fudis-fieldset-content";

  const guidanceElement = createGuidance(
    size,
    errorMessage,
    guidanceText,
    false,
  );

  const checkboxElement1 = createCheckbox(
    "Option 1",
    selected,
    !!errorMessage,
    disabled,
    focused,
    true,
  );
  const checkboxElement2 = createCheckbox(
    "Option 2",
    false,
    !!errorMessage,
    disabled,
    false,
    false,
  );
  const checkboxElement3 = createCheckbox(
    "Option 3",
    false,
    !!errorMessage,
    disabled,
    false,
    false,
  );

  fieldsetElement.appendChild(legendElement);

  fieldsetContentElement.appendChild(checkboxElement1);
  fieldsetContentElement.appendChild(checkboxElement2);
  fieldsetContentElement.appendChild(checkboxElement3);

  if (guidanceElement) fieldsetContentElement.appendChild(guidanceElement);

  fieldsetElement.appendChild(fieldsetContentElement);

  return fieldsetElement;
};

let defaultValues = {
  label: "Label",
  size: "md",
  guidanceText: "Guidance text",
  selected: false,
  focused: false,
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
    { size: "full-width", guidanceText: "" },
    // Variants
    { size: "md", required: true, guidanceText: "" },
    { size: "md", selected: true, guidanceText: "" },
    { size: "md", focused: true, guidanceText: "" },
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
