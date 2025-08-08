export default {
  title: "Components/Typography/BodyText",
  argTypes: {
    align: {
      options: ["left", "right", "center"],
      control: { type: "radio" },
    },
    variant: {
      options: [
        "sm-regular",
        "md-regular",
        "lg-regular",
        "md-light",
        "lg-light",
      ],
      control: { type: "select" },
    },
  },
};

const Template = ({ variant, align, message }) => {
  const bodyText = document.createElement("p");
  bodyText.className = `fudis-body-text fudis-body-text__${variant} fudis-body-text__${align}`;
  bodyText.textContent = message;

  return bodyText;
};

let defaultValues = {
  variant: "md-regular",
  align: "left",
  message: "The quick brown fox jumps over the lazy dog.",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { variant: "lg-regular", message: "Large regular text" },
    { variant: "lg-light", message: "Large light text" },
    { variant: "md-regular", message: "Medium regular text" },
    { variant: "md-light", message: "Medium light text" },
    { variant: "sm-regular", message: "Small regular text" },
    { variant: "md-regular", message: "Medium regular text aligned left" },
    {
      variant: "md-regular",
      message: "Medium regular text aligned center",
      align: "center",
    },
    {
      variant: "md-regular",
      message: "Medium regular text aligned right",
      align: "right",
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
