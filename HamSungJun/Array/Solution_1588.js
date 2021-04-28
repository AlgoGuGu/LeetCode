/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function(arr) {
  let sum = 0;
  const DP = arr.slice().map((n, i) => {
    sum += n;
    return [[i, n]];
  });
  let p = 0;
  while (true) {
    if (p === 0 && DP[0][DP[0].length - 1][0] + 2 > arr.length - 1) {
      break;
    }
    const nextRef = DP[p];
    const [computedAt, acc] = nextRef[nextRef.length - 1];
    if (computedAt + 2 <= arr.length - 1) {
      const nextSubSum = acc + arr[computedAt + 1] + arr[computedAt + 2];
      sum += nextSubSum;
      nextRef.push([computedAt + 2, nextSubSum]);
    }
    p += 1;
    p %= arr.length;
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
