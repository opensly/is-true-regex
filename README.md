# is-true-regex

[![npm version](https://img.shields.io/npm/v/is-true-regex.svg)](https://www.npmjs.com/package/is-true-regex)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A robust utility to check if a value is a RegExp object. Works with both JavaScript and TypeScript, supports cross-realm/iframe scenarios, and handles edge cases securely.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
- [API](#api)
- [Security](#security)
- [Performance](#performance)
- [License](#license)

## Features

- ✅ TypeScript support with type guards
- ✅ Cross-realm/iframe compatibility
- ✅ Secure against spoofing attempts
- ✅ Handles edge cases and error conditions
- ✅ Zero dependencies
- ✅ High performance with early returns

## Installation

```bash
npm install is-true-regex
```

## Usage

### JavaScript
```javascript
const isTrueRegex = require('is-true-regex');

// Basic usage
isTrueRegex(/abc/); // true
isTrueRegex(new RegExp('abc')); // true
isTrueRegex('abc'); // false
isTrueRegex(null); // false
isTrueRegex(undefined); // false

// Edge cases
isTrueRegex({}); // false
isTrueRegex([]); // false
isTrueRegex(function() {}); // false
isTrueRegex(new Date()); // false
```

### TypeScript
```typescript
import isTrueRegex from 'is-true-regex';

// Type guard usage
const value: unknown = /abc/;
if (isTrueRegex(value)) {
    // value is now typed as RegExp
    value.test('abc'); // TypeScript knows this is safe
}

// Basic usage
isTrueRegex(/abc/); // true
isTrueRegex(new RegExp('abc')); // true
isTrueRegex('abc'); // false
```

## API

### `isTrueRegex(value: unknown): value is RegExp`

Checks if the provided value is a RegExp object. The function is designed to be secure and reliable, handling various edge cases:

- Cross-realm/iframe scenarios
- Objects with manipulated `Symbol.toStringTag`
- Proxy objects
- Frozen and sealed objects
- Objects with getters that throw
- Objects with circular references
- Subclassed RegExp objects

#### Parameters

- `value` (`unknown`): The value to check

#### Returns

- `boolean`: `true` if the value is a RegExp object, `false` otherwise

## Security

The implementation is designed to be secure against common spoofing attempts:
- Rejects objects that only mimic RegExp properties
- Validates prototype chain integrity
- Handles Symbol.toStringTag manipulation
- Safely handles error conditions

## Performance

The implementation is optimized for performance:
- Early returns for null/undefined values
- Early returns for primitive types
- Efficient prototype chain traversal
- No unnecessary property checks

## License

MIT 
