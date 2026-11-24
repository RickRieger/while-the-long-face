// Keep doubling until the number is 100 or more.
function numberDoubler(num) {
  // Doubling 0 or a negative number never gets closer to 100, so the loop would never end.
  if (!(num > 0)) {
    throw new RangeError(`numberDoubler needs a number above 0 (got ${num})`);
  }
  while (num < 100) {
    num = num * 2;
  }
  return num;
}

// Keep adding another copy of the string until it's at least 10 characters long.
function stringRepeater(str) {
  // Adding an empty string never makes it longer, so the loop would never end.
  if (str.length === 0) {
    throw new RangeError('stringRepeater needs a string with at least one character');
  }
  let repeated = '';
  while (repeated.length < 10) {
    repeated += str;
  }
  return repeated;
}

// Keep adding 1 to x until y divides it evenly (no remainder).
function makeDivisible(x, y) {
  // Nothing divides evenly by 0, and adding 1 to a decimal never lands on a whole number,
  // so in both cases the loop would never end.
  if (!Number.isInteger(y) || y === 0 || !Number.isInteger(x)) {
    throw new RangeError(`makeDivisible needs whole numbers and a y that isn't 0 (got ${x}, ${y})`);
  }
  while (x % y !== 0) {
    x += 1;
  }
  return x;
}

module.exports = {
  numberDoubler,
  stringRepeater,
  makeDivisible,
};
