module.exports = {
  extends: [
    // Turns off all rules that are unnecessary or might conflict with Prettier,
    // lints code which is formated different than prettier rules
    "plugin:prettier/recommended",
    // disable any potential @typescript-eslint rules relating to code formatting
    "prettier/@typescript-eslint",
  ]
};
