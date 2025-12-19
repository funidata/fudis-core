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
            ["Welcome", "How to start using Fudis Core"],
            "Development",
            [
              "Getting Started",
              "How to Contribute",
              "Tooling",
              [
                "Git and GitHub Conventions",
                "Releases",
                "Testing Local Changes in Application",
              ],
              "Practises",
              [
                "Ways of Working",
                "Project Structure",
                "Naming Conventions",
                "Testing",
              ],
              "Information Security Management",
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
            "Breadcrumbs",
            "Button",
            "Button, icon only",
            "Checkbox",
            "Checkbox Group",
            "Description List",
            "Error Summary",
            "Horizontal Rule",
            "Icon",
            "Link",
            "Loading Spinner",
            "Notification",
            "Popover",
            "Radio Button",
            "Radio Button Group",
            "Table",
            "Tab Navigation",
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
