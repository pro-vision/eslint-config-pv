module.exports = {
  "rules": {
    // enforces getter/setter pairs in objects
    "accessor-pairs": ["off"],

    // enforce line breaks after opening and before closing array brackets
    "array-bracket-newline": ["off"],

    // enforce spacing inside array brackets
    "array-bracket-spacing": ["warn", "never"],

    // enforces usage of return statement in callbacks of array’s methods
    "array-callback-return": ["error"],

    // enforce line breaks between array elements
    "array-element-newline": ["off"],

    // treat var statements as if they were block scoped
    "block-scoped-var": ["error"],

    // Disallow or enforce spaces inside of single line blocks
    "block-spacing": ["error", "always"],

    // enforce one true brace style
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],

    // enforce return after a callback
    "callback-return": ["off"],

    // require camel case names
    "camelcase": ["off"],

    // enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": ["off"],

    // disallow trailing commas in object literals
    "comma-dangle": ["off"],

    // enforce spacing before and after comma
    "comma-spacing": ["error", { "before": false, "after": true }],

    // enforce one true comma style
    "comma-style": ["error", "last"],

    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": ["off"],

    // disallow padding inside computed properties
    "computed-property-spacing": ["error", "never"],

    // require return statements to either always or never specify values
    "consistent-return": ["off"],

    // enforces consistent naming when capturing the current execution context
    "consistent-this": ["error", "that"],

    // specify curly brace conventions for all control statements
    "curly": ["error", "multi-line", "consistent"],

    // require default case in switch statements
    "default-case": ["off"],

    // enforces consistent newlines before or after dots
    "dot-location": ["off"],

    // encourages use of dot notation whenever possible
    "dot-notation": ["error"],

    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": ["off"],

    // require the use of === and !==
    "eqeqeq": ["error"],

    // eanforce “for” loop update clause moving the counter in the right direction
    "for-direction": ["error"],

    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": ["error", "never"],

    // require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": ["off"],

    // require function expressions to have a name
    "func-names": ["off"],

    // enforces use of function declarations or expressions
    "func-style": ["off"],

    // require all requires be top-level
    "global-require": ["error"],

    // make sure for-in loops have an if statement
    "guard-for-in": ["error"],

    // enforces error handling in callbacks (node environment)
    "handle-callback-err": ["off"],

    // allows you to configure a blacklist of bad identifier names, that you don’t want to see in your code
    "id-blacklist": ["off"],

    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    "id-match": ["off"],

    // this option sets a specific tab width for your code
    "id-length": ["off"],

    // require identifiers to match the provided regular expression
    "indent": ["error", 2, { "SwitchCase": 1 }],

    // enforce or disallow variable initializations at definition
    "init-declarations": ["off"],

    // enforces spacing between keys and values in object literal properties
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],

    // enforce position of line comments
    "line-comment-position": ["off"],

    // disallow mixed "LF" and "CRLF" as linebreaks
    "linebreak-style": ["error", "unix"],

    // enforces empty lines around comments
    "lines-around-comment": ["warn", {
      "beforeBlockComment": true,
      "beforeLineComment": false,
      "allowClassStart": true,
      "allowObjectStart": true,
      "allowArrayStart": true,
    }],

    // specify the maximum depth that blocks can be nested
    "max-depth": ["error", 4],

    // specify the maximum length of a line in your program
    "max-len": ["warn", 150, 2],

    // specify the maximum length of a line in your program
    "max-lines": ["off"],

    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": ["warn", 5],

    // limits the number of parameters that can be used in the function declaration.
    "max-params": ["warn", 4],

    // A line of code containing too many statements can be difficult to read
    "max-statements-per-line": ["error", { "max": 1 }],

    // specify the maximum number of statement allowed in a function
    "max-statements": ["off"],

    // enforce or disallow newlines between operands of ternary expressions
    "multiline-ternary": ["error", "always-multiline"],

    // require a capital letter for constructors
    "new-cap": ["off"],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": ["error"],

    // allow/disallow an empty newline after var statement
    "newline-after-var": ["off"],

    // require an empty line before return statements
    "newline-before-return": ["off"],

    //  requires a newline after each call in a method chain or deep member access if the chain is deeper than 2
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],

    // disallow the use of alert, confirm, and prompt
    "no-alert": ["error"],

    // disallow use of the Array constructor
    "no-array-constructor": ["error"],

    // disallow use of bitwise operators
    "no-bitwise": ["off"],

    // disallow use of the Buffer() constructor
    "no-buffer-constructor": ["off"],

    // disallow use of arguments.caller or arguments.callee
    "no-caller": ["error"],

    // Disallow lexical declarations in case/default clauses
    "no-case-declarations": ["error"],

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": ["error"],

    // disallow comparing against -0
    "no-compare-neg-zero": ["error"],

    // disallow assignment in conditional expressions
    "no-cond-assign": ["error"],

    // warns against using the arrow function syntax in places where it could be confused with a comparison operator.
    "no-confusing-arrow": ["error", { "allowParens": true }],

    // disallow use of console
    "no-console": ["error"],

    // disallow use of constant expressions in conditions
    "no-const-assign": ["error"],

    // disallow use of constant expressions in conditions
    "no-constant-condition": ["error"],

    // disallow use of the continue statement
    "no-continue": ["error"],

    // disallow control characters in regular expressions
    "no-control-regex": ["error"],

    // disallow use of debugger
    "no-debugger": ["error"],

    // disallow deletion of variables
    "no-delete-var": ["error"],

    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": ["error"],

    // disallow duplicate arguments in functions
    "no-dupe-args": ["error"],

    // disallow duplicate keys when creating object literals
    "no-dupe-keys": ["error"],

    // disallow a duplicate case label.
    "no-duplicate-case": ["error"],

    // validates that all imports from a single module exists in a single import statement
    "no-duplicate-imports": ["error"],

    // disallow else after a return in an if
    "no-else-return": ["warn"],

    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": ["error"],

    // aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment
    "no-empty-function": ["error"],

    // disallow empty statements
    "no-empty": ["warn"],

    // disallow comparisons to null without a type-checking operator
    "no-eq-null": ["error"],

    // disallow use of eval()
    "no-eval": ["error"],

    // disallow assigning to the exception in a catch block
    "no-ex-assign": ["error"],

    // disallow adding to native types
    "no-extend-native": ["error"],

    // disallow unnecessary function binding
    "no-extra-bind": ["error"],

    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": ["error"],

    //  eliminates unnecessary labels
    "no-extra-label": ["error"],

    // disallow unnecessary parentheses
    "no-extra-parens": ["off"],

    // disallow unnecessary semicolons
    "no-extra-semi": ["error"],

    // disallow fallthrough of case statements
    "no-fallthrough": ["error"],

    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": ["error"],

    // disallow overwriting functions written as function declarations
    "no-func-assign": ["error"],

    // no-global-assign
    "no-global-assign": ["error"],

    // disallow the type conversions with shorter notations
    "no-implicit-coercion": ["error"],

    // disallows var and named function declarations at the top-level script scope
    "no-implicit-globals": ["off"],

    // disallow use of eval()-like methods
    "no-implied-eval": ["error"],

    // disallow comments inline after code
    "no-inline-comments": ["off"],

    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": ["error"],

    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": ["error"],

    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": ["error"],

    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": ["error"],

    // disallow usage of __iterator__ property
    "no-iterator": ["error"],

    // disallow labels that share a name with a variable
    "no-label-var": ["error"],

    // disallow use of labeled statements
    "no-labels": ["error"],

    // disallow unnecessary nested blocks
    "no-lone-blocks": ["error"],

    // disallow if as the only statement in an else block
    "no-lonely-if": ["error"],

    // disallow creation of functions within loops
    "no-loop-func": ["error"],

    // Disallow Magic Numbers
    "no-magic-numbers": ["off"],

    // Disallow mixes of different operators like a && b || c || d
    "no-mixed-operators": ["error"],

    // disallow mixing regular variable and require declarations
    "no-mixed-requires": ["off", false],

    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": ["error"],

    // disallow use of multiple spaces
    "no-multi-spaces": ["error"],

    // disallow use of multiline strings
    "no-multi-str": ["error"],

    // disallow multiple empty lines and only one newline at the end
    "no-multiple-empty-lines": ["warn", {"max": 2}],

    // disallow reassignments of native objects
    "no-native-reassign": ["error"],

    // disallow negated conditions
    "no-negated-condition": ["off"],

    // disallow negation of the left operand of an in expression
    "no-negated-in-lhs": ["error"],

    // disallow nested ternary expressions
    "no-nested-ternary": ["warn"],

    // disallow use of new operator for Function object
    "no-new-func": ["error"],

    // disallow use of the Object constructor
    "no-new-object": ["error"],

    // disallow use of new operator with the require function
    "no-new-require": "off",

    // The Symbol constructor is not intended to be used with the new operator, but to be called as a function
    "no-new-symbol": ["error"],

    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": ["error"],

    // disallow use of new operator when not part of the assignment or comparison
    "no-new": ["off"],

    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": ["error"],

    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-octal-escape": ["error"],

    // disallow use of (old style) octal literals
    "no-octal": ["error"],

    // disallow reassignment of function parameters disallow parameter object manipulation
    "no-param-reassign": ["off"],

    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "off",

    // disallow use of unary operators, ++ and --
    "no-plusplus": ["off"],

    // disallow use of process.env
    "no-process-env": ["off"],

    // disallow process.exit()
    "no-process-exit": "off",

    // disallow usage of __proto__ property
    "no-proto": ["error"],

    // Disallow use of Object.prototypes builtins directly
    "no-prototype-builtins": ["off"],

    // disallow declaring the same variable more then once
    "no-redeclare": ["error"],

    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": ["error"],

    // Disallow specific global variables
    "no-restricted-globals": ["error", "event"],

    // allows you to specify imports that you don’t want to use in your application
    "no-restricted-imports": ["off"],

    // disallow use of assignment in return statement
    "no-return-assign": ["error"],

    // disallow use of `javascript:` urls.
    "no-script-url": ["error"],

    // self assignment are probably an error due to incomplete refactoring
    "no-self-assign": ["error"],

    // disallow comparisons where both sides are exactly the same
    "no-self-compare": ["error"],

    // disallow use of comma operator
    "no-sequences": ["error"],

    // disallow declaration of variables already declared in the outer scope
    "no-shadow": ["error", { "hoist": "functions" }],

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": ["error"],

    // disallow space between function identifier and application
    "no-spaced-func": ["error"],

    // disallow sparse arrays
    "no-sparse-arrays": ["error"],

    // disallow use of synchronous methods (off by default)
    "no-sync": "off",

    // disallow all tabs
    "no-tabs": ["error"],

    // disallow the use of ternary operators
    "no-ternary": ["off"],

    // restrict what can be thrown as an exception
    "no-throw-literal": ["error"],

    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": ["error"],

    // disallow use of undefined when initializing variables
    "no-undef-init": ["off"],

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": ["off"],

    // disallow use of undefined variable
    "no-undefined": ["off"],

    // disallow dangling underscores in identifiers
    "no-underscore-dangle": ["off"],

    // Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": ["error"],

    // finds references which are inside of loop conditions, then checks the variables of those references are modified in the loop
    "no-unmodified-loop-condition": ["error"],

    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": ["warn"],

    // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unreachable": ["error"],

    // disallows return, throw, break, and continue statements inside finally blocks
    "no-unsafe-finally": ["error"],

    // disallow usage of expressions in statement position
    "no-unused-expressions": ["error"],

    // Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
    "no-unused-labels": ["error"],

    // disallow declaration of variables that are not used in the code
    // allow unused arguments to be prefixed with'_'
    // e.g. `.addEventListener(_e => ...)` when argument is passed during invokation but not used in the method's body
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],

    // disallow use of variables before they are defined
    "no-use-before-define": ["warn"],

    // disallow unnecessary .call() and .apply()
    "no-useless-call": ["error"],

    // it’s unnecessary to use computed properties with literals
    "no-useless-computed-key": ["error"],

    // Disallow unnecessary concatenation of strings
    "no-useless-concat": ["error"],

    //  flags class constructors that can be safely removed without changing how the class works.
    "no-useless-constructor": ["error"],

    // Escaping non-special characters in strings and regular expressions doesn’t have any effects on results
    "no-useless-escape": ["error"],

    // Disallow redundant return statements
    "no-useless-return": ["off"],

    // disallow use of void operator
    "no-void": ["error"],

    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": ["error", { "terms": ["todo", "fixme", "hack", "hacky"], "location": "start" }],

    // alerts for whitespace around the dot or before the opening bracket before properties of objects if they are on the same line
    "no-whitespace-before-property": ["warn"],

    // disallow use of the with statement
    "no-with": ["error"],

    // enforce the location of single-line statements
    "nonblock-statement-body-position": ["off"],

    // enforce consistent line breaks inside braces
    "object-curly-newline": ["off"],

    // require padding inside curly braces
    "object-curly-spacing": ["off"],

    // require that object properties be placed on separate lines for better readability
    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],

    // enforces consistent coding style where newlines are required or disallowed after each var declaration or just when there's a var initialization
    "one-var-declaration-per-line": ["error", "initializations"],

    // allow just one var statement per function
    "one-var": ["error", { "uninitialized": "always", "initialized": "never" }],

    // require assignment operator shorthand where possible or prohibit it entirely
    "operator-assignment": ["warn", "always"],

    // enforce operators to be placed before or after line breaks
    "operator-linebreak": ["error", "before", { "overrides": { "=": "after" } }],

    // enforce padding within blocks
    "padded-blocks": ["off"],

    // requires or disallows blank lines between the given 2 kinds of statements. Properly blank lines help developers to understand the code
    "padding-line-between-statements": ["off"],

    // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": ["off"],

    // require quotes around object literal property names
    "quote-props": ["error", "as-needed", { "keywords": false, "unnecessary": true }],

    // specify whether double or single quotes should be used
    "quotes": ["error", "double"],

    // require use of the second argument for parseInt()
    "radix": ["error"],

    // require JSDoc comments
    "require-jsdoc": ["off"],

    // Enforce spacing before and after semicolons
    "semi-spacing": ["error"],

    // Enforce location of semicolons
    "semi-style": ["error", "last"],

    // require or disallow use of semicolons instead of ASI
    "semi": ["error", "always"],

    // a sorted list of import declarations make it easier for developers to read the code and find necessary imports later
    "sort-imports": ["off"],

    // sort variables within the same declaration block
    "sort-vars": ["off"],

    // require or disallow space before blocks
    "space-before-blocks": ["off"],

    // require or disallow space before function opening parenthesis
    "space-before-function-paren": ["off"],

    // require or disallow spaces inside parentheses
    "space-in-parens": ["error", "never"],

    // require spaces around operators
    "space-infix-ops": ["error"],

    // Require or disallow spaces before/after unary operators
    "space-unary-ops": ["error"],

    // require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": ["warn", "always", { "exceptions": ["-", "+", "/", "*"]}],

    // Enforce spacing around colons of switch statements
    "switch-colon-spacing": ["error", {"after": true, "before": false}],

    // Require or disallow the Unicode Byte Order Mark
    "unicode-bom": ["error", "never"],

    // disallow comparisons with the value NaN
    "use-isnan": ["error"],

    // ensure JSDoc comments are valid
    "valid-jsdoc": ["warn", { "requireReturn": false, "requireParamDescription": false, "requireReturnDescription": false }],

    // ensure that the results of typeof are compared against a valid string
    "valid-typeof": ["error"],

    // require immediate function invocation to be wrapped in parentheses
    "wrap-iife": ["error"],

    // require regex literals to be wrapped in parentheses
    "wrap-regex": ["error"],

    // require or disallow Yoda conditions
    "yoda": ["error", "never"]
  }
};
