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
export declare function isTrueRegex(value: unknown): value is RegExp;
export default isTrueRegex;
