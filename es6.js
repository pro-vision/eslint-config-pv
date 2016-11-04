module.exports = {
  extends: [
    "./legacy",
    "./rules/es6",
    "./rules/es6-plugins"
  ].map(require.resolve),
  rules: {}
};
