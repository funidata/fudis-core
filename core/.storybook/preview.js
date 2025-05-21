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
        ],
      },
    },
  },
};

export default preview;
