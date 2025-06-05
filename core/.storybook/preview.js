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
          [
            "Introduction",
            ["Introduction", "How to start using Fudis Core"],
            "Development",
            ["Getting Started", "Tooling", ["Git and GitHub Conventions", "Releases"], "Practises", ["Ways of Working", "Project Structure", "Naming Conventions", "Testing practises"]],
          ],
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
            "Popover",
            "Radio Button",
            "Radio Button Group (WIP)",
            "Tab Navigation (WIP)",
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
