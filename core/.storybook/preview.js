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
          "Foundations", [
            "Introduction",
            "Colors",
            "Typography",
            "Spacing", [
              "Tokens",
              "Classes",
              "Grid"
            ],
            "Breakpoints",
            "Focus",
            "Borders",
            "Utilities",
          ],
          "Components", [
            "Button",
            "Typography", [
              "Header",
              "BodyText",
              "Link",
              "Miscellaneous",
            ],
          ],
        ],
      },
    },
  },
};

export default preview;
