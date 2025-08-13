import { mergeConfig } from 'vite';
import pkg from "../package.json";

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
      controls: true,
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

export function viteFinal(config) {
  return mergeConfig(config, {
    define: {
      __PKG_VERSION__: JSON.stringify(pkg.version),
    },
  });
};

export function previewHead(head) {
  return `
    ${head}
    <style>
    /*
    * These styles are intended for Storybook use only
    */
      .sbdocs .full-width-bg {
        margin-top: -4rem;
        width: 100vw;
        height: 20rem;
        margin-left: calc(-50vw + 50%);
        background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('./assets/fudis-core-bg.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-sizing: border-box;
        margin-bottom: 2rem;
        display: flex;

          h1 {
            color: #000; 
            margin: auto;
            font-size: 40px;
          }

      }
      .welcome-page-wrapper {
          display: flex;
          align-items: center;

        .fudis-link {
          display: flex;
          align-items: center;
          width: fit-content;
          margin-right: 8px;

          .fudis-icon {
          color: #1d65b8;
          }
      }
      }
    </style>
  `;
}
