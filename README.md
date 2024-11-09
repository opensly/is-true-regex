# isRegex

Determines if a given value is a regular expression.

## Usage Guide

Some usage examples for the `isRegex` function:

#### Basic Type Checking

```
import isRegex from './isRegex';

const pattern = /abc/;
console.log(isRegex(pattern)); // true

const nonPattern = 'abc';
console.log(isRegex(nonPattern)); // false
```

#### Validation before using regex methods
```
const maybePattern = '/[a-z]/';

if (isRegex(maybePattern)) {
    console.log(maybePattern.test('hello')); // Executes safely
} else {
    console.log('Not a valid regex pattern');
}
```

#### Filtering an Array

```
const items = [/test/, 'hello', /abc/, 123];
const regexItems = items.filter(isRegex);
console.log(regexItems); // [/test/, /abc/]
```

## Support
Your support inspires & encourage us more. If you are interested to make a donation to us, please click the below PayPal button.

[![PayPal.me](https://img.shields.io/badge/paypal-donate-119fde.svg)](https://www.paypal.me/LakshmikanthV)

## License
This project is licensed under the MIT License.


