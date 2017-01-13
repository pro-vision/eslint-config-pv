module.exports = {
  "rules": {
    // enforce spacing inside array brackets
    "array-bracket-spacing": [1, "never"],
    // Disallow or enforce spaces inside of single line blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/block-spacing.md
    "block-spacing": [2, "always"],
    // enforce one true brace style
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
    // require camel case names
    "camelcase": 0,
    // enforce spacing before and after comma
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    // enforce one true comma style
    "comma-style": [1, "last"],
    // disallow padding inside computed properties
    "computed-property-spacing": [2, "never"],
    // enforces consistent naming when capturing the current execution context
    "consistent-this": [1, "that"],
    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": 0,
    // require function expressions to have a name
    "func-names": 0,
    // enforces use of function declarations or expressions
    "func-style": [1, "expression"],
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    "id-length": 0,
    // require identifiers to match the provided regular expression
    "id-match": 0,
    // this option sets a specific tab width for your code
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    "indent": [2, 2, {
      "VariableDeclarator": 2,
      "SwitchCase": 1
    }],
    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": [2, "prefer-double"],
    // enforces spacing between keys and values in object literal properties
    "key-spacing": [1, {
      "beforeColon": false,
      "afterColon": true
    }],
    // enforces consistent spacing around keywords and keyword-like tokens
    "keyword-spacing": [1, {
      "before": true,
      "after": true
    }],
    // enforces empty lines around comments
    "lines-around-comment": [1, {
      "beforeBlockComment": true,
      "beforeLineComment": false
    }],
    // disallow mixed "LF" and "CRLF" as linebreaks
    "linebreak-style": 0,
    // specify the maximum length of a line in your program
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    "max-len": [1, 150, 2],
    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": [1, 5],
    // A line of code containing too many statements can be difficult to read
    "max-statements-per-line": [2, { "max": 1 }],
    // require a capital letter for constructors
    "new-cap": 1,
    // disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": 2,
    // allow/disallow an empty newline after var statement
    "newline-after-var": 0,
    //  requires a newline after each call in a method chain or deep member access if the chain is deeper than 2
    "newline-per-chained-call": [2, { "ignoreChainWithDepth": 2 }],
    // disallow use of the Array constructor
    "no-array-constructor": 2,
    // disallow use of the continue statement
    "no-continue": 2,
    // disallow comments inline after code
    "no-inline-comments": 0,
    // disallow if as the only statement in an else block
    "no-lonely-if": 2,
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 2,
    // disallow multiple empty lines and only one newline at the end
    "no-multiple-empty-lines": [1, {"max": 2}],
    // disallow nested ternary expressions
    "no-nested-ternary": 1,
    // disallow use of the Object constructor
    "no-new-object": 2,
    // disallow space between function identifier and application
    "no-spaced-func": 2,
    // disallow the use of ternary operators
    "no-ternary": 0,
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 2,
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": 0,
    // disallow the use of Boolean literals in conditional expressions
    "no-unneeded-ternary": 1,
    // Disallow unnecessary concatenation of strings
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-concat.md
    "no-useless-concat": 2,
    // alerts for whitespace around the dot or before the opening bracket before properties of objects if they are on the
    // same line. It does not alert for whitespace when the object and property are on separate lines
    "no-whitespace-before-property": 1,
    // require padding inside curly braces
    "object-curly-spacing": 0,
    // require that object properties be placed on separate lines for better readability
    "object-property-newline": [2, { "allowMultiplePropertiesPerLine": true }],
    // allow just one var statement per function
    "one-var": [2, {
      "uninitialized": "always",
      "initialized": "never"
    }],
    // enforces a consistent coding style where newlines are required or disallowed after
    // each var declaration or just when there is a variable initialization
    "one-var-declaration-per-line": [2, "initializations"],
    // require assignment operator shorthand where possible or prohibit it entirely
    "operator-assignment": [1, "always"],
    // enforce operators to be placed before or after line breaks
    "operator-linebreak": [2, "before", { "overrides": { "=": "after" } }],
    // enforce padding within blocks
    "padded-blocks": 0,
    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    "quote-props": [2, "as-needed", {
      "keywords": true,
      "unnecessary": true
    }],
    // specify whether double or single quotes should be used
    "quotes": [2, "double"],
    // require or disallow use of semicolons instead of ASI
    "semi": [2, "always"],
    // Enforce spacing before and after semicolons
    // https://github.com/eslint/eslint/blob/master/docs/rules/semi-spacing.md
    "semi-spacing": 2,
    // sort variables within the same declaration block
    "sort-vars": 0,
    // require or disallow space before blocks
    "space-before-blocks": 1,
    // require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    "space-before-function-paren": 0,
    // Disallow or enforce spaces inside of brackets
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-in-brackets.md
    "space-in-brackets": [0, "always", {
      "singleValue": false,
      "objectsInArrays": false,
      "arraysInArrays": false,
      "arraysInObjects": false,
      "objectsInObjects": false,
      "propertyName": false
    }],
    // require or disallow spaces inside parentheses
    "space-in-parens": [2, "never"],
    // require spaces around operators
    "space-infix-ops": 1,
    // Require or disallow spaces before/after unary operators
    "space-unary-ops": 1,
    // require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": [1, "always", { "exceptions": ["-", "+", "/", "*"]}],
    // When declaring multiple imports, a sorted list of import declarations make it easier for developers to
    // read the code and find necessary imports later
    "sort-imports": 0,
    // maintain consistency around the spacing inside of template literals
    "template-curly-spacing": [1, "never"],
    // require regex literals to be wrapped in parentheses
    "wrap-regex": 1,
    // spacing consistency for generators
    "yield-star-spacing": [2, {
      "before": false,
      "after": true
    }]
  }
};
