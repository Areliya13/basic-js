const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    let depth = 0
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let elDepth = 0
      if (Array.isArray(element)){
        elDepth = this.calculateDepth(element)
        if (elDepth > depth) depth = elDepth
      }
    }
    return depth + 1
  }
}

module.exports = {
  DepthCalculator
};
