const jsdocPlugin = require("eslint-plugin-jsdoc");

module.exports = [
  {
    name: "eslint-config-pv/jsdoc-plugin",
    plugins: {
      jsdoc: jsdocPlugin,
    }
  },
  {
    name: "eslint-config-pv/jsdoc-rules",
    rules: {
      "jsdoc/check-param-names": "warn",
      "jsdoc/check-property-names": "warn",
      "jsdoc/require-param-name": "warn",
      "jsdoc/require-property": "warn",
      "jsdoc/require-property-name": "warn",
      "jsdoc/require-returns-check": "warn",
    }
  },
];
