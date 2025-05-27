export const stories = [
  "../src/**/*.mdx",
  "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  "../documentation/**/*.mdx",
];

export const staticDirs = [
  { from: "./../src/assets/fonts/woff", to: "/assets" },
  { from: "./../src/assets/images", to: "/assets" },
];

export const addons = [
  {
    name: "@storybook/addon-essentials",
    options: {
      controls: false,
      actions: false,
    },
  },
  "@storybook/addon-storysource",
  "@storybook/addon-a11y",
];

export const framework = {
  name: "@storybook/html-vite",
  options: {},
};

export const viteFinal = async (config, { configType }) => {
  config.plugins = config.plugins || [];
  config.plugins.push({
    name: "scss-font-url-rewrite",
    transform(code, id) {
      if (id.includes(".storybook/style.scss")) {
        return code.replace(
          /url\(['"]?.*\/([\w-]+\.woff2)['"]?\)/g,
          `url(${configType === "DEVELOPMENT" ? "assets/$1" : "$1"})`,
        );
      }
      return null;
    },
  });

  return config;
};

/**
 * Manage favicon
 */
export function managerHead(head) {
  return `
    ${head}
    <link rel="icon" type="image/svg+xml" href="./assets/fudis-logo-favicon-black.png">
  `;
}
