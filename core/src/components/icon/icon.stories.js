export default {
  title: "Components/Icon (WIP)",
  argTypes: {
    icon: {
      options: [
        "achievement",
        "alert",
        "archive",
        "arrow-big",
        "arrow-dashed",
        "arrow-solid",
        "check",
        "brochure",
        "check-indeterminate",
        "calendar",
        "bullets",
        "back",
        "change-log",
        "search",
        "new-tab",
        "close",
        "exclamation-mark-circle",
        "checkmark-circle",
        "info-circle",
      ],
      control: { type: "select" },
    },
    color: {
      options: [
        "red",
        "yellow",
        "green",
        "primary",
        "primary-dark",
        "white",
        "gray-light",
        "gray-dark",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
};

const Template = ({ icon, color, size }) => {
  const iconSpan = document.createElement("span");
  iconSpan.className = `fudis-icon fudis-icon__${size} fudis-icon__color__${color} fudis-icon__${icon}`;

  if (color === "white") iconSpan.style.backgroundColor = "#3b3b3b";

  return iconSpan;
};

let defaultValues = {
  icon: "check",
  size: "lg",
  color: "primary",
};

export const Icon = Template.bind({});
Icon.args = defaultValues;

export const AllIcons = () => {
  const icons = [
    "achievement",
    "alert",
    "archive",
    "arrow-big",
    "arrow-dashed",
    "arrow-solid",
    "check",
    "brochure",
    "check-indeterminate",
    "calendar",
    "bullets",
    "back",
    "change-log",
    "search",
    "new-tab",
    "close",
    "exclamation-mark-circle",
    "checkmark-circle",
    "info-circle",
  ];

  const sizes = ["sm", "md", "lg"];

  const iconContainer = document.createElement("div");
  iconContainer.style.display = "grid";
  iconContainer.style.gap = "12px";
  iconContainer.style.gridTemplateColumns = "repeat(3, 30px)";
  iconContainer.style.alignItems = "center";

  icons.forEach((icon) => {
    sizes.forEach((size) => {
      const iconElement = Template({
        icon,
        color: "primary",
        size,
      });

      iconContainer.appendChild(iconElement);
    });
  });

  return iconContainer;
};

export const pwIconColors = () => {
  const colors = [
    "red",
    "yellow",
    "green",
    "primary",
    "primary-dark",
    "white",
    "gray-light",
    "gray-dark",
  ];

  const iconContainer = document.createElement("div");

  colors.forEach((color) => {
    const iconElement = Template({
      icon: "check",
      color,
      size: "lg",
    });
    iconContainer.appendChild(iconElement);
    iconContainer.style.display = "grid";
    iconContainer.style.gap = "12px";
    iconContainer.style.gridTemplateColumns = "repeat(3, 30px)";
    iconContainer.style.alignItems = "center";
  });
  return iconContainer;
};
