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
