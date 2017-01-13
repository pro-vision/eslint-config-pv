/* eslint-disable max-len */
module.exports = {
  "rules": {
    // enforces getter/setter pairs in objects
    "accessor-pairs": 0,
    // enforce spacing inside array brackets
    "array-bracket-spacing": [1, "never"],
    // enforces usage of return statement in callbacks of array’s methods
    "array-callback-return": 2,
    // treat var statements as if they were block scoped
    "block-scoped-var": 2,
    // Disallow or enforce spaces inside of single line blocks
    "block-spacing": [2, "always"],
    // enforce one true brace style
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
    // require camel case names
    "camelcase": 0,
    // disallow trailing commas in object literals
    "comma-dangle": 0,
    // enforce spacing before and after comma
    "comma-spacing": [2, { "before": false, "after": true }],
    // enforce one true comma style
    "comma-style": [1, "last"],
    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": 0,
    // disallow padding inside computed properties
    "computed-property-spacing": [2, "never"],
    // require return statements to either always or never specify values
    "consistent-return": 1,
    // enforces consistent naming when capturing the current execution context
    "consistent-this": [1, "that"],
    // specify curly brace conventions for all control statements
    "curly": [1, "all"],
    // require default case in switch statements
    "default-case": 0,
    // enforces consistent newlines before or after dots
    "dot-location": 0,
    // encourages use of dot notation whenever possible
    "dot-notation": 1,
    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": 0,
    // require the use of === and !==
    "eqeqeq": 2,
    // require function expressions to have a name
    "func-names": 0,
    // enforces use of function declarations or expressions
    "func-style": [1, "expression"],
    // make sure for-in loops have an if statement
    "guard-for-in": 2,
    // allows you to configure a blacklist of bad identifier names, that you don’t want to see in your code
    "id-blacklist": 0,
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    "id-length": 0,
    // require identifiers to match the provided regular expression
    "id-match": 0,
    // this option sets a specific tab width for your code
    "indent": [2, 2, { "VariableDeclarator": 2, "SwitchCase": 1 }],
    // enforce or disallow variable initializations at definition
    "init-declarations": 0,
    // specify whether double or single quotes should be used in JSX attributes
    "jsx-quotes": [2, "prefer-double"],
    // enforces spacing between keys and values in object literal properties
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],
    // enforces consistent spacing around keywords and keyword-like tokens
    "keyword-spacing": [1, { "before": true, "after": true }],
    // disallow mixed "LF" and "CRLF" as linebreaks
    "linebreak-style": 0,
    // enforces empty lines around comments
    "lines-around-comment": [1, { "beforeBlockComment": true, "beforeLineComment": false }],
    // specify the maximum depth that blocks can be nested
    "max-depth": [2, 4],
    // specify the maximum length of a line in your program
    "max-len": [1, 150, 2],
    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": [1, 5],
    // limits the number of parameters that can be used in the function declaration.
    "max-params": [1, 4],
    // specify the maximum number of statement allowed in a function
    "max-statements": [0, 10],
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
    // disallow the use of alert, confirm, and prompt
    "no-alert": 0,
    // disallow use of the Array constructor
    "no-array-constructor": 2,
    // disallow use of bitwise operators
    "no-bitwise": 0,
    // disallow use of arguments.caller or arguments.callee
    "no-caller": 2,
    // Disallow lexical declarations in case/default clauses
    "no-case-declarations": 2,
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": 2,
    // disallow assignment in conditional expressions
    "no-cond-assign": 2,
    // warns against using the arrow function syntax in places where it could be confused with a comparison operator.
    "no-confusing-arrow": [2, { "allowParens": true }],
    // disallow use of console
    "no-console": 2,
    // disallow use of constant expressions in conditions
    "no-constant-condition": 2,
    // disallow use of the continue statement
    "no-continue": 2,
    // disallow control characters in regular expressions
    "no-control-regex": 2,
    // disallow use of debugger
    "no-debugger": 2,
    // disallow deletion of variables
    "no-delete-var": 2,
    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": 2,
    // disallow duplicate arguments in functions
    "no-dupe-args": 2,
    // disallow duplicate keys when creating object literals
    "no-dupe-keys": 2,
    // disallow a duplicate case label.
    "no-duplicate-case": 2,
    // validates that all imports from a single module exists in a single import statement
    "no-duplicate-imports": 2,
    // disallow else after a return in an if
    "no-else-return": 1,
    // disallow empty statements
    "no-empty": 1,
    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": 2,
    // aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment
    "no-empty-function": 2,
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": 2,
    // disallow use of eval()
    "no-eval": 2,
    // disallow assigning to the exception in a catch block
    "no-ex-assign": 2,
    // disallow adding to native types
    "no-extend-native": 2,
    // disallow unnecessary function binding
    "no-extra-bind": 2,
    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": 2,
    //  eliminates unnecessary labels
    "no-extra-label": 2,
    // disallow unnecessary parentheses
    "no-extra-parens": 0,
    // disallow unnecessary semicolons
    "no-extra-semi": 2,
    // disallow fallthrough of case statements
    "no-fallthrough": 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": 2,
    // disallow overwriting functions written as function declarations
    "no-func-assign": 2,
    // disallow the type conversions with shorter notations
    "no-implicit-coercion": 2,
    // disallows var and named function declarations at the top-level script scope
    "no-implicit-globals": 0,
    // disallow use of eval()-like methods
    "no-implied-eval": 2,
    // disallow comments inline after code
    "no-inline-comments": 0,
    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": 2,
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": 2,
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": 2,
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": 2,
    // disallow usage of __iterator__ property
    "no-iterator": 2,
    // disallow labels that share a name with a variable
    "no-label-var": 2,
    // disallow use of labeled statements
    "no-labels": 2,
    // disallow unnecessary nested blocks
    "no-lone-blocks": 2,
    // disallow if as the only statement in an else block
    "no-lonely-if": 2,
    // disallow creation of functions within loops
    "no-loop-func": 2,
    // Disallow Magic Numbers
    "no-magic-numbers": 0,
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 2,
    // disallow use of multiple spaces
    "no-multi-spaces": 1,
    // disallow use of multiline strings
    "no-multi-str": 2,
    // disallow multiple empty lines and only one newline at the end
    "no-multiple-empty-lines": [1, {"max": 2}],
    // disallow reassignments of native objects
    "no-native-reassign": 2,
    // disallow negation of the left operand of an in expression
    "no-negated-in-lhs": 2,
    // disallow nested ternary expressions
    "no-nested-ternary": 1,
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": 2,
    // disallow use of new operator for Function object
    "no-new-func": 2,
    // disallow use of the Object constructor
    "no-new-object": 2,
    // The Symbol constructor is not intended to be used with the new operator, but to be called as a function
    "no-new-symbol": 2,
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": 2,
    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": 2,
    // disallow use of (old style) octal literals
    "no-octal": 2,
    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-octal-escape": 2,
    // disallow reassignment of function parameters disallow parameter object manipulation
    "no-param-reassign": 0,
    // disallow use of unary operators, ++ and --
    "no-plusplus": 0,
    // disallow use of process.env
    "no-process-env": 0,
    // disallow usage of __proto__ property
    "no-proto": 2,
    // disallow declaring the same variable more then once
    "no-redeclare": 2,
    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": 2,
    // allows you to specify imports that you don’t want to use in your application
    "no-restricted-imports": 0,
    // disallow use of assignment in return statement
    "no-return-assign": 2,
    // disallow use of `javascript:` urls.
    "no-script-url": 2,
    // self assignment are probably an error due to incomplete refactoring
    "no-self-assign": 2,
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": 2,
    // disallow use of comma operator
    "no-sequences": 2,
    // disallow declaration of variables already declared in the outer scope
    "no-shadow": 1,
    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": 2,
    // disallow space between function identifier and application
    "no-spaced-func": 2,
    // disallow sparse arrays
    "no-sparse-arrays": 2,
    // disallow the use of ternary operators
    "no-ternary": 0,
    // restrict what can be thrown as an exception
    "no-throw-literal": 2,
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 2,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": 1,
    // disallow use of undefined when initializing variables
    "no-undef-init": 1,
    // disallow use of undefined variable
    "no-undefined": 0,
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": 0,
    // Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": 2,
    // finds references which are inside of loop conditions, then checks the variables of those references are modified in the loop
    "no-unmodified-loop-condition": 2,
    // disallow the use of Boolean literals in conditional expressions
    "no-unneeded-ternary": 1,
    // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unreachable": 2,
    // disallows return, throw, break, and continue statements inside finally blocks
    "no-unsafe-finally": 2,
    // disallow usage of expressions in statement position
    "no-unused-expressions": 2,
    // Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
    "no-unused-labels": 2,
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": 2,
    // disallow use of variables before they are defined
    "no-use-before-define": 1,
    // disallow unnecessary .call() and .apply()
    "no-useless-call": 2,
    // it’s unnecessary to use computed properties with literals
    "no-useless-computed-key": 2,
    // Disallow unnecessary concatenation of strings
    "no-useless-concat": 2,
    //  flags class constructors that can be safely removed without changing how the class works.
    "no-useless-constructor": 2,
    // Escaping non-special characters in strings and regular expressions doesn’t have any effects on results
    "no-useless-escape": 2,
    // disallow use of void operator
    "no-void": 2,
    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": 0,
    // alerts for whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. It does not alert for whitespace when the object and property are on separate lines
    "no-whitespace-before-property": 1,
    // disallow use of the with statement
    "no-with": 2,
    // require padding inside curly braces
    "object-curly-spacing": 0,
    // require that object properties be placed on separate lines for better readability
    "object-property-newline": [2, { "allowMultiplePropertiesPerLine": true }],
    // allow just one var statement per function
    "one-var": [2, { "uninitialized": "always", "initialized": "never" }],
    // enforces a consistent coding style where newlines are required or disallowed after each var declaration or just when there is a variable initialization
    "one-var-declaration-per-line": [2, "initializations"],
    // require assignment operator shorthand where possible or prohibit it entirely
    "operator-assignment": [1, "always"],
    // enforce operators to be placed before or after line breaks
    "operator-linebreak": [2, "before", { "overrides": { "=": "after" } }],
    // enforce padding within blocks
    "padded-blocks": 0,
    // require quotes around object literal property names
    "quote-props": [2, "as-needed", { "keywords": true, "unnecessary": true }],
    // specify whether double or single quotes should be used
    "quotes": [2, "double"],
    // require use of the second argument for parseInt()
    "radix": 2,
    // require or disallow use of semicolons instead of ASI
    "semi": [2, "always"],
    // Enforce spacing before and after semicolons
    "semi-spacing": 2,
    // When declaring multiple imports, a sorted list of import declarations make it easier for developers to read the code and find necessary imports later
    "sort-imports": 0,
    // sort variables within the same declaration block
    "sort-vars": 0,
    // require or disallow space before blocks
    "space-before-blocks": 1,
    // require or disallow space before function opening parenthesis
    "space-before-function-paren": 0,
    // Disallow or enforce spaces inside of brackets
    "space-in-brackets": [0, "always", { "singleValue": false, "objectsInArrays": false, "arraysInArrays": false, "arraysInObjects": false, "objectsInObjects": false, "propertyName": false }],
    // require or disallow spaces inside parentheses
    "space-in-parens": [2, "never"],
    // require spaces around operators
    "space-infix-ops": 1,
    // Require or disallow spaces before/after unary operators
    "space-unary-ops": 1,
    "spaced-comment": [1, "always", { "exceptions": ["-", "+", "/", "*"]}],    // require or disallow a space immediately following the // or /* in a comment
    // babel inserts `"use strict";` for us
    "strict": [2, "never"],
    // maintain consistency around the spacing inside of template literals
    "template-curly-spacing": [1, "never"],
    // disallow comparisons with the value NaN
    "use-isnan": 2,
    // ensure JSDoc comments are valid
    "valid-jsdoc": [1, { "requireReturn": false, "requireParamDescription": false, "requireReturnDescription": false }],
    // ensure that the results of typeof are compared against a valid string
    "valid-typeof": 2,
    // requires to declare all vars on top of their containing scope
    "vars-on-top": 1,
    // require immediate function invocation to be wrapped in parentheses
    "wrap-iife": 2,
    // require regex literals to be wrapped in parentheses
    "wrap-regex": 1,
    // spacing consistency for generators
    "yield-star-spacing": [2, { "before": false, "after": true }],
    // require or disallow Yoda conditions
    "yoda": 1
  }
};
