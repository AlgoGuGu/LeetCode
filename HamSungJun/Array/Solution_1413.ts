function minStartValue (nums: number[]): number {
  let maxNegativeSum = 0
  let subSum = 0
  for (const num of nums) {
    subSum += num
    if (subSum < 0 && maxNegativeSum > subSum) {
      maxNegativeSum = subSum
    }
  }
  return maxNegativeSum < 0 ? (maxNegativeSum * -1) + 1 : 1
};

console.log(minStartValue([-3, 2, -3, 4, 2]))
