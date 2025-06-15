# is-true-regex

A utility to check if a value is a RegExp object. Works with both JavaScript and TypeScript.

## Installation

```bash
npm install is-true-regex
```

## Usage

### JavaScript
```javascript
const isTrueRegex = require('is-true-regex');

isTrueRegex(/abc/); // true
isTrueRegex(new RegExp('abc')); // true
isTrueRegex('abc'); // false
isTrueRegex(null); // false
isTrueRegex(undefined); // false
```

### TypeScript
```typescript
import isTrueRegex from 'is-true-regex';

isTrueRegex(/abc/); // true
isTrueRegex(new RegExp('abc')); // true
isTrueRegex('abc'); // false
isTrueRegex(null); // false
isTrueRegex(undefined); // false
```

## API

### `isTrueRegex(value: unknown): value is RegExp` (TypeScript)
### `isTrueRegex(value: unknown): boolean` (JavaScript)

Checks if the provided value is a RegExp object.

#### Parameters

- `value` - The value to check

#### Returns

`true` if the value is a RegExp object, otherwise `false`

## License

MIT


