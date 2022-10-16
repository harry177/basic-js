const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chainContainer: [],

  getLength() {
    return this.chainContainer.length;
  },
  addLink(value) {
    this.chainContainer.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chainContainer.length || Number.isInteger(position) === false) {
      this.chainContainer = [];
      throw new Error("You can't remove incorrect link!");
    } else {
    this.chainContainer.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainContainer.reverse();
    return this;
  },
  finishChain() {
    let resultChain = this.chainContainer.join('~~');
    this.chainContainer = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
