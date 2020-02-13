module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    // expecting users tsconfig in the same directory as where eslint is executed. (i.e. root)
    tsconfigRootDir: process.cwd(),
  },
  extends: [
    "./index",
    "./rules/ts-reset",
    "./rules/ts",
  ],
  "plugins": ["@typescript-eslint"],
};
