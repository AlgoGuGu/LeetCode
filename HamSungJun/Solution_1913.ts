function maxProductDifference (nums: number[]): number {
  nums.sort((a, b) => {
    return Number(a > b) - Number(a < b)
  })
  return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1])
};
