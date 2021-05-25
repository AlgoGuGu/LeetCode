function missingNumber (nums: number[]): number {
  const rangeSum = (nums.length) * (nums.length + 1) / 2
  const numsSum = nums.reduce((acc, curr) => { acc += curr; return acc }, 0)
  return rangeSum - numsSum
};

missingNumber([3, 0, 1])
