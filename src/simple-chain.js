const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  step: [],
  getLength() {
    this.step.length;
    return this;
  },
  addLink(value) {
    this.step.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let i = position - 1;
    if (this.step[i] === undefined) {
      this.step.length = 0;
      throw Error('You can\'t remove incorrect link!');
    }
    this.step.splice(i, 1);
    return this;
  },
  reverseChain() {
    this.step.reverse();
    return this;
  },
  finishChain() {
    let finishStep = this.step.join('~~');
    this.step.length = 0;
    return finishStep;
  }
};

module.exports = {
  chainMaker
};
