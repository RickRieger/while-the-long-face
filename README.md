# While The Long Face?

[![Tests](https://github.com/RickRieger/while-the-long-face/actions/workflows/tests.yml/badge.svg)](https://github.com/RickRieger/while-the-long-face/actions/workflows/tests.yml)

**No live site.** This exercise is three functions checked by Jest tests, not a web page. The badge above shows the latest test run on GitHub Actions; click it to see the results.

I did this exercise at the **Code Immersives** bootcamp in New York City on **March 4, 2021**. It was forked from the instructor's repo. My code is in [`main.js`](main.js). The instructor's original instructions are kept unchanged under [Original assignment](#original-assignment-from-the-instructor) below.

## What it practices

All three functions follow the same pattern. They don't know ahead of time how many steps they'll need. Each one just keeps changing a value **until a goal is met**, which is exactly what a `while` loop is for:

| Function | Keeps doing this... | ...while this is true |
| --- | --- | --- |
| `numberDoubler(num)` | `num = num * 2` | `num < 100` |
| `stringRepeater(str)` | `repeated += str` | `repeated.length < 10` |
| `makeDivisible(x, y)` | `x += 1` | `x % y !== 0` (there's a remainder) |

The flip side of "loop until the goal is met" is **what if the goal can never be met?** Then the loop runs forever and the program freezes. That turned out to be the main thing to fix (see the cleanup log).

## Run the tests

```bash
npm ci
npm run test:ci   # runs once and exits (expected: Tests: 10 passed, 10 total)
npm test          # watch mode: re-runs on every save, press q to quit
```

## How it's checked

- [`main.test.js`](main.test.js) is the instructor's original test file, unchanged (3 tests).
- [`cleanup.test.js`](cleanup.test.js) has 7 tests I added in 2026 for cases the original tests missed: landing exactly on 100, and inputs that used to freeze the program.
- **GitHub Actions** ([`.github/workflows/tests.yml`](.github/workflows/tests.yml)) runs both test files on Node 20 on every push and pull request. The badge at the top shows the result.

## Cleanup log

### 2026-11-24

My first commit that day was titled "that was easy". The next day I added an `alt.js` file "to hold solutions while practicing". Coming back to it, the instructor's tests passed, but two things were wrong.

**1. `numberDoubler` doubled one time too many when it landed on 100**

*Why:* the README's own example is `numberDoubler(100) => 100`, but my loop ran **while `num <= 100`**, so 100 became 200. The same went for any number that doubles to exactly 100: `50` returned `200` instead of `100`. The instructor's tests only used 1, 2, 26 and 51, which never hit 100 exactly, so they all passed. My practice file `alt.js` actually had it right (`<`), but `main.js` is the one that gets tested.

Before:

```js
while(num <= 100){
  num = num *2
}
```

After:

```js
while (num < 100) {
  num = num * 2;
}
```

**2. Some inputs froze the program forever**

*Why:* each loop waits for a goal, and some inputs can never reach it. Doubling `0` stays `0`, and doubling a negative number only gets more negative. Adding `''` to a string never makes it longer. Nothing divides evenly by `0`, and adding 1 to `9.5` never lands on a whole number. I checked each of these with a 1.5-second timeout, and every one of them hung. Now each function checks its input first and throws a `RangeError` that explains what it needs.

Before (all three functions):

```js
function stringRepeater(str) {
let newString = ''
 while (newString.length < 10){
     newString += str
 }
 return newString
}
```

After:

```js
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
```

`numberDoubler` checks `!(num > 0)` rather than `num <= 0` on purpose: `NaN <= 0` is false, so `NaN` would slip past. `!(NaN > 0)` is true, so `NaN` is rejected too.

**3. Removed the practice copy and tidied up**

*Why:* `alt.js` was a second copy of all three functions, kept while practicing. Nothing used or tested it. `main.js` also had a commented-out duplicate of `makeDivisible`. I removed both, and gave `main.js` consistent indentation, semicolons, a clearer variable name (`repeated` instead of `newString`) and a one-line comment per function. I compared the old and tidied functions on 26 inputs and they matched.

**4. Made `npm test` work and added GitHub Actions**

*Why:* the `test` script in `package.json` was npm's placeholder, which just prints "Error: no test specified". Jest was also listed as a regular dependency instead of a development tool.

Before:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
"dependencies": {
  "jest": "^26.6.3"
}
```

After:

```json
"scripts": {
  "test": "jest --watchAll",
  "test:ci": "jest --ci"
},
"devDependencies": {
  "jest": "29.7.0"
}
```

**5. This README**

*Why:* to explain the pattern, the fixes and how to run the tests. The instructor's text below is unchanged.

---

## Original assignment (from the instructor)

# `while-the-long-face?`

> In this exercise, we'll do some practice with while loops! Although you could probably figure out how to do this without while loops, please don't! Use a while loop :)

## Set up

* Fork this repository
* Clone the repository to your computer
* In the repo, run `npm install`
* Run the tests with `jest` or `jest --watch-all`

## Instructions

Write a series of functions in `main.js` that make the tests pass.

### `numberDoubler`

Write a function, `numberDoubler` that takes in a number and continues doubling until the number is greater than or equal to 100.

**Examples**:
```
numberDoubler(51)  => 102
numberDoubler(100) => 100
numberDoubler(26)  => 104
```

### `stringRepeater`

Write a function, `stringRepeater` that takes in a string and "repeats it" until the string's length is greater than or equal to 10.

**Examples**:
```
stringRepeater('abc')    => 'abcabcabcabc'
stringRepeater('a')      => 'aaaaaaaaaa'
stringRepeater('hotdog') => 'hotdoghotdog'
```

### `makeDivisible`

Write a function, `makeDivisible`, that takes in two numbers, x and y. The function should add one to x until it is divisble by y. Then return x.

**Examples**:
```
makeDivisible(9, 1)  => 9
makeDivisible(9, 2)  => 10
makeDivisible(11, 3) => 12
makeDivisible(10, 3) => 12
makeDivisible(5, 4)  => 8
makeDivisible(16, 5) => 20
```

