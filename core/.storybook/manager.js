import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

/**
 * Replace Storybook logo with brand image on the sidebar
 */
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Core style library for Fudis",
    brandUrl: "/index.html",
    brandImage: "./assets/fudis-logo-regular-black.svg",
    brandTarget: "_self",
  }),
});
