const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = [];
  matrix.forEach((elem) => {
    elem.forEach((elem2) => {
      if (elem2 === '^^') {
        cats.push(elem2);
      }
    })
  })
  return cats.length;
}

module.exports = {
  countCats
};
