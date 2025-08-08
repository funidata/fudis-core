export default {
  title: "Components/Popover",
};

const Template = ({ message }) => {
  const popOver = document.createElement("div");
  popOver.className = "fudis-popover";
  popOver.setAttribute("aria-live", "polite");
  popOver.textContent = message;

  return popOver;
};

export const Example = Template.bind({});
Example.args = {
  message: "Popover text",
};
