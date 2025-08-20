export default {
  title: "Components/Typography/Heading",
  argTypes: {
    align: {
      options: ["left", "right", "center"],
      control: { type: "radio" },
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: "select" },
    },
    variant: {
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
      control: { type: "select" },
    },
  },
};

const Template = ({ variant, align, level, message }) => {
  const heading = document.createElement(`h${level}`);
  heading.className = `fudis-heading fudis-heading__align__${align} fudis-heading__variant__${variant}`;
  heading.textContent = message;

  return heading;
};

let defaultValues = {
  align: "left",
  level: 1,
  message: "I am a heading element, but I could be something else too!",
  variant: "xxl",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    {
      level: 1,
      message: "I am a level 1 heading, but I could be something else too!",
      variant: "xxl",
    },
    {
      level: 2,
      message: "I am a level 2 heading, but I could be something else too!",
      variant: "xl",
    },
    {
      level: 3,
      message: "I am a level 3 heading, but I could be something else too!",
      variant: "lg",
    },
    {
      level: 4,
      message: "I am a level 4 heading, but I could be something else too!",
      variant: "md",
    },
    {
      level: 5,
      message: "I am a level 5 heading, but I could be something else too!",
      variant: "sm",
    },
    {
      level: 6,
      message: "I am a level 6 heading, but I could be something else too!",
      variant: "xs",
    },
    {
      level: 6,
      message: "I am a level 6 heading, but I could be something else too!",
      variant: "xxs",
    },
    { align: "left", level: 3, message: "Heading aligned left", variant: "lg" },
    {
      align: "center",
      level: 3,
      message: "Heading aligned center",
      variant: "lg",
    },
    {
      align: "right",
      level: 3,
      message: "Heading aligned right",
      variant: "lg",
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
    .join("");
};
