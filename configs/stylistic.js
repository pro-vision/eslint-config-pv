const stylistic = require("@stylistic/eslint-plugin");

module.exports = [
  {
    name: "eslint-config-pv/stylistic-plugin",
    plugins: {
      "@stylistic": stylistic,
    }
  },
  {
    name: "eslint-config-pv/stylistic-js-rules",
    rules: {
      // enforce line breaks after opening and before closing array brackets
      "@stylistic/array-bracket-newline": ["off"],
      // enforce spacing inside array brackets
      "@stylistic/array-bracket-spacing": ["warn", "never"],
      // enforce line breaks between array elements
      "@stylistic/array-element-newline": ["off"],
      // require parens in arrow function arguments
      "@stylistic/arrow-parens": ["error", "as-needed"],
      // require space before/after arrow function"s arrow
      "@stylistic/arrow-spacing": ["error", { "before": true, "after": true }],
      // Disallow or enforce spaces inside of single line blocks
      "@stylistic/block-spacing": ["error", "always"],
      // enforce one true brace style
      "@stylistic/brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
      // disallow trailing commas in object literals
      "@stylistic/comma-dangle": ["off"],
      // enforce spacing before and after comma
      "@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
      // enforce one true comma style
      "@stylistic/comma-style": ["error", "last"],
      // disallow padding inside computed properties
      "@stylistic/computed-property-spacing": ["error", "never"],
      // enforces consistent newlines before or after dots
      "@stylistic/dot-location": ["off"],
      // enforce newline at the end of file, with no multiple empty lines
      "@stylistic/eol-last": ["off"],
      "@stylistic/function-call-argument-newline": "off",
      "@stylistic/function-call-spacing": "off",
      // enforce consistent line breaks inside function parentheses
      "@stylistic/function-paren-newline": ["off"],
      // enforce the spacing around the * in generator functions
      "@stylistic/generator-star-spacing": ["off"],
      "@stylistic/implicit-arrow-linebreak": "off",
      // require identifiers to match the provided regular expression
      "@stylistic/indent": ["error", 2, { "SwitchCase": 1 }],
      "@stylistic/indent-binary-ops": ["error", 2],
      // enforces spacing between keys and values in object literal properties
      "@stylistic/key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
      "@stylistic/keyword-spacing": "off",
      // disallow mixed "LF" and "CRLF" as linebreaks
      "@stylistic/linebreak-style": ["error", "unix"],
      // enforces empty lines around comments
      "@stylistic/lines-around-comment": ["warn", {
        "beforeBlockComment": true,
        "beforeLineComment": false,
        "allowClassStart": true,
        "allowObjectStart": true,
        "allowArrayStart": true,
      }],
      "@stylistic/lines-between-class-members": "off",
      "@stylistic/multiline-comment-style": "off",
      // enforce or disallow newlines between operands of ternary expressions
      "@stylistic/multiline-ternary": ["error", "always-multiline"],
      // disallow the omission of parentheses when invoking a constructor with no arguments
      "@stylistic/new-parens": ["error"],
      // requires a newline after each call in a method chain or deep member access if the chain is deeper than 2
      "@stylistic/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
      // warns against using the arrow function syntax in places where it could be confused with a comparison operator.
      "@stylistic/no-confusing-arrow": ["error", { "allowParens": true }],
      // disallow unnecessary parentheses
      "@stylistic/no-extra-parens": ["off"],
      // disallow unnecessary semicolons
      "@stylistic/no-extra-semi": ["error"],
      // disallow the use of leading or trailing decimal points in numeric literals
      "@stylistic/no-floating-decimal": ["error"],
      // disallow use of multiple spaces
      "@stylistic/no-multi-spaces": ["error"],
      // disallow multiple empty lines and only one newline at the end
      "@stylistic/no-multiple-empty-lines": ["warn", {"max": 2}],
      // disallow trailing whitespace at the end of lines
      "@stylistic/no-trailing-spaces": ["error"],
      // alerts for whitespace around the dot or before the opening bracket before properties of objects if they are on the same line
      "@stylistic/no-whitespace-before-property": ["warn"],
      // enforce the location of single-line statements
      "@stylistic/nonblock-statement-body-position": ["off"],
      // enforce consistent line breaks inside braces
      "@stylistic/object-curly-newline": ["off"],
      // require padding inside curly braces
      "@stylistic/object-curly-spacing": ["off"],
      // require that object properties be placed on separate lines for better readability
      "@stylistic/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
      // or just when there's a var initialization
      "@stylistic/one-var-declaration-per-line": ["error", "initializations"],
      // enforce operators to be placed before or after line breaks
      "@stylistic/operator-linebreak": ["error", "before", { "overrides": { "=": "after" } }],
      // enforce padding within blocks
      "@stylistic/padded-blocks": ["off"],
      // requires or disallows blank lines between the given 2 kinds of statements. Properly blank lines help developers to understand the code
      "@stylistic/padding-line-between-statements": ["off"],
      // require quotes around object literal property names
      "@stylistic/quote-props": ["error", "as-needed", { "keywords": false, "unnecessary": true }],
      // specify whether double or single quotes should be used
      "@stylistic/quotes": ["error", "double"],
      // Enforce spacing between rest and spread operators and their expressions
      "@stylistic/rest-spread-spacing": ["error", "never"],
      // require or disallow use of semicolons instead of ASI
      "@stylistic/semi": ["error", "always"],
      // Enforce spacing before and after semicolons
      "@stylistic/semi-spacing": ["error"],
      // Enforce location of semicolons
      "@stylistic/semi-style": ["error", "last"],
      // require or disallow space before blocks
      "@stylistic/space-before-blocks": ["off"],
      // require or disallow space before function opening parenthesis
      "@stylistic/space-before-function-paren": ["off"],
      // require or disallow spaces inside parentheses
      "@stylistic/space-in-parens": ["error", "never"],
      // require spaces around operators
      "@stylistic/space-infix-ops": ["error"],
      // Require or disallow spaces before/after unary operators
      "@stylistic/space-unary-ops": ["error"],
      // require or disallow a space immediately following the // or /* in a comment
      "@stylistic/spaced-comment": ["warn", "always", { "exceptions": ["-", "+", "/", "*"]}],
      // Enforce spacing around colons of switch statements
      "@stylistic/switch-colon-spacing": ["error", {"after": true, "before": false}],
      // maintain consistency around the spacing inside of template literals
      "@stylistic/template-curly-spacing": ["error", "never"],
      // Require or disallow spacing between template tags and their literals
      "@stylistic/template-tag-spacing": ["error", "never"],
      // require immediate function invocation to be wrapped in parentheses
      "@stylistic/wrap-iife": ["error"],
      // require regex literals to be wrapped in parentheses
      "@stylistic/wrap-regex": ["error"], // deprecated
      // spacing consistency for generators
      "@stylistic/yield-star-spacing": ["error", { "before": false, "after": true }],
    }
  },
  {
    name: "eslint-config-pv/stylistic-ts-rules",
    rules: {
      "@stylistic/member-delimiter-style": "error",
      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/type-generic-spacing": "error",
      "@stylistic/type-named-tuple-spacing": "error",
    }
  }
];
