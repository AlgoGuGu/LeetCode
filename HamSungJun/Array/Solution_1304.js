/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function(n) {
  const result = new Array(n);
  const halfLen = Math.floor(n/ 2);
  result[halfLen] = 0;
  for (let i = 0; i < halfLen; i++) {
    result[i] = (n * -1) + i;
    result[result.length - 1 - i] = n - i;
  }
  return result;
};

sumZero(5);
