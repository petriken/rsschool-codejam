const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther.js');

describe('sumOfOther', () => {
    it('1', () => {
      const fnsumOfOther = sumOfOther([2, 3, 4, 1]);
      assert.deepEqual(fnsumOfOther, [8, 7, 6, 9]);
    });
  
    it('2', () => {
      const fnsumOfOther = sumOfOther([-5, 2, -6, 4, 5]);
      assert.deepEqual(fnsumOfOther, [5, -2, 6, -4, -5]);
    });
  
    it('3', () => {
      const fnsumOfOther = sumOfOther([14, 13, 12, 11, 10]);
      assert.deepEqual(fnsumOfOther, [46, 47, 48, 49, 50]);
    });
  
    it('4', () => {
      const fnsumOfOther = sumOfOther([2, 2, 2, 2]);
      assert.deepEqual(fnsumOfOther, [6, 6, 6, 6]);
    });

    it('5', () => {
      const fnsumOfOther = sumOfOther([1.2, 0.75, 0.3, 56.7]);
      assert.deepEqual(fnsumOfOther, 'error: "You can only enter an integer array, try again"');
    })

    it('6', () => {
      const fnsumOfOther = sumOfOther([[],[],[]]);
      assert.deepEqual(fnsumOfOther, 'error: "An array of arrays? something is wrong, read the task description"');
    })
    
    it('7 should return TypeError: Reduce of empty array with no initial value', () => {
      const fnsumOfOther = sumOfOther([]);
      assert.deepEqual(fnsumOfOther, TypeError);
    })

    it('8', () => {
      const fnsumOfOther = sumOfOther(['I', 'want', 'to', 'be', 'a', 'js', 'programmer']);
      assert.deepEqual(fnsumOfOther, 'error: "String? Are you serious? We need an array of numbers"');
    })
})