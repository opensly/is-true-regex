/**
 * Checks if a value is a RegExp object.
 * Works cross-realm/iframe and handles edge cases.
 *
 * @param value - The value to check
 * @returns true if the value is a RegExp object, false otherwise
 */
export declare function isTrueRegex(value: unknown): value is RegExp;
export default isTrueRegex;
