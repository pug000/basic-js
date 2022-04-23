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
    let sum = 1;
    let max = 1;

    arr.forEach((elem) => {
      if (Array.isArray(elem)) {
        sum += this.calculateDepth(elem);
      };
      if (sum > max) {
        max = sum
      } else {
        max;
      }
      sum = 1;
    });
    return max;
  }
}


module.exports = {
  DepthCalculator
};
