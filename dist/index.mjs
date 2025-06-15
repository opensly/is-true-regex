/**
 * Checks if the provided value is a regular expression.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a regular expression, otherwise `false`.
 *
 * @example
 * ```ts
 * isTrueRegex(/abc/) // true
 * isTrueRegex(new RegExp('abc')) // true
 * isTrueRegex('abc') // false
 * isTrueRegex(null) // false
 * isTrueRegex(undefined) // false
 * ```
 */
function isTrueRegex(value) {
    if (value === null || value === undefined) {
        return false;
    }
    try {
        return (value instanceof RegExp ||
            (typeof value === 'object' &&
                Object.prototype.toString.call(value) === '[object RegExp]'));
    }
    catch (_a) {
        return false;
    }
}

export { isTrueRegex as default, isTrueRegex };
//# sourceMappingURL=index.mjs.map
