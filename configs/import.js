const importPlugin = require("eslint-plugin-import");

module.exports = [
  // plugin
  {
    name: "eslint-config-pv/import-plugin",
    plugins: {
      import: importPlugin,
    }
  },

  // import/ rules
  {
    name: "eslint-config-pv/import-rules",
    rules: {
      // Enforce the order of import statement
      "import/order": ["error", {
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          ["index", "sibling", "parent"]
        ]
      }],
      // this rule reports any imports that come after non-import statements
      "import/imports-first": "error",
      // native support of esm, will mean that the extension is required in a lot of places
      // disable the rule and allow projects to decide based on their configuration if it is needed or not
      "import/extensions": "off",
      // with all the aliases configurations, it is hard to have no false positives with this.
      "import/no-unresolved": "off",
      "import/named": "error", // ts
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",
      "import/no-named-as-default": "warn",
      "import/no-named-as-default-member": "warn",
      "import/no-duplicates": "warn",
    }
  }
];
