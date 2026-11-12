export default {
  title: "Components/Highlight Container",
  argTypes: {
    variant: {
      options: ["blue-light"],
      control: { type: "radio" },
    },
  },
};

const Template = ({ variant }) => {
  const containerDiv = document.createElement("div");
  containerDiv.style.height = "100px";
  containerDiv.style.width = "33%";
  containerDiv.className = `fudis-highlight-container__${variant}`;

  return containerDiv;
};

let defaultValues = {
  variant: "blue-light",
};

export const Example = Template.bind({});
Example.args = defaultValues;
