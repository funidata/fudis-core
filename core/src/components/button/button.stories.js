export default {
  title: "Components/Button",
  argTypes: {
    label: {
      name: "label",
      control: { type: "text" },
    },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "select" },
    },
    disabled: {
      name: "disabled",
      control: { type: "boolean" },
    },
  },
};

const Template = ({ label, variant, size, disabled }) => {
  const button = document.createElement("button");
  button.className = `fudis-button fudis-button__${variant} fudis-button__size__${size}`;
  button.textContent = label;
  button.setAttribute("aria-disabled", disabled);

  return button;
};

const iconTemplate = ({ label, variant, size, disabled }) => {
  const button = document.createElement("button");
  button.className = `fudis-button fudis-button__${variant} fudis-button__size__${size}`;
  button.setAttribute("aria-disabled", disabled);

  const iconWrapper = document.createElement("div");
  iconWrapper.className = "fudis-button__icon";

  const buttonIcon = document.createElement("span");

  const iconColor =
    variant === "primary"
      ? "fudis-icon__color__white"
      : "fudis-icon__color__primary";

  buttonIcon.className = `fudis-button__icon__component fudis-icon ${iconColor} fudis-icon__lg fudis-icon__search`;

  iconWrapper.appendChild(buttonIcon);
  button.appendChild(iconWrapper);
  button.appendChild(document.createTextNode(label));

  return button;
};

let defaultValues = {
  label: "Button",
  variant: "primary",
  size: "medium",
  disabled: false,
};

export const Button = Template.bind({});
Button.args = defaultValues;

export const WithIcon = iconTemplate.bind({});
WithIcon.argTypes = defaultValues;

export const PwAll = () => {
  const configurations = [
    { label: "Primary", variant: "primary", size: "medium", disabled: false },
    { label: "Primary", variant: "primary", size: "small", disabled: false },
    {
      label: "Secondary",
      variant: "secondary",
      size: "medium",
      disabled: false,
    },
    {
      label: "Secondary",
      variant: "secondary",
      size: "small",
      disabled: false,
    },
    { label: "Tertiary", variant: "tertiary", size: "medium", disabled: false },
    { label: "Tertiary", variant: "tertiary", size: "small", disabled: false },
    { label: "Disabled", variant: "primary", size: "medium", disabled: true },
    { label: "Disabled", variant: "primary", size: "small", disabled: true },
  ];

  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.gap = "12px";
  buttonsContainer.style.flexWrap = "wrap";
  buttonsContainer.style.alignItems = "baseline";

  configurations.forEach((config) => {
    const buttons = Template({
      ...defaultValues,
      ...config,
    });

    const buttonsWithIcon = iconTemplate({
      ...defaultValues,
      ...config,
    });

    const buttonGroup = document.createElement("div");
    buttonGroup.style.marginBottom = "1rem";

    buttonGroup.appendChild(buttons);
    buttonGroup.appendChild(document.createTextNode(" "));
    buttonGroup.appendChild(buttonsWithIcon);

    buttonsContainer.appendChild(buttonGroup);
  });
  return buttonsContainer;
};
