// .storybook/YourTheme.js

import { create } from "@storybook/theming/create"

import { primary, purpleDark, secondary, terciary, textColorLight } from "./colors"

export default create({
  brandTitle: "Ayla",
  base: "light",

  colorPrimary: primary,
  colorSecondary: secondary,

  // UI
  appBg: terciary,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: purpleDark,
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: terciary,
  barSelectedColor: textColorLight,
  barBg: primary,

  //Image and link project
  brandUrl: "https://github.com/comexio/design-system",
  brandImage:
    "https://raw.githubusercontent.com/comexio/design-system/master/.github/assets/ayla-logo.png"
});
