const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther.js');

describe('sum', () => {
    it('1', () => {
      const fnsumOfOther = sumOfOther([2, 3, 4, 1]);
      assert.deepEqual(fnsumOfOther, [8, 7, 6, 9]);
    });
  
    it('2', () => {
      const fnsumOfOther = sumOfOther([1, 2, 3, 4, 5]);
      assert.deepEqual(fnsumOfOther, [14, 13, 12, 11, 10]);
    });
  
    it('3', () => {
      const fnsumOfOther = sumOfOther([14, 13, 12, 11, 10]);
      assert.deepEqual(fnsumOfOther, [46, 47, 48, 49, 50]);
    });
  
    it('4', () => {
      const fnsumOfOther = sumOfOther([2, 2, 2, 2]);
      assert.deepEqual(fnsumOfOther, [6, 6, 6, 6]);
    });
})