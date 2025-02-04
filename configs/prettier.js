const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
  // this includes eslint-plugin-prettier plugin, to lint against prettier config
  // and this also includes eslint-config-prettier which turns off any rule that is in conflict with prettier
  eslintPluginPrettierRecommended,
];
