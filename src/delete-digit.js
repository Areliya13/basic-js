const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  str = '' + n
  arr = str.split('')
  let max = Math.floor(n / 10)
  for (let i = 0; i < arr.length; i++) {
    let a = ''
    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];
      if (i === j) continue
      a = a + element
    }
    if (+a > max) max = +a
  }
  return max
}

module.exports = {
  deleteDigit
};
