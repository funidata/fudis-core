export default {
  title: "Components/Language Badge",
  argTypes: {
    language: {
      options: ["fi", "sv", "en"],
      control: { type: "radio" },
    },
    variant: {
      options: ["standard", "missing"],
      control: { type: "radio" },
    },
    selected: { control: { type: "boolean" } },
  },
};

const Template = ({ language, variant, selected }) => {
  const languages = ["Finnish", "Swedish", "English"];
  const selectedText =
    selected && variant === "standard"
      ? "(Selected)"
      : selected && variant === "missing"
        ? "(Selected) (Missing translation)"
        : !selected && variant === "missing"
          ? "(Missing translation)"
          : "";

  const languageBadgeButton = document.createElement("button");
  languageBadgeButton.className = `fudis-language-badge`;
  languageBadgeButton.setAttribute(
    "aria-label",
    `Change translation to ${languages[["fi", "sv", "en"].indexOf(language)]} ${selectedText}`,
  );

  const languageBadgeSpan = document.createElement("span");
  languageBadgeSpan.className = `fudis-language-badge__content fudis-language-badge__${variant} ${selected ? "fudis-language-badge--selected" : ""}`;
  languageBadgeSpan.textContent = language;

  languageBadgeButton.appendChild(languageBadgeSpan);

  return languageBadgeButton;
};

let defaultValues = {
  language: "fi",
  variant: "standard",
  selected: false,
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  const configurations = [
    { language: "fi", variant: "standard", selected: false },
    { language: "sv", variant: "standard", selected: false },
    { language: "en", variant: "standard", selected: false },
    { language: "fi", variant: "missing", selected: false },
    { language: "sv", variant: "missing", selected: false },
    { language: "en", variant: "missing", selected: false },
    { language: "fi", variant: "standard", selected: true },
    { language: "sv", variant: "standard", selected: true },
    { language: "en", variant: "standard", selected: true },
    { language: "fi", variant: "missing", selected: true },
    { language: "sv", variant: "missing", selected: true },
    { language: "en", variant: "missing", selected: true },
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
