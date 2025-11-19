export default {
  title: "Components/Link",
  argTypes: {
    size: {
      options: ["md", "lg"],
      control: { type: "radio" },
    },
    title: {
      name: "title",
      control: { type: "text" },
    },
    external: {
      name: "external",
      control: { type: "boolean" },
    },
  },
};

const Template = ({ size, title, external }) => {
  const link = document.createElement("a");
  link.textContent = title;
  const icon = document.createElement("span");

  if (external) {
    link.href = "www.example.com";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.ariaLabel = title + ", Opens in a new tab";
    link.className = `fudis-link__external fudis-link__size__${size}`;
    icon.className =
      "fudis-link__external__icon fudis-icon fudis-icon__lg fudis-icon__color__primary-dark fudis-icon__new-tab";
    link.appendChild(icon);
  } else {
    link.href = "";
    link.className = `fudis-link fudis-link__size__${size}`;
  }

  return link;
};

let defaultValues = {
  size: "md",
  title: "I am a link",
  external: false,
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { size: "md", title: "I am a medium sized link" },
    { size: "lg", title: "I am a large sized link" },
    {
      size: "md",
      title: "I am a medium sized link that opens in a new tab",
      external: true,
    },
    {
      size: "lg",
      title: "I am a large sized link that opens in a new tab",
      external: true,
    },
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
