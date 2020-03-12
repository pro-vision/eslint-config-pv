// disable all rules known to conflict with @typescript-eslint plugin
// all except `"no-return-await"` have an equivalent  @typescript-eslint/ rule.
// {@see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs}
module.exports = {
  rules: {
    "brace-style": "off",
    "comma-spacing": "off",
    "default-param-last": "off",
    "func-call-spacing": "off",
    "indent": "off",
    "no-array-constructor": "off",
    "no-dupe-class-members": "off",
    "no-empty-function": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-magic-numbers": "off",
    "no-return-await": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "quotes": "off",
    "require-await": "off",
    "semi": "off",
    "space-before-function-paren": "off",
  },
};
