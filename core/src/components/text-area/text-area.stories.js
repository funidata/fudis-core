import { createGuidance, createLabel } from "../../../storybook-utils";

export default {
  title: "Components/Text Area",
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
    required: {
      name: "Required",
      control: { type: "boolean" },
    },
    guidanceText: {
      name: "Guidance text",
      control: { type: "text" },
    },
    disabled: {
      name: "Disabled",
      control: { type: "boolean" },
    },
    errorMessage: {
      name: "Error message",
      control: { type: "text" },
      if: { arg: "disabled", eq: false },
    },
    characterLimit: {
      name: "Character limit",
      control: { type: "boolean" },
    },
  },
};

const Template = ({
  label,
  size,
  required,
  guidanceText,
  errorMessage,
  disabled,
  characterLimit,
}) => {
  const inputContainer = document.createElement("div");
  inputContainer.className = `fudis-text-area fudis-input-size__${size}`;

  const labelElement = createLabel(label, "fudis-text-area-id", required);

  const inputElement = document.createElement("textarea");
  inputElement.id = "fudis-text-area-id";
  inputElement.setAttribute("aria-describedby", "fudis-guidance-id");
  inputElement.className = "fudis-form-input fudis-text-area__input";
  if (disabled) {
    inputElement.disabled = disabled;
    inputElement.ariaDisabled = disabled;
  }
  if (!!errorMessage) inputElement.ariaInvalid = !!errorMessage;

  inputContainer.appendChild(labelElement);
  inputContainer.appendChild(inputElement);

  let guidanceElement = createGuidance(
    size,
    errorMessage,
    guidanceText,
    characterLimit,
  );
  if (guidanceElement) inputContainer.appendChild(guidanceElement);

  return inputContainer;
};

let defaultValues = {
  label: "Label",
  size: "md",
  guidanceText: "Guidance text",
  disabled: false,
  required: false,
  characterLimit: false,
  errorMessage: "",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { size: "xs", guidanceText: "" },
    { size: "sm", guidanceText: "" },
    { size: "md", guidanceText: "" },
    { size: "lg", guidanceText: "" },
    { size: "full-width", guidanceText: "" },
    // Text input variants
    { size: "md", required: true },
    { size: "md" },
    { size: "md", guidanceText: "", errorMessage: "Validator error message" },
    { size: "md", errorMessage: "Validator error message" },
    // Text input variants with Character limit
    { size: "md", characterLimit: true, guidanceText: "" },
    {
      size: "md",
      characterLimit: true,
      guidanceText: "",
      errorMessage: "Validator error message",
    },
    { size: "md", characterLimit: true },
    {
      size: "md",
      characterLimit: true,
      errorMessage: "Validator error message",
    },
    // Disabled
    { size: "md", guidanceText: "", disabled: true },
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
