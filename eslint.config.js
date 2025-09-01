const pvESLintJS = require("./javascript");

module.exports = [
  ...pvESLintJS,
  {
    ignores: ["node_modules/"],
    rules: {
      "@stylistic/quote-props": "off",
    },
  },
];
