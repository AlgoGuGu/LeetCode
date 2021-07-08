/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {
  const DP = Array.from(new Array(s.length), () => [0, 0]);
  const isFirstZero = isZero(s[0]);
  DP[0] = [
    isFirstZero ? 1 : 0,
    s.replace(/0/g, '').length - (isFirstZero ? 0 : 1),
  ];
  let maxSum = DP[0][0] + DP[0][1];
  for (let i = 1; i < s.length - 1; i++) {
    const isNextZero = isZero(s[i]);
    if (isNextZero) {
      DP[i][0] = DP[i-1][0] + 1;
      DP[i][1] = DP[i-1][1];
    } else {
      DP[i][0] = DP[i-1][0];
      DP[i][1] = DP[i-1][1] - 1;
    }
    console.log(DP);
    maxSum = Math.max(maxSum, DP[i][0] + DP[i][1]);
  }
  return maxSum;
};

const isZero = (ch) => {
  return ch === '0';
};

console.log(maxScore('000'));
