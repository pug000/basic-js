const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const numRepeatTimes = Number(repeatTimes);
  const numAdditionRepeatTimes = Number(additionRepeatTimes);
  const strSeparator = String(separator);
  const strAddition = String(addition);
  const strAdditionSeparator = String(additionSeparator);
  const string = String(str) + new Array(numAdditionRepeatTimes).fill(strAddition).join(strAdditionSeparator);
  const result = new Array(numRepeatTimes).fill(string).join(strSeparator);

  return result;
}

module.exports = {
  repeater
};
