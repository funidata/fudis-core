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
            "Alert (WIP)",
            "Badge",
            "Button (WIP)",
            "Checkbox (WIP)",
            "Link (WIP)",
            "Notification (WIP)",
            "Radio Button",
            "Text Area",
            "Text Input",
            "Typography",
            ["BodyText", "Header", "Miscellaneous"],
          ],
        ],
      },
    },
  },
};

export default preview;
