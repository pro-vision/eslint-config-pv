// disable all rules known to conflict with @typescript-eslint plugin
// all have an equivalent @typescript-eslint/ rule.
// {@see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs}
module.exports = {
  rules: {
    "default-param-last": "off",
    "dot-notation": "off",
    "init-declarations": "off",
    "no-array-constructor": "off",
    "no-dupe-class-members": "off",
    "no-empty-function": "off",
    "no-implied-eval": "off",
    "no-invalid-this": "off",
    "no-loop-func": "off",
    "no-magic-numbers": "off",
    "no-redeclare": "off",
    "no-restricted-imports": "off",
    "no-shadow": "off",
    // disables for @typescript-eslint/only-throw-error, which used to be called @typescript-eslint/no-throw-literal
    "no-throw-literal": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "prefer-promise-reject-errors": "off",
    "require-await": "off",
    "class-methods-use-this": "off",
    "no-return-await": "off",
    "consistent-return": "off",
    "max-params": "off",
    "prefer-destructuring": "off",
  },
};
