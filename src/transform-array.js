const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let a = '--discard-next';
  let b = '--discard-prev';
  let c = '--double-next';
  let d = '--double-prev';

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let final = [];

  
  if (arr.includes(a)) {
    arr.splice(arr.indexOf(a), 2)
  } else if (arr.includes(b) && arr.indexOf(b) !== 0) {
    arr.splice(arr.indexOf(b)-1, 2)
  } else if (arr.includes(b) && arr.indexOf(b) === 0) {
    arr.splice(arr.indexOf(b), 1)
  } else if (arr.includes(c) && typeof(arr.indexOf(c)+1) !== 'number') {
    arr.splice(arr.indexOf(c), 1, arr.indexOf(c)+1)
  } else if (arr.includes(d) && arr.indexOf(d) !== 0) {
    arr.splice(arr.indexOf(d), 1, arr.indexOf(d))
  } else if (arr.includes(d) && arr.indexOf(d) === 0) {
    arr.splice(arr.indexOf(d), 1)
  }

  for (let i = 0; i < arr.length; i++) {
    final.push(arr[i])
  }

  return final
  }

module.exports = {
  transform
};
