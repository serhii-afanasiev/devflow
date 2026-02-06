const stylelintConfig = {
  extends: [
    // Base CSS correctness
    "stylelint-config-standard",

    // Tailwind-specific adjustments (must be AFTER standard)
    "stylelint-config-tailwindcss",
  ],

  ignoreFiles: ["**/*.js", "**/*.ts", "**/*.tsx"],

  plugins: ["stylelint-order"],

  rules: {
    "order/order": ["custom-properties", "declarations"],

    "order/properties-order": [
      [
        // Positioning
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",

        // Layout
        "display",
        "flex",
        "grid",
        "align-items",
        "justify-content",

        // Box model
        "width",
        "height",
        "margin",
        "padding",

        // Typography
        "font",
        "font-size",
        "line-height",
        "color",

        // Visual
        "background",
        "border",
        "box-shadow",

        // Animation
        "transition",
        "transform",
      ],
      { unspecified: "bottom" },
    ],
  },
};

export default stylelintConfig;
