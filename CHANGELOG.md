# Changelog

## 6.0.0

- (Breaking) Updated: eslint to v10. See eslint's [v10 migration guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0), e.g. for changes to config file lookup and the removed support for `/* eslint-env */` comments.
- (Breaking) Changed: minimal node version is 22.22.2 (or 24.15.0). Node 20 reached its end of life and is not supported by the latest eslint-plugin-jsdoc anymore.
- (Breaking) Changed: replaced `eslint-plugin-import` (no eslint v10 support) with its fork [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x). It is still registered as `import`, so `import/` rules can be used and overridden as before, but plugin settings have to be renamed to use the `import-x/` prefix (e.g. `"import/resolver"` -> `"import-x/resolver"`, `"import/internal-regex"` -> `"import-x/internal-regex"`).
- (Breaking) Updated: `@stylistic/eslint-plugin` to v6, `eslint-plugin-jsdoc` to v65, `globals` to v17 and `typescript-eslint` to v8.73.0.
- Added: `no-unassigned-vars`, `no-useless-assignment` and `preserve-caught-error` rules (new in eslint's recommended config).
- Added: new typescript-eslint rules (all disabled).
- Changed: `no-shadow-restricted-names` reports shadowing of `globalThis` as well (new eslint v10 default).
- Notice: typescript-eslint does not support TypeScript 7 yet, TypeScript <=6.0 is required for the typescript config.

## 5.0.0

See [migration guide](./migration-guide-v5.md)!

### 5.0.0-alpha.1

- Changed: eslint and eslint plugins are defined as packages dependencies and the user is not expected to install them anymore.
- (Breaking) Added: minimal node version that support `require(esm)` (20.19.0 and 22.12.0) to allow continued to use require in combination with esm only dependencies.
- Fix: `@stylistic/object-property-newline` option name.
- (Breaking) removed: `legacy` rule set which was meant for pre ES6 javascript. And not really relevant anymore.

### 5.0.0-alpha.0

- (Breaking) Changed: moved to flat eslint config file.
- (Breaking) Updated: rules which were moved to @stylistic plugin.
- (Breaking) Updated: rules for typescript-eslint up to v8.23.0.
- (Breaking) using valid-jsdoc eslint plugin to replace the deprecated `valid-jsdoc` rule.

## 4.0.0

- Updated: updated for @typescript-eslint v6

## 3.2.0

- Updated: updated rules for eslint up to v8.44.0
- Updated: updated rules for @typescript-eslint up to v5.60.1

## 3.1.0

- Updated: updated rules for eslint v8.22.0
- Updated: updated rules for @typescript-eslint v5.34.0
- Updated: updated for eslint-plugin-prettier v4.2.1
- Changed: `lines-around-comment` to not force empty line before block comment at the beginning of Classes, Object Literals and Arrays
- Changed: `quotes`: does not require quotes around language keywords used as object property names anymore

## 3.0.0

- Updated: updated rules for eslint v8.1.0 (+ recommended)
- Updated: updated rules for @typescript-eslint v5.3.0 (+ recommended)
- Updated: updated for eslint-plugin-prettier v4.0.0
- Changed: move package to `@pro-vision` scope

## 2.3.0

- Added: typescript rule set to be used with @typescript-eslint
- Changed: pretier rules
- Changed: `"no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]`
- Changed: `"@typescript-eslint/no-non-null-assertion": "off"`
- Updated: `ecmaVersion` to 2020

## 2.1.1

- Changed: made prettier optional

## 2.1.0

- Changed: added prettier compatibility

## 2.0.0

-   Changed: Compatible with eslint 4.6.1
-   Changed: added `"array-bracket-newline": ["off"]`
-   Changed: added `"array-element-newline": ["off"]`
-   Changed: added `"capitalized-comments": ["off"]`
-   Changed: added `"class-methods-use-this": ["off"]`
-   Changed: added `"for-direction": ["error"]`
-   Changed: added `"func-call-spacing": ["error", "never"]`
-   Changed: added `"func-name-matching": ["off"]`
-   Changed: added `"indent": ["error", 2, { "SwitchCase": 1 }]`
-   Changed: added `"line-comment-position": ["off"]`
-   Changed: added `"linebreak-style": ["error", "unix"]`
-   Changed: added `"multiline-ternary": ["error", "always-multiline"]`
-   Changed: added `"newline-before-return": ["off"]`
-   Changed: added `"no-mixed-operators": ["error"]`
-   Changed: added `"no-restricted-globals": ["error", "event"]`
-   Changed: added `"no-shadow": ["error", { "hoist": "functions" }]`
-   Changed: added `"no-warning-comments": ["error", { "terms": ["todo", "fixme", "hack", "hacky"], "location": "start" }]`
-   Changed: added `"object-curly-newline": ["off"]`
-   Changed: added `"padding-line-between-statements": ["off"]`
-   Changed: added `"prefer-destructuring": ["off"]`
-   Changed: added `"prefer-promise-reject-errors": ["off"]`
-   Changed: added `"require-jsdoc": ["off"]`
-   Changed: added `"rest-spread-spacing": ["error", "never"]`
-   Changed: added `"semi-style": ["error", "last"]`
-   Changed: added `"symbol-description": ["error"]`
-   Changed: added `"template-tag-spacing": ["error", "never"]`
-   Changed: added `"unicode-bom": ["error", "never"]`
-   Changed: added `"getter-return": ["error"]`
-   Changed: added `"function-paren-newline": ["off"]`


## 1.0.10

-   Changed: curly to: "error", "multi-line", "consistent"

## 1.0.9

(Skipped because of publishing issues))

## 1.0.8

(Skipped because of publishing issues)

## 1.0.7

-   Updated: license

## 1.0.6

-   Changed: disabled no-new

## 1.0.5

-   Changed: Moved strict to es6.js

## 1.0.4

-   Changed: no-magic-numbers to 0
-   Changed: object-property-newline: (2, { "allowMultiplePropertiesPerLine": true })
-   Changed: quote-props: (2, "as-needed", { "keywords": true, "unnecessary": true })
-   Changed: merged all rules into fewer files

## 1.0.3

-   Added: tests

## 1.0.2

-   Fixed: testing transferring ownership

## 1.0.1

-   Changed: publishing through npmpub
-   Removed: grunt

## 1.0.0

-   Initial release
