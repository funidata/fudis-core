import "./style.scss";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Documentation",
          ["Introduction", "Development", ["Tooling", ["Releases"]]],
          "Foundations",
          [
            "Introduction",
            "Colors",
            "Typography",
            "Spacing",
            ["Tokens", "Classes", "Grid"],
            "Breakpoints",
            "Focus",
            "Borders",
            "Utilities",
          ],
          "Components",
          [
            "Button",
            "Typography",
            ["Header", "BodyText", "Link", "Miscellaneous"],
          ],
        ],
      },
    },
  },
};

export default preview;
