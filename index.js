module.exports = {
  extends: [
    "./rules/4-0",
    "./rules/4-2",
    "./rules/4-6",
    "./rules/es6",
    "./rules/es6-plugins"
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      "parserOptions.ecmaVersion": true,
    },
  },
  rules: {
    strict: "error",
  },
};