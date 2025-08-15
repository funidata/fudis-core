const icons = [
  "achievement",
  "alert",
  "alert-fill",
  "archive",
  "arrow-big",
  "arrow-dashed",
  "arrow-solid",
  "back",
  "brochure",
  "bullets",
  "calendar",
  "change-log",
  "check",
  "checkmark-circle",
  "chevron",
  "chevron-ring",
  "chevron-ring-fill",
  "clock",
  "close",
  "close-big",
  "code",
  "decrease-indent",
  "delete",
  "dot",
  "edit",
  "editor",
  "exclamation-mark-circle",
  "exclamation-mark-circle-fill",
  "eye",
  "eye-blind",
  "fail",
  "hourglass",
  "increase-indent",
  "info",
  "info-circle",
  "info-circle-fill",
  "junction",
  "link",
  "list-add",
  "list-minus",
  "lock",
  "lock-open",
  "magic-wand",
  "mail",
  "menu",
  "message",
  "minus",
  "minus-ring-fill",
  "new-tab",
  "notebook",
  "notification",
  "numbering",
  "paperclip",
  "pdf",
  "people",
  "person",
  "picker",
  "pin",
  "place",
  "place-ring-fill",
  "plus",
  "print",
  "question-mark",
  "required",
  "ring-close",
  "ring-close-fill",
  "ring-plus",
  "ring-plus-fill",
  "rosette",
  "rule",
  "search",
  "seats",
  "settings",
  "shopping-cart",
  "sorter",
  "star",
  "switch",
  "three-dots",
  "waiting-approval",
  "waiting-decline",
  "zoom-in",
  "zoom-out",
];

const sizes = ["sm", "md", "lg"];

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

const directions = ["none", "ccw-90", "cw-90", "flip-180"];

function responsiveGrid(screenWidth, iconContainer) {
  if (screenWidth.matches) {
    iconContainer.style.gridTemplateColumns = "120px repeat(3, 35px)";
  } else {
    iconContainer.style.gridTemplateColumns =
      "120px repeat(3, 35px) 120px repeat(3, 35px) 120px repeat(3, 35px)";
  }
}

export default {
  title: "Components/Icon",
  argTypes: {
    icon: {
      options: icons,
      control: { type: "select" },
    },
    color: {
      options: colors,
      control: { type: "select" },
    },
    rotate: {
      options: directions,
      control: { type: "select" },
    },
    size: {
      options: sizes,
      control: { type: "select" },
    },
  },
};

const Template = ({ icon, color, rotate, size }) => {
  const iconSpan = document.createElement("span");

  iconSpan.className = [
    "fudis-icon",
    `fudis-icon__${size}`,
    `fudis-icon__color__${color}`,
    `fudis-icon__${icon}`,
    rotate !== "none" && `fudis-icon__rotate__${rotate}`,
  ]
    .filter(Boolean)
    .join(" ");

  if (color === "white") iconSpan.style.backgroundColor = "#3b3b3b";

  return iconSpan;
};

let defaultValues = {
  icon: "check",
  size: "lg",
  color: "primary",
  rotate: "none",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const AllIcons = () => {
  let screenWidth = window.matchMedia("(max-width: 830px)");

  const iconContainer = document.createElement("div");
  iconContainer.style.display = "grid";
  iconContainer.style.gap = "12px";
  iconContainer.style.alignItems = "center";
  iconContainer.style.justifyItems = "start";

  responsiveGrid(screenWidth, iconContainer);

  screenWidth.addEventListener("change", function () {
    responsiveGrid(screenWidth, iconContainer);
  });

  icons.forEach((icon) => {
    const iconName = document.createElement("p");
    iconName.textContent = icon;
    iconName.className = "fudis-body-text fudis-body-text__md-regular";

    iconContainer.appendChild(iconName);

    sizes.forEach((size) => {
      const iconElement = Template({
        icon,
        color: "primary",
        size,
        rotate: "none",
      });

      iconContainer.appendChild(iconElement);
    });
  });

  return iconContainer;
};

export const pwIconColors = () => {
  const iconContainer = document.createElement("div");

  colors.forEach((color) => {
    const iconElement = Template({
      icon: "check",
      color,
      size: "lg",
      rotate: "none",
    });
    iconContainer.appendChild(iconElement);
    iconContainer.style.display = "grid";
    iconContainer.style.gap = "12px";
    iconContainer.style.gridTemplateColumns = "repeat(3, 30px)";
    iconContainer.style.alignItems = "center";
  });
  return iconContainer;
};

export const pwIconRotate = () => {
  const iconContainer = document.createElement("div");

  directions.forEach((rotate) => {
    const iconElement = Template({
      icon: "arrow-big",
      color: "gray-dark",
      size: "lg",
      rotate,
    });
    iconContainer.appendChild(iconElement);
    iconContainer.style.display = "grid";
    iconContainer.style.gap = "12px";
    iconContainer.style.gridTemplateColumns = "repeat(4, 30px)";
  });

  return iconContainer;
};
