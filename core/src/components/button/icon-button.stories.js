export default {
  title: "Components/Button, icon only",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "extra-small"],
      control: { type: "select" },
    },
    disabled: {
      name: "disabled",
      control: { type: "boolean" },
    },
  },
};

const Template = ({ variant, size, disabled }) => {
  const button = document.createElement("button");
  button.className = `fudis-button fudis-button__${variant} fudis-button__size__${size}`;
  button.setAttribute("aria-label", "Search");
  if (disabled) button.setAttribute("aria-disabled", disabled);

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

  return button;
};

let defaultValues = {
  variant: "primary",
  size: "medium",
  disabled: false,
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { variant: "primary", size: "extra-small", disabled: false },
    { variant: "primary", size: "medium", disabled: false },
    { variant: "primary", size: "small", disabled: false },
    {
      variant: "secondary",
      size: "extra-small",
      disabled: false,
    },
    {
      variant: "secondary",
      size: "medium",
      disabled: false,
    },
    {
      variant: "secondary",
      size: "small",
      disabled: false,
    },
    { variant: "tertiary", size: "extra-small", disabled: false },
    { variant: "tertiary", size: "medium", disabled: false },
    { variant: "tertiary", size: "small", disabled: false },
    { variant: "primary", size: "extra-small", disabled: true },
    { variant: "primary", size: "medium", disabled: true },
    { variant: "primary", size: "small", disabled: true },
  ];

  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.gap = "12px";
  buttonsContainer.style.flexWrap = "wrap";
  buttonsContainer.style.alignItems = "flex-start";

  configurations.forEach((config) => {
    const buttons = Template({
      ...defaultValues,
      ...config,
    });

    buttonsContainer.appendChild(buttons);
  });

  return buttonsContainer;
};
