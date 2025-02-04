# Migration guide `@pro-vision/eslint-config-pv` v4 to v5

eslint-config-pv @v5 brings support for the ESLint v9.0.0's new [flat config file format](https://eslint.org/docs/latest/use/configure/configuration-files) instead of the now legacy .eslintrc file.
In addition to that, some rules being moved from eslint or typescript-eslint to the @stylistic package.
Similar to other major releases, some new lint rules are also added to the configuration.

To migrate an existing project:

1- update dependencies in package.json:

```diff
{
  "devDependencies": {
-    "@pro-vision/eslint-config-pv": "4.0.0",
+    "@pro-vision/eslint-config-pv": "5.0.0",

-    "@typescript-eslint/eslint-plugin": "6.1.0",
-    "@typescript-eslint/parser": "6.1.0",
+    "typescript-eslint": "8.23.0",

-    "eslint": "8.45.0",
+    "eslint": "9.19.0",

-    "eslint-config-prettier": "8.8.0",
+    "eslint-config-prettier": "10.0.1",

-    "eslint-plugin-import": "2.27.5",
+    "eslint-plugin-import": "2.31.0",

-    "eslint-plugin-prettier": "5.0.0",
+    "eslint-plugin-prettier": "5.2.3",

+    "eslint-plugin-jsdoc": "50.6.3",
+    "globals": "15.14.0",
  }
}
```

2- rename .eslintrc.js to eslintrc.config.cjs. (you can also use the .mjs extension and use esm syntax instead of commonJs).

3- move .gitignore content to eslint.config.cjs

```diff
- // .eslintignore
-
- **/*.js
```

```diff
- // .eslintrc.js
+ // eslint.config.cjs

+ const pvESLintTS = require("@pro-vision/eslint-config-pv/typescript");
+ const pvESLintPrettier = require("@pro-vision/eslint-config-pv/prettier");

module.exports = {

-  extends: [
-    "@pro-vision/eslint-config-pv/typescript",
-    "@pro-vision/eslint-config-pv/prettier"
-  ],
+  ...pvESLintTS,
+  ...pvESLintPrettier,

+ {
    rules: {

-     "wrap-iife": "off",
+     "@stylistic/wrap-iife": "off",

-     "valid-jsdoc": "off",
+     "jsdoc/...": "off",
    },
+ }

-   overrides: [
-     {
-       files: ["**/*.test.ts"],
-       rules: {
-         "no-proto": "off",
-       },
-     },
-     {
-       files: ["**/*.cy.ts"],
-       parserOptions: {
-         project: ['./cypress/tsconfig.json'],
-       },
-     },
-   ],

+   {
+     files: ["**/*.test.ts"],
+     rules: {
+       "no-proto": "off",
+     },
+   },
+   {
+     files: ["**/*.cy.ts"],
+     languageOptions: {
+       parserOptions: {
+         project: ['./cypress/tsconfig.json'],
+       },
+     }
+   },


+    {
+      ignores: ["**/*.js"]
+    }
};

```

You might have different rules in your config or as inline comment in combination with `/* eslint-disable */`. See these pages for the complete list of rules that have been moved to @stylistic:

| | |
| -------- | ------- |
| eslint | https://eslint.org/blog/2023/10/deprecating-formatting-rules/ |
| eslint-typescript | https://typescript-eslint.io/blog/deprecating-formatting-rules/#upgrading-to-eslint-stylistic |

4- Make sure the correct pattern is passed for the .ts files via cli e.g. npm scripts:

```diff
-  "eslint": "eslint  \"src/**/*.ts \"",
+  "eslint": "eslint  \"src/**/*.ts\"",
```

5- Update code based on the new rules. For example for the `import/named` rule, make sure type only imports are marked as such:

```diff
- import { html, TemplateResult } from "lit-html";
+ import { html, type TemplateResult } from "lit-html";
```
