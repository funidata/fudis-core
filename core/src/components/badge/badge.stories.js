export default {
  title: "Components/Badge",
  argTypes: {
    variant: {
      options: ["accent", "danger", "primary", "secondary", "success"],
      control: { type: "radio" },
    },
  },
};

const Template = ({ message, variant }) => {
  const badgeDiv = document.createElement("div");
  badgeDiv.className = `fudis-badge fudis-badge__${variant}`;
  badgeDiv.textContent = message;

  return badgeDiv;
};

let defaultValues = {
  message: "Badge",
  variant: "accent",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { message: "Accent", variant: "accent" },
    { message: "Danger", variant: "danger" },
    { message: "Primary", variant: "primary" },
    { message: "Secondary", variant: "secondary" },
    { message: "Success", variant: "success" },
  ];

  return configurations
    .map((config) => {
      const element = Template({
        ...defaultValues,
        ...config,
      });

      return element.outerHTML;
    })
    .join("&nbsp;");
};
