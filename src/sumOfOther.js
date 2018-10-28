module.exports = function sumOfOther(arr) {
  const origArr = arr;
  const sum = origArr.reduce((a, b) => a + b);
  const resArr = origArr.map(item => sum - item);
  return resArr;
};
