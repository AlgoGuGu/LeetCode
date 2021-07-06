function minSubsequence (nums: number[]): number[] {
  nums.sort((a, b) => {
    return Number(a < b) - Number(a > b)
  })
  const sumNumsHalf = nums.reduce((acc, curr) => (acc += curr), 0) / 2
  let acc = 0
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i]
    if (acc > sumNumsHalf) {
      return nums.slice(0, i + 1)
    }
  }
  return []
};

console.log(minSubsequence([4, 4, 7, 6, 7]))
