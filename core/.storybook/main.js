export const stories = [
  "../src/**/*.mdx",
  "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
];

export const staticDirs = ["./../src/assets/fonts/woff"];

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

export const viteFinal = async (config) => {
  config.plugins = config.plugins || [];
  config.plugins.push({
    name: 'scss-font-url-rewrite',
    transform(code, id) {
      if (id.includes('.storybook/style.scss')) {
        return code.replace(
          /url\(['"]?.*\/([\w-]+\.woff2)['"]?\)/g,
          "url('$1')"
        );
      }
      return null;
    }
  });

  return config;
};