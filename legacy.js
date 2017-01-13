module.exports = {
  extends: [
    "./rules/legacy",
    "./rules/node",
  ].map(require.resolve),
  env: {
    "browser": true,
    "jasmine": true,
    "node": true
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};