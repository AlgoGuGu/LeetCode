function arrayPairSum (nums: number[]): number {
  nums.sort((a, b) => {
    return Number(a > b) - Number(a < b)
  })
  let maxPairSum = 0
  for (let i = 0; i < nums.length - 1; i += 2) {
    maxPairSum += Math.min(nums[i], nums[i + 1])
  }
  return maxPairSum
};

console.log(arrayPairSum([1, 4, 3, 2]))
