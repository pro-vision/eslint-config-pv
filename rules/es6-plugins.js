module.exports = {
  "plugins": ["import"],
  "rules": {
    // Enforce the order of import statement
    "import/order": [2, {
      "newlines-between": "always",
      "groups": [
        ["builtin", "external", "internal"],
        ["index", "sibling", "parent"]
      ]
    }],
    // this rule reports any imports that come after non-import statments
    "import/imports-first": 2,

    // ensure consistent use of file extension within the import path
    "import/extensions": [2, {"js": "never"}]
  }

};