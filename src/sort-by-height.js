const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  const minuses = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === -1) {minuses.push(i)}
  }
  arr = arr.filter(value => value !== -1).sort((a,b) => a-b)
  for (let i = 0; i < minuses.length; i++) {
    const element = minuses[i];
    arr.splice(element, 0, -1)
  }
  return arr
}

module.exports = {
  sortByHeight
};
