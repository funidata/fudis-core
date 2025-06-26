import { createGuidance, createLabel } from "../../../storybook-utils";

export default {
  title: "Components/Text Input",
  argTypes: {
    label: {
      name: "Label",
      control: { type: "text" },
    },
    variant: {
      name: "Variant",
      control: { type: "select" },
      options: ["text", "number"],
    },
    size: {
      name: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
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
      if: { arg: "variant", eq: "text" },
    },
  },
};

const Template = ({
  label,
  variant,
  size,
  required,
  guidanceText,
  errorMessage,
  disabled,
  characterLimit,
}) => {
  const inputContainer = document.createElement("div");
  inputContainer.className = `fudis-text-input fudis-input-size__${size}`;

  const labelElement = createLabel(label, "fudis-text-input-id", required);

  const inputElement = document.createElement("input");
  inputElement.id = "fudis-text-input-id";
  inputElement.setAttribute("aria-describedby", "fudis-guidance-id");
  inputElement.type = variant;
  inputElement.className = "fudis-form-input fudis-text-input__input";
  inputElement.disabled = disabled;
  inputElement.ariaDisabled = disabled;
  inputElement.ariaInvalid = !!errorMessage;

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
  variant: "text",
  size: "md",
  guidanceText: "Guidance text",
  disabled: false,
  required: false,
  characterLimit: false,
  errorMessage: "",
};

export const TextInput = Template.bind({});
TextInput.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { size: "xs", guidanceText: "" },
    { size: "sm", guidanceText: "" },
    { size: "md", guidanceText: "" },
    { size: "lg", guidanceText: "" },
    // Text input variants
    { size: "md" },
    { size: "md", required: true },
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
    // Number input variants
    { variant: "number", size: "md" },
    {
      variant: "number",
      size: "md",
      guidanceText: "",
      errorMessage: "Validator error message",
    },
    { variant: "number", size: "md", errorMessage: "Validator error message" },
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
