import isTrueRegex from './index';

describe('Valid RegExp Objects', () => {
  test('should return true for regex literals', () => {
    expect(isTrueRegex(/abc/)).toBe(true);
    expect(isTrueRegex(/test/g)).toBe(true);
    expect(isTrueRegex(/pattern/i)).toBe(true);
    expect(isTrueRegex(/multiline/m)).toBe(true);
    expect(isTrueRegex(/sticky/y)).toBe(true);
    expect(isTrueRegex(/unicode/u)).toBe(true);
    expect(isTrueRegex(/dotall/s)).toBe(true);
    expect(isTrueRegex(/combined/gim)).toBe(true);
  });

  test('should return true for RegExp constructor calls', () => {
    expect(isTrueRegex(new RegExp('abc'))).toBe(true);
    expect(isTrueRegex(new RegExp('test', 'g'))).toBe(true);
    expect(isTrueRegex(new RegExp('pattern', 'i'))).toBe(true);
    expect(isTrueRegex(new RegExp('multiline', 'm'))).toBe(true);
    expect(isTrueRegex(new RegExp('combined', 'gim'))).toBe(true);
  });

  test('should return true for empty regex patterns', () => {
    expect(isTrueRegex(/ /)).toBe(true);
    expect(isTrueRegex(new RegExp(''))).toBe(true);
    expect(isTrueRegex(new RegExp('', 'g'))).toBe(true);
  });

  test('should return true for complex regex patterns', () => {
    expect(isTrueRegex(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)).toBe(true);
    expect(isTrueRegex(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)).toBe(true);
    expect(isTrueRegex(/(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/)).toBe(true);
    expect(isTrueRegex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/)).toBe(true);
  });

  test('should return true for escaped special characters', () => {
    expect(isTrueRegex(/\./)).toBe(true);
    expect(isTrueRegex(/\*/)).toBe(true);
    expect(isTrueRegex(/\+/)).toBe(true);
    expect(isTrueRegex(/\?/)).toBe(true);
    expect(isTrueRegex(/\^/)).toBe(true);
    expect(isTrueRegex(/\$/)).toBe(true);
    expect(isTrueRegex(/\|/)).toBe(true);
    expect(isTrueRegex(/\(/)).toBe(true);
    expect(isTrueRegex(/\)/)).toBe(true);
    expect(isTrueRegex(/\[/)).toBe(true);
    expect(isTrueRegex(/\]/)).toBe(true);
    expect(isTrueRegex(/\{/)).toBe(true);
    expect(isTrueRegex(/\}/)).toBe(true);
    expect(isTrueRegex(/\\/)).toBe(true);
  });
});

describe('Invalid Non-RegExp Values', () => {
  test('should return false for primitive values', () => {
    expect(isTrueRegex(undefined)).toBe(false);
    expect(isTrueRegex(null)).toBe(false);
    expect(isTrueRegex(true)).toBe(false);
    expect(isTrueRegex(false)).toBe(false);
    expect(isTrueRegex(0)).toBe(false);
    expect(isTrueRegex(1)).toBe(false);
    expect(isTrueRegex(-1)).toBe(false);
    expect(isTrueRegex(3.14)).toBe(false);
    expect(isTrueRegex(Infinity)).toBe(false);
    expect(isTrueRegex(-Infinity)).toBe(false);
    expect(isTrueRegex(NaN)).toBe(false);
  });

  test('should return false for string values', () => {
    expect(isTrueRegex('')).toBe(false);
    expect(isTrueRegex('abc')).toBe(false);
    expect(isTrueRegex('/abc/')).toBe(false);
    expect(isTrueRegex('/abc/g')).toBe(false);
    expect(isTrueRegex('RegExp')).toBe(false);
    expect(isTrueRegex('new RegExp()')).toBe(false);
    expect(isTrueRegex('[object RegExp]')).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isTrueRegex(function() {})).toBe(false);
    expect(isTrueRegex(() => {})).toBe(false);
    expect(isTrueRegex(async function() {})).toBe(false);
    expect(isTrueRegex(function* generator() {})).toBe(false);
    expect(isTrueRegex(RegExp)).toBe(false);
    expect(isTrueRegex(Object)).toBe(false);
    expect(isTrueRegex(Array)).toBe(false);
  });

  test('should return false for built-in objects', () => {
    expect(isTrueRegex([])).toBe(false);
    expect(isTrueRegex([1, 2, 3])).toBe(false);
    expect(isTrueRegex({})).toBe(false);
    expect(isTrueRegex({ a: 1 })).toBe(false);
    expect(isTrueRegex(new Date())).toBe(false);
    expect(isTrueRegex(new Error())).toBe(false);
    expect(isTrueRegex(new Map())).toBe(false);
    expect(isTrueRegex(new Set())).toBe(false);
    expect(isTrueRegex(new WeakMap())).toBe(false);
    expect(isTrueRegex(new WeakSet())).toBe(false);
    expect(isTrueRegex(new Promise(() => {}))).toBe(false);
  });

  test('should return false for typed arrays and buffers', () => {
    expect(isTrueRegex(new ArrayBuffer(8))).toBe(false);
    expect(isTrueRegex(new Int8Array(8))).toBe(false);
    expect(isTrueRegex(new Uint8Array(8))).toBe(false);
    expect(isTrueRegex(new Int16Array(8))).toBe(false);
    expect(isTrueRegex(new Uint16Array(8))).toBe(false);
    expect(isTrueRegex(new Int32Array(8))).toBe(false);
    expect(isTrueRegex(new Uint32Array(8))).toBe(false);
    expect(isTrueRegex(new Float32Array(8))).toBe(false);
    expect(isTrueRegex(new Float64Array(8))).toBe(false);
  });
});

describe('Edge Cases & Attack Vectors', () => {
  test('should handle objects with RegExp-like properties', () => {
    // This test validates that fake RegExp objects are rejected
    // Your current implementation might be too permissive - this is actually catching a bug!
    const fakeRegex = {
      source: 'abc',
      global: false,
      ignoreCase: false,
      multiline: false,
      sticky: false,
      unicode: false,
      dotAll: false,
      flags: '',
      lastIndex: 0,
      test: () => true,
      exec: () => null,
      toString: () => '/abc/',
      compile: () => {},
    };
    
    // If this fails, your implementation needs the additional RegExp signature check
    expect(isTrueRegex(fakeRegex)).toBe(false);
    
    // Verify it's NOT a real RegExp
    expect(fakeRegex instanceof RegExp).toBe(false);
    expect(Object.prototype.toString.call(fakeRegex)).toBe('[object Object]');
  });

  test('should handle Symbol.toStringTag manipulation', () => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      const maliciousObject = {
        [Symbol.toStringTag]: 'RegExp',
      };
      
      // This test reveals your implementation might be detecting this incorrectly
      // Let's verify what Object.prototype.toString actually returns
      console.log('toString result:', Object.prototype.toString.call(maliciousObject));
      
      // If this fails, it means Symbol.toStringTag IS affecting Object.prototype.toString
      // which means your implementation needs the additional safeguards
      expect(isTrueRegex(maliciousObject)).toBe(false);

      const maliciousArray: unknown[] = [];
      (maliciousArray as any)[Symbol.toStringTag] = 'RegExp';
      expect(isTrueRegex(maliciousArray)).toBe(false);

      const maliciousFunction = function() {};
      (maliciousFunction as any)[Symbol.toStringTag] = 'RegExp';
      expect(isTrueRegex(maliciousFunction)).toBe(false);
    } else {
      // Skip test if Symbol.toStringTag is not supported
      expect(true).toBe(true);
    }
  });

  test('should handle proxy objects', () => {
    if (typeof Proxy !== 'undefined') {
      const regexProxy = new Proxy(/test/, {
        get(target, prop) {
          return target[prop as keyof RegExp];
        }
      });
      expect(isTrueRegex(regexProxy)).toBe(true);

      const fakeRegexProxy = new Proxy({}, {
        get(target, prop) {
          if (prop === 'source') return 'fake';
          if (prop === 'global') return false;
          if (prop === 'ignoreCase') return false;
          if (prop === 'multiline') return false;
          if (prop === 'test') return () => true;
          return undefined;
        }
      });
      expect(isTrueRegex(fakeRegexProxy)).toBe(false);
    }
  });

  test('should handle frozen and sealed objects', () => {
    const frozenRegex = Object.freeze(/test/);
    expect(isTrueRegex(frozenRegex)).toBe(true);

    const sealedRegex = Object.seal(/test/);
    expect(isTrueRegex(sealedRegex)).toBe(true);

    const frozenFake = Object.freeze({
      source: 'fake',
      global: false,
      test: () => true
    });
    expect(isTrueRegex(frozenFake)).toBe(false);
  });

  test('should handle objects with getters that throw', () => {
    const problematicObject = {};
    Object.defineProperty(problematicObject, 'source', {
      get() { throw new Error('Access denied'); }
    });
    expect(isTrueRegex(problematicObject)).toBe(false);
  });

  test('should handle objects with RegExp toString but wrong prototype', () => {
    const fakeRegex = Object.create(null);
    Object.defineProperty(fakeRegex, Symbol.toStringTag, { value: 'RegExp' });
    expect(isTrueRegex(fakeRegex)).toBe(false);
  });

  test('should handle objects that throw on prototype access', () => {
    const problematicObject = Object.create(null);
    Object.defineProperty(problematicObject, Symbol.toStringTag, { value: 'RegExp' });
    Object.defineProperty(problematicObject, 'constructor', {
      get() { throw new Error('Access denied'); }
    });
    expect(isTrueRegex(problematicObject)).toBe(false);
  });

  test('should handle objects with RegExp toString but no RegExp in prototype chain', () => {
    const obj = Object.create(Object.prototype);
    Object.defineProperty(obj, Symbol.toStringTag, { value: 'RegExp' });
    expect(isTrueRegex(obj)).toBe(false);
  });

  test('should handle objects that throw on toString', () => {
    const obj = {};
    Object.defineProperty(obj, Symbol.toStringTag, {
      get() { throw new Error('Access denied'); }
    });
    expect(isTrueRegex(obj)).toBe(false);
  });

  test('should handle circular references', () => {
    const circular: any = {};
    circular.self = circular;
    expect(isTrueRegex(circular)).toBe(false);

    const circularArray: any = [];
    circularArray.push(circularArray);
    expect(isTrueRegex(circularArray)).toBe(false);
  });
});

describe('Cross-Realm Scenarios', () => {

  test('should handle subclassed RegExp', () => {
    class CustomRegExp extends RegExp {
      constructor(pattern: string, flags?: string) {
        super(pattern, flags);
      }
      
      customMethod() {
        return 'custom';
      }
    }

    const customRegex = new CustomRegExp('test', 'g');
    expect(isTrueRegex(customRegex)).toBe(true);
    expect(customRegex instanceof RegExp).toBe(true);
    expect(customRegex instanceof CustomRegExp).toBe(true);
  });
});

describe('Performance Tests', () => {
  test('should handle large volume of checks efficiently', () => {
    const testCases = [
      /test/,
      new RegExp('test'),
      'string',
      123,
      {},
      [],
      null,
      undefined,
      true,
      false
    ];

    const iterations = 10000;
    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
      testCases.forEach(testCase => {
        isTrueRegex(testCase);
      });
    }
    
    const end = performance.now();
    const duration = end - start;
    
    // Should complete 100k calls in reasonable time (< 100ms on modern hardware)
    expect(duration).toBeLessThan(100);
  });

  test('should be faster for early returns', () => {
    const iterations = 100000;
    
    // Test null/undefined (early return)
    const start1 = performance.now();
    for (let i = 0; i < iterations; i++) {
      isTrueRegex(null);
      isTrueRegex(undefined);
    }
    const end1 = performance.now();
    const nullDuration = end1 - start1;
    
    // Test RegExp (full check)
    const start2 = performance.now();
    for (let i = 0; i < iterations; i++) {
      isTrueRegex(/test/);
    }
    const end2 = performance.now();
    const regexDuration = end2 - start2;
    
    // Early returns should be significantly faster
    expect(nullDuration).toBeLessThan(regexDuration * 0.8);
  });
});

describe('Type Guard Validation', () => {
  test('should work as TypeScript type guard', () => {
    const mixedArray: unknown[] = [
      /test/,
      'string',
      123,
      new RegExp('pattern'),
      null,
      {}
    ];

    const regexes = mixedArray.filter(isTrueRegex);
    
    // TypeScript should infer regexes as RegExp[]
    expect(regexes).toHaveLength(2);
    expect(regexes[0]).toBeInstanceOf(RegExp);
    expect(regexes[1]).toBeInstanceOf(RegExp);
    
    // These should be accessible without type assertion
    regexes.forEach(regex => {
      expect(typeof regex.source).toBe('string');
      expect(typeof regex.global).toBe('boolean');
      expect(typeof regex.test).toBe('function');
    });
  });
});

describe('Regression Tests', () => {
  test('should handle specific reported edge cases', () => {
    // Test cases that might break naive implementations
    const edgeCases = [
      Object.create(null), // Object without prototype
      Object.create(RegExp.prototype), // Object with RegExp prototype
      /(?:)/, // Empty non-capturing group
      /(?=)/, // Empty positive lookahead
      /(?!)/, // Empty negative lookahead
      /(?<=)/, // Empty positive lookbehind
      /(?<!)/, // Empty negative lookbehind
    ];

    expect(isTrueRegex(edgeCases[0])).toBe(false);
    expect(isTrueRegex(edgeCases[1])).toBe(true);
    expect(isTrueRegex(edgeCases[2])).toBe(true);
    expect(isTrueRegex(edgeCases[3])).toBe(true);
    expect(isTrueRegex(edgeCases[4])).toBe(true);
    expect(isTrueRegex(edgeCases[5])).toBe(true);
    expect(isTrueRegex(edgeCases[6])).toBe(true);
  });

  test('should maintain consistency with native methods', () => {
    const testValues = [
      /test/,
      new RegExp('test'),
      'not regex',
      123,
      null,
      undefined,
      {},
      []
    ];

    testValues.forEach(value => {
      const ourResult = isTrueRegex(value);
      const nativeResult = value instanceof RegExp || 
        Object.prototype.toString.call(value) === '[object RegExp]';
      
      expect(ourResult).toBe(nativeResult);
    });
  });
});
