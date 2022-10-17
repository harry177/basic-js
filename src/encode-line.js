const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      counter += 1;
    } else if (str[i] !== str[i+1]) {
      result.push(counter);
      result.push(str[i]);
      counter = 1;
    }

    }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 1) {
      result.splice(result.indexOf(result[i]), 1)
    }
  }
    return result.join('');
}

module.exports = {
  encodeLine
};
