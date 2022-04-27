const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('');
  let arr2 = [];
  let result = [];

  arr2 = arr.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, []);

  result = String(arr2).split('').reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, []);

  return result;
}

module.exports = {
  getSumOfDigits
};
