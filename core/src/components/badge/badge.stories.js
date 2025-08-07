export default {
  title: "Components/Badge",
  argTypes: {
    content: {
      name: "content",
      control: { type: "text" },
    },
    variant: {
      options: ["accent", "danger", "primary", "secondary", "success"],
      control: { type: "radio" },
    },
  },
};

const Template = ({ content, variant }) => {
  const badgeDiv = document.createElement("div");
  badgeDiv.className = `fudis-badge fudis-badge__${variant}`;
  badgeDiv.textContent = content;

  return badgeDiv;
};

let defaultValues = {
  content: "Badge",
  variant: "accent",
};

export const Badge = Template.bind({});
Badge.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { content: "Accent", variant: "accent" },
    { content: "Danger", variant: "danger" },
    { content: "Primary", variant: "primary" },
    { content: "Secondary", variant: "secondary" },
    { content: "Success", variant: "success" },
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
