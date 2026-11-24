// Extra tests added during the 2026 cleanup (not part of the original assignment).
// main.test.js is the instructor's and is unchanged.
const {
  numberDoubler,
  stringRepeater,
  makeDivisible,
} = require('./main.js');

describe('numberDoubler (stops at 100)', () => {
  it('returns 100 as-is, like the README example', () => {
    expect(numberDoubler(100)).toBe(100);
  });

  it('stops as soon as it reaches exactly 100', () => {
    expect(numberDoubler(50)).toBe(100);
    expect(numberDoubler(25)).toBe(100);
  });

  it('returns numbers above 100 unchanged', () => {
    expect(numberDoubler(150)).toBe(150);
  });
});

// Inputs that used to loop forever (the test run would hang) now throw a clear error.
describe('inputs with no possible answer', () => {
  it('numberDoubler rejects 0 and negatives (doubling never reaches 100)', () => {
    expect(() => numberDoubler(0)).toThrow(RangeError);
    expect(() => numberDoubler(-5)).toThrow(RangeError);
  });

  it('stringRepeater rejects an empty string (it never gets longer)', () => {
    expect(() => stringRepeater('')).toThrow(RangeError);
  });

  it('makeDivisible rejects y = 0 and decimals', () => {
    expect(() => makeDivisible(5, 0)).toThrow(RangeError);
    expect(() => makeDivisible(9.5, 2)).toThrow(RangeError);
    expect(() => makeDivisible(9, 2.5)).toThrow(RangeError);
  });

  it('still handles negative whole numbers', () => {
    expect(makeDivisible(-3, 2)).toBe(-2);
    expect(makeDivisible(9, -2)).toBe(10);
  });
});
