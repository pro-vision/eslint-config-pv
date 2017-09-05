module.exports = {
  extends: [
    "./rules/4-0",
    "./rules/4-2",
    "./rules/4-6",
  ].map(require.resolve),
  env: {
    browser: true,
    node: false,
    amd: false,
    mocha: false,
    jasmine: false
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "vars-on-top": "error",
    "no-restricted-properties": ["error", {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated",
    }, {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead.",
    }, {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead.",
    }]
  }
};