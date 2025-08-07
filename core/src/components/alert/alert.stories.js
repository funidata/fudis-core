export default {
  title: "Components/Alert",
  argTypes: {
    message: {
      name: "Alert",
      control: { type: "text" },
    },
    variant: {
      options: ["warning", "danger", "success", "info"],
      control: { type: "radio" },
    },
  },
};

const Template = ({ message, variant }) => {
  const alertDiv = document.createElement("div");
  alertDiv.className = `fudis-alert fudis-alert__${variant}`;

  const alertText = document.createElement("p");
  alertText.className =
    "fudis-body-text fudis-body-text__center fudis-body-text__lg-regular fudis-alert__text";
  alertText.textContent = message;

  const alertCloseButton = document.createElement("button");
  alertCloseButton.className = `fudis-alert__close fudis-alert__close__${variant}`;
  alertCloseButton.setAttribute(
    "aria-label",
    `${variant.charAt(0).toUpperCase() + variant.slice(1)}, close`,
  );

  const alertIcon = document.createElement("span");

  const iconColor =
    variant === "warning"
      ? "fudis-icon__color__gray-dark"
      : "fudis-icon__color__white";

  alertIcon.className = `fudis-icon ${iconColor} fudis-icon__lg fudis-icon__close`;

  alertCloseButton.appendChild(alertIcon);
  alertDiv.appendChild(alertText);
  alertDiv.appendChild(alertCloseButton);

  return alertDiv;
};

let defaultValues = {
  message: "Alert",
  variant: "danger",
};

export const Alert = Template.bind({});
Alert.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { message: "Danger", variant: "danger" },
    { message: "Info", variant: "info" },
    { message: "Success", variant: "success" },
    { message: "Warning", variant: "warning" },
  ];

  const alertGroupWrapper = document.createElement("div");

  configurations.forEach((config) => {
    const element = Template({
      ...defaultValues,
      ...config,
    });

    alertGroupWrapper.appendChild(element);
  });

  return alertGroupWrapper;
};
