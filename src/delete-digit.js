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
  const arr = String(n).split('');
  let arr2 = [];

  arr.forEach((elem, index) => {
    let a = arr.slice(0, index).join('') + arr.slice(index + 1).join('');
    arr2.push(a);
  })
  let result = arr2.sort((a, b) => b - a).slice(0, 1).join('');
  return Number(result);
}

module.exports = {
  deleteDigit
};
