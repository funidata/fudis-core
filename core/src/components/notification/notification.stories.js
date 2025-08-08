export default {
  title: "Components/Notification",
  argTypes: {
    variant: {
      options: ["danger", "info", "success", "warning"],
      control: { type: "radio" },
    },
  },
};

function getIcon(variant) {
  const iconOptions = {
    danger: "alert",
    info: "info-circle",
    success: "checkmark-circle",
    warning: "exclamation-mark-circle",
  };

  return iconOptions[variant] || "info-circle";
}

const Template = ({ message, variant }) => {
  const iconName = getIcon(variant);

  const notification = document.createElement("article");
  notification.className = `fudis-notification fudis-notification__${variant}`;

  const hiddenText = document.createElement("p");
  hiddenText.className = "fudis-visually-hidden";
  hiddenText.textContent = "Attention";

  const icon = document.createElement("span");
  icon.className = `fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__${iconName}`;

  const content = document.createElement("div");
  content.className = "fudis-notification__content";

  const text = document.createElement("p");
  text.className = "fudis-body-text fudis-body-text__md-regular";
  text.textContent = message;

  content.appendChild(text);

  notification.appendChild(hiddenText);
  notification.appendChild(icon);
  notification.appendChild(content);

  return notification;
};

let defaultValues = {
  variant: "danger",
  message: "This is a notification",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { message: "Danger", variant: "danger" },
    { message: "Info", variant: "info" },
    { message: "Success", variant: "success" },
    { message: "Warning", variant: "warning" },
  ];

  return configurations
    .map((config) => {
      const element = Template({
        ...defaultValues,
        ...config,
      });

      return element.outerHTML;
    })
    .join("");
};
