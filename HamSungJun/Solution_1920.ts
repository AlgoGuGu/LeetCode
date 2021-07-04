function buildArray (nums: number[]): number[] {
  return nums.map((num, i) => nums[nums[i]])
};
