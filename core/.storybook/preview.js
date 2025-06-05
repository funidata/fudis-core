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
            [
              "Getting Started",
              "Tooling",
              ["Git and GitHub Conventions", "Releases", "Testing Local Changes with Symlink"],
              "Practises",
              [
                "Ways of Working",
                "Project Structure",
                "Naming Conventions",
                "Testing practises",
              ],
            ],
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
            "Alert",
            "Badge",
            "Button",
            "Button, icon only",
            "Checkbox",
            "Checkbox Group",
            "Error Summary",
            "Horizontal Rule",
            "Icon (WIP)",
            "Link (WIP)",
            "Loading Spinner",
            "Notification",
            "Popover",
            "Radio Button",
            "Radio Button Group",
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
