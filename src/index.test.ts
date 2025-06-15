import isTrueRegex from './index';

describe('isTrueRegex', () => {
  it('should return true for RegExp objects', () => {
    expect(isTrueRegex(/abc/)).toBe(true);
    expect(isTrueRegex(new RegExp('abc'))).toBe(true);
  });

  it('should return false for non-RegExp values', () => {
    expect(isTrueRegex('abc')).toBe(false);
    expect(isTrueRegex(null)).toBe(false);
    expect(isTrueRegex(undefined)).toBe(false);
    expect(isTrueRegex({})).toBe(false);
  });
}); 