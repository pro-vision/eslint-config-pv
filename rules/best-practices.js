module.exports = {
  "rules": {
    // enforces getter/setter pairs in objects
    "accessor-pairs": 0,
    // enforces usage of return statement in callbacks of array’s methods
    "array-callback-return": 2,
    // treat var statements as if they were block scoped
    "block-scoped-var": 2,
    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": 0,
    // require return statements to either always or never specify values
    "consistent-return": 1,
    // specify curly brace conventions for all control statements
    "curly": [1, "all"],
    // require default case in switch statements
    "default-case": 0,
    // encourages use of dot notation whenever possible
    "dot-notation": 1,
    // enforces consistent newlines before or after dots
    "dot-location": 0,
    // require the use of === and !==
    "eqeqeq": 2,
    // make sure for-in loops have an if statement
    "guard-for-in": 2,
    // allows you to configure a blacklist of bad identifier names, that you don’t want to see in your code
    "id-blacklist": 0,
    // disallow the use of alert, confirm, and prompt
    "no-alert": 0,
    // disallow use of arguments.caller or arguments.callee
    "no-caller": 2,
    // Disallow lexical declarations in case/default clauses
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-case-declarations.md
    "no-case-declarations": 2,
    // warns against using the arrow function syntax in places where it could be confused with a comparison operator.
    "no-confusing-arrow": [2, { "allowParens": true }],
    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": 2,
    // validates that all imports from a single module exists in a single import statement
    "no-duplicate-imports": 2,
    // disallow else after a return in an if
    "no-else-return": 1,
    // aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment
    "no-empty-function": 2,
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": 2,
    // disallow use of eval()
    "no-eval": 2,
    // disallow adding to native types
    "no-extend-native": 2,
    // disallow unnecessary function binding
    "no-extra-bind": 2,
    //  eliminates unnecessary labels
    "no-extra-label": 2,
    // disallow fallthrough of case statements
    "no-fallthrough": 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": 2,
    // disallow the type conversions with shorter notations
    "no-implicit-coercion": 2,
    // disallows var and named function declarations at the top-level script scope
    "no-implicit-globals": 0,
    // disallow use of eval()-like methods
    "no-implied-eval": 2,
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": 2,
    // disallow usage of __iterator__ property
    "no-iterator": 2,
    // disallow use of labeled statements
    "no-labels": 2,
    // disallow unnecessary nested blocks
    "no-lone-blocks": 2,
    // disallow creation of functions within loops
    "no-loop-func": 2,
    // Disallow Magic Numbers
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-magic-numbers.md
    "no-magic-numbers": 0,
    // disallow use of multiple spaces
    "no-multi-spaces": 1,
    // disallow use of multiline strings
    "no-multi-str": 2,
    // disallow reassignments of native objects
    "no-native-reassign": 2,
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": 2,
    // disallow use of new operator for Function object
    "no-new-func": 2,
    // The Symbol constructor is not intended to be used with the new operator, but to be called as a function
    "no-new-symbol": 2,
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": 2,
    // disallow use of (old style) octal literals
    "no-octal": 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": 2,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": 0,
    // disallow use of process.env
    "no-process-env": 0,
    // disallow usage of __proto__ property
    "no-proto": 2,
    // disallow declaring the same variable more then once
    "no-redeclare": 2,
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
    // restrict what can be thrown as an exception
    "no-throw-literal": 2,
    // finds references which are inside of loop conditions, then checks the variables of those references are modified in the loop
    "no-unmodified-loop-condition": 2,
    // disallows return, throw, break, and continue statements inside finally blocks
    "no-unsafe-finally": 2,
    // disallow usage of expressions in statement position
    "no-unused-expressions": 2,
    // Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
    "no-unused-labels": 2,
    // disallow unnecessary .call() and .apply()
    "no-useless-call": 2,
    // it’s unnecessary to use computed properties with literals
    "no-useless-computed-key": 2,
    //  flags class constructors that can be safely removed without changing how the class works.
    "no-useless-constructor": 2,
    // Escaping non-special characters in strings and regular expressions doesn’t have any effects on results
    "no-useless-escape": 2,
    // disallow use of void operator
    "no-void": 2,
    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": 0,
    // disallow use of the with statement
    "no-with": 2,
    // require use of the second argument for parseInt()
    "radix": 2,
    // requires to declare all vars on top of their containing scope
    "vars-on-top": 1,
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": 2,
    // require or disallow Yoda conditions
    "yoda": 1
  }
};
