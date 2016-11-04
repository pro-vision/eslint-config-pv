module.exports = {
  "env": {
    "es6": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": false,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": false,
    "regexUFlag": false,
    "regexYFlag": false,
    "restParams": true,
    "spread": true,
    "superInFunctions": false,
    "templateStrings": true,
    "unicodeCodePointEscapes": false,
    "globalReturn": false,
    "jsx": false
  },
  "rules": {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": [2, "as-needed"],
    // require parens in arrow function arguments
    "arrow-parens": [1, "always"],
    // require space before/after arrow function"s arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    // verify super() callings in constructors
    "constructor-super": 2,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 0,
    // disallow modifying variables of class declarations
    "no-class-assign": 2,
    // disallow modifying variables that are declared using const
    "no-const-assign": 2,
    // Disallow duplicate name in class members
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-class-members.md
    "no-dupe-class-members": 2,
    // Disallow empty destructuring patterns
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-pattern.md
    "no-empty-pattern": 2,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 2,
    // require let or const instead of var
    "no-var": 2,
    // require method and property shorthand syntax for object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    "object-shorthand": [1, "always"],
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": 2,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2,
    // suggest using the spread operator instead of .apply()
    "prefer-spread": 1,
    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    "prefer-template": 2,
    // disallow generator functions that do not have yield
    "require-yield": 2
  }
};
