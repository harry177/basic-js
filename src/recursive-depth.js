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

    let layer = 1;

    for (let item of arr) {

      let counter = 1;
      
      if (Array.isArray(item)) {
        counter += this.calculateDepth(item);
      }
      if (counter > layer) {
        layer = counter;
      }
      }
    
    return layer;
}
}

module.exports = {
  DepthCalculator
};
