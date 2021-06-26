/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  let xorAcc = (start + 2 * 0);
  for (let i = 1; i < n; i++) {
    const nextInt = (start + 2 * i);
    xorAcc ^= nextInt;
  }
  return xorAcc;
};
