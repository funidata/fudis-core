import "./style.scss";
import htmlAddonPreview from "@whitespace/storybook-addon-html/preview";
import prettier from "prettier2/standalone";
import prettierHtmlParser from "prettier2/parser-html";

// the addon whitespace/storybook.addon-html version 8 does not format the HTML code correctly,
// so we need to format it manually. This should be removed when the addon is updated to version 9,
// also remove the dependency on prettier2 and prettier-plugin-jsdoc from package.json

const formatHtml = (code) => {
  try {
    return prettier.format(code, {
      parser: "html",
      plugins: [prettierHtmlParser],
    });
  } catch (error) {
    return code;
  }
};

const preview = {
  decorators: htmlAddonPreview.decorators,
  parameters: {
    html: {
      transform: formatHtml,
    },
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
            "Box",
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
