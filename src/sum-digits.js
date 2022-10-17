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
  let counter = 0;
  let resultCounter = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    counter += +n[i];
  }
  counter = counter.toString();
  for (let j = 0; j < counter.length; j++) {
    resultCounter += +counter[j];
  }

  return resultCounter;
}

module.exports = {
  getSumOfDigits
};
