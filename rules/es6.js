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
    // 4.0.0

    // enforces no braces where they can be omitted
    "arrow-body-style": ["error", "as-needed"],

    // require parens in arrow function arguments
    "arrow-parens": ["error", "as-needed"],

    // require space before/after arrow function"s arrow
    "arrow-spacing": ["error", { "before": true, "after": true }],

    // if a class method does not use this, it can safely be made a static function
    "class-methods-use-this": ["off"],

    // verify super() callings in constructors
    "constructor-super": ["error"],

    // enforce the spacing around the * in generator functions
    "generator-star-spacing": ["off"],

    // Disallow await inside of loops
    "no-await-in-loop": ["error"],

    // Disallow modifying variables of class declarations
    "no-class-assign": ["error"],

    // disallow modifying variables that are declared using const
    "no-const-assign": ["error"],

    // Disallow duplicate name in class members
    "no-dupe-class-members": ["error"],

    // Disallow empty destructuring patterns
    "no-empty-pattern": ["error"],

    // Disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": ["error"],

    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": ["error"],

    // require let or const instead of var
    "no-var": ["error"],

    // Disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": ["error"],

    // require method and property shorthand syntax for object literals
    "object-shorthand": ["error", "always"],

    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": ["error"],

    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": ["error"],

    // Prefer destructuring from arrays and objects
    "prefer-destructuring": ["off"],

    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": ["off"],

    // suggest using Reflect methods where applicable
    "prefer-reflect": ["off"],

    // flag usage of arguments variables
    "prefer-rest-params": ["error"],

    // suggest using the spread operator instead of .apply()
    "prefer-spread": ["error"],

    // suggest using template literals instead of string concatenation
    "prefer-template": ["error"],

    // Disallow async functions which have no await expression
    "require-await": ["error"],

    // disallow generator functions that do not have yield
    "require-yield": ["error"],

    // Enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": ["error", "never"],

    // babel inserts `"use strict";` for us
    "strict": ["error", "never"],

    // require symbol description
    "symbol-description": ["error"],

    // maintain consistency around the spacing inside of template literals
    "template-curly-spacing": ["error", "never"],

    // Require or disallow spacing between template tags and their literals
    "template-tag-spacing": ["error", "never"],

    // requires to declare all vars on top of their containing scope
    "vars-on-top": ["off"],

    // spacing consistency for generators
    "yield-star-spacing": ["error", { "before": false, "after": true }],
  }
};
