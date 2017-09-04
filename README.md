# eslint-config-pv

This package provides pro!vision's ESLint configuration as an extensible shared config.

_Inspired by [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)_


## Installation
```bash
npm install --save-dev eslint-config-pv
```


## Usage

We export two ESLint configurations for usage in projects.

### eslint-config-pv

Our default export contains all of our ESLint rules, including ECMAScript 6 / ES2015.
Add `"extends": "pv"` to your .eslintrc:

```
{
  "extends": "pv",
  "rules": {
    // additional rules here
  },
  "env": {
    // ... add more environments
  }
}
```

### eslint-config-pv/legacy

Use the legacy sub package if you only want to lint ES5 and below.

```
{
  "extends": "pv/legacy",
  "rules": {
    // additional rules here
  }
}
```

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.


## WebStorm Integration
Ensure you are using `node >= 4.5` and you have installed `eslint` and `eslint-plugin-import` globally:
```bash
# node version should be at least 4.5
node -v

# install necessary modules globally
npm install -g eslint eslint-plugin-import
```

Now you can follow the instructions [here](https://www.jetbrains.com/help/webstorm/2016.2/using-javascript-code-quality-tools.html#ESLint)

Keep in mind that WebStorm pass all JavaScript files (starting from project root) to `eslint`. To prevent directories
from being linted, mark them as _Excluded_. Go to project structure and right click on the directory to be excluded ->
`Mark Directory as` -> `Excluded`. Special directories, such as `node_modules` are marked automatically as _library root_
and will be excluded by default.

Alternatively, you can define `.eslintignore` [as described here](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories).
