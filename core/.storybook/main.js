export const stories = [
  "../src/**/*.mdx",
  "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  "../documentation/**/*.mdx",
];

export const staticDirs = [
  { from: "./assets/fonts", to: "/assets" },
  { from: "./downloads", to: "/downloads" },
  { from: "./../src/assets/images", to: "/assets" },
  {
    from: "./../src/assets/images/fudis-logo-mini-black.svg",
    to: "/favicon.svg",
  },
];

export const addons = [
  {
    name: "@storybook/addon-essentials",
    options: {
      controls: false,
      actions: false,
    },
  },
  "@storybook/addon-a11y",
  "@whitespace/storybook-addon-html",
];

export const framework = {
  name: "@storybook/html-vite",
  options: {},
};
