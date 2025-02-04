# @pro-vision/eslint-config-pv

This package provides pro!vision's ESLint configuration as an extensible shared config.

_Originally inspired by [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)_

Rules mostly follow:

- eslint's `js.configs.recommended`
- typescript-eslint's `strict-type-checked`

> [!IMPORTANT]
> Since version 5.0.0, only the eslint's flat config file is supported, for older .eslintrc config files please use this package [@v4.0.0](https://www.npmjs.com/package/@pro-vision/eslint-config-pv/v/4.0.0).

## Installation

```bash
npm install --save-dev @pro-vision/eslint-config-pv eslint eslint-plugin-import eslint-plugin-jsdoc
# in addition, for typescript linting
npm install --save-dev typescript-eslint typescript
# in addition, to use with prettier
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```

See this projects [package.json](./package.json)'s devDependency list for the exact version which were tested against.

## Usage

Create an `eslint.config.mjs` (or `eslint.config.cjs`) file with necessary presets and customized rules. For example:

```js
// eslint.config.mjs

import pvESLintTS from "@pro-vision/eslint-config-pv/typescript";
import pvESLintPrettier from "@pro-vision/eslint-config-pv/prettier";

export default [
  ...pvESLintTS,
  ...pvESLintPrettier,

  {
    rules: {
      "no-console": "off",
      "@typescript-eslint/unbound-method": "off",
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "{Helper,Components}/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: [],
          groups: ["builtin", "external", "internal", ["index", "sibling", "parent"]],
        },
      ],
    }
  }
]
```

In detail for specific use cases:

### Javascript files

```js
// eslint.config.mjs

import pvESLintJS from "@pro-vision/eslint-config-pv/javascript";

export default [
  ...pvESLintJS,
]
```

### Modifying rules

```diff
// eslint.config.mjs

import pvESLintJS from "@pro-vision/eslint-config-pv/javascript";

export default [
  ...pvESLintJS,

+  {
+    rules: {
+      "no-console": "off",
+      "import/order": [
+        "error",
+        {
+          "newlines-between": "always",
+          pathGroups: [
+            {
+              pattern: "{Helper,Components}/**",
+              group: "internal",
+            },
+          ],
+          pathGroupsExcludedImportTypes: [],
+          groups: ["builtin", "external", "internal", ["index", "sibling", "parent"]],
+        },
+      ],
+    }
+  }
]
```

### With prettier

install these dependencies

```bash
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```

and update the eslint.config.mjs file

```diff
// eslint.config.mjs

  import pvESLintJS from "@pro-vision/eslint-config-pv/javascript";
+ import pvESLintPrettier from "@pro-vision/eslint-config-pv/prettier";

export default [
    ...pvESLintJS
+   ...pvESLintPrettier

    {
      rules: {
        ...
      }
    }
]

```

This will run eslint with your prettier config in addition to the previous eslint rules and report any formatting issues / auto fix them.

### For typescript files

install the additional dependency

```bash
npm install --save-dev typescript-eslint
```

and update the eslint.config.mjs file using `eslint-config-pv/typescript` **Instead** of `eslint-config-pv/javascript` (It already contains all the rules in the /javascript config).

```diff
// eslint.config.mjs

- import pvESLintJS from "@pro-vision/eslint-config-pv/javascript";
+ import pvESLintTS from "@pro-vision/eslint-config-pv/typescript";
  import pvESLintPrettier from "@pro-vision/eslint-config-pv/prettier";

export default [
-  ...pvESLintJS
+  ...pvESLintTS
   ...pvESLintPrettier

    {
      rules: {
        ...
      }
    }
]

```

`@pro-vision/eslint-config-pv/typescript` assumes your `tsconfig.json` file is in the same directory as where you call eslint. i.e. your projects root directory. But you can also specify this with:

```diff
// eslint.config.mjs

export default [
  ...
+  {
+    languageOptions: {
+      parserOptions: {
+        project: "./my-tsconfig.json",
+        tsconfigRootDir: "my-configs/",
+      },
+    },
+  },
]
```
