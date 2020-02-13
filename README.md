# eslint-config-pv

This package provides pro!vision's ESLint configuration as an extensible shared config.

_Inspired by [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)_

## Versions

This is version >= 2.0.0 of eslint-config-pv, which is compatible with eslint >= 4.0.0. I you are using eslint 3, use eslint-config-pv 1.0.10

## Installation
```bash
npm install --save-dev eslint-config-pv eslint-plugin-import
# for the eslint 3 compatible version
npm install --save-dev eslint-config-pv@1.0.10 eslint-plugin-import
```


## Usage

We export four ESLint configurations for usage in projects.


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

### eslint-config-pv/prettier

You need to install additional plugins:


```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
```

This allows you to use prettier with eslint integration

```
{
  "extends": "pv/prettier"
}
```

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.


### eslint-config-pv/typescript

You need to install additional @typescript-eslint plugins (>=v2.19):


```bash
npm install --save-dev @typescript-eslint/parser  @typescript-eslint/eslint-plugin
```

This allows you to eslint your tylescript files

```
{
  "extends": [
    "pv/typescript",
    // "pv/prettier" // in case you are using prettier as well
  ]
}
```
`pv/prettier` assumes your `tsconfig.json` file is in the same directory as where you call eslint. For example your projects root directory. But you can also specify this with:

```
{
  "extends": [
    "pv/typescript",
  ]
  parserOptions: {
    project: "./my-tsconfig.json",
    tsconfigRootDir: "my-configs/",
  },
}
```


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
