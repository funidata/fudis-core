export default {
  title: "Components/Link (WIP)",
  argTypes: {
    size: {
      options: ["md", "lg"],
      control: { type: "radio" },
    },
    title: {
      name: "title",
      control: { type: "text" },
    },
  },
};

// TODO: Add external link stories after icons are available

const Template = ({ size, title }) => {
  const link = document.createElement("a");
  link.setAttribute("href", "");
  link.className = `fudis-link fudis-link__size__${size}`;
  link.textContent = title;

  return link;
};

let defaultValues = {
  size: "md",
  title: "I am a link",
};

export const Link = Template.bind({});
Link.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { size: "md", title: "I am a medium sized link" },
    { size: "lg", title: "I am a large sized link" },
  ];

  return configurations
    .map((config) => {
      const element = Template({
        ...defaultValues,
        ...config,
      });

      return element.outerHTML;
    })
    .join(" ");
};
