function kLengthApart (nums: number[], k: number): boolean {
  if (k <= 1) return true
  let occurAt = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (occurAt === -1) {
        occurAt = i
      } else {
        if (i - occurAt <= k) {
          return false
        }
        occurAt = i
      }
    }
  }
  return true
};

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2))
