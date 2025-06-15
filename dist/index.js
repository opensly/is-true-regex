'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Checks if a value is a RegExp object.
 * Works cross-realm/iframe and handles edge cases.
 *
 * @param value - The value to check
 * @returns true if the value is a RegExp object, false otherwise
 */
function isTrueRegex(value) {
    // Early return for null/undefined
    if (value == null) {
        return false;
    }
    // Early return for primitives
    if (typeof value !== 'object') {
        return false;
    }
    try {
        // Primary check: instanceof
        if (value instanceof RegExp) {
            return true;
        }
        // Cross-realm check: Object.prototype.toString
        if (Object.prototype.toString.call(value) === '[object RegExp]') {
            // Extra safeguard: ensure prototype chain includes RegExp.prototype
            let proto = Object.getPrototypeOf(value);
            while (proto) {
                if (proto === RegExp.prototype) {
                    return true;
                }
                proto = Object.getPrototypeOf(proto);
            }
            return false;
        }
        // No fallback property check (prevents spoofing)
        return false;
    }
    catch (error) {
        // If any operation throws, it's definitely not a RegExp
        return false;
    }
}

exports.default = isTrueRegex;
exports.isTrueRegex = isTrueRegex;
//# sourceMappingURL=index.js.map
