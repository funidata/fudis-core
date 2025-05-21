import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

/**
 * Replace Storybook logo with brand image on the sidebar
 */
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Core style library for Fudis",
    brandUrl: "https://github.com/funidata/fudis-core",
    brandImage: "../src/assets/images/fudis-logo-regular-black.svg",
    brandTarget: "_self",
  }),
});
