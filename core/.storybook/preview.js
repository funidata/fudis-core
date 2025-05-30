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
            "Checkbox Group (WIP)",
            "Error Summary (WIP)",
            "Horizontal Rule",
            "Link (WIP)",
            "Loading Spinner",
            "Notification (WIP)",
            "Radio Button",
            "Radio Button Group (WIP)",
            "Text Area",
            "Text Input",
            "Typography",
            ["BodyText", "Heading", "Miscellaneous"],
          ],
        ],
      },
    },
  },
};

export default preview;
