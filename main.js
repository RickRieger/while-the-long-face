// Keep doubling until the number is 100 or more.
function numberDoubler(num) {
  while (num < 100) {
    num = num * 2;
  }
  return num;
}

// Keep adding another copy of the string until it's at least 10 characters long.
function stringRepeater(str) {
  let repeated = '';
  while (repeated.length < 10) {
    repeated += str;
  }
  return repeated;
}

// Keep adding 1 to x until y divides it evenly (no remainder).
function makeDivisible(x, y) {
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
