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

export function previewHead(head) {
  return `
    ${head}
    <style>
      .sbdocs .full-width-bg {
        margin-top: -4rem;
        width: 100vw;
        height: 20rem;
        margin-left: calc(-50vw + 50%);
        background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/assets/fudis-core-bg.svg');
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
      .version-badges {
        .fudis-badge {
          margin-right: 5px;
        }

        a.sbdocs {
          color: #484848;
          font-size: 12px;
        }

        p {
        margin: 0;
        }
      }
    </style>
  `;
}
