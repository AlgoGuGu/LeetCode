function isMonotonic (nums: number[]): boolean {
  let isAsc = null
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      continue
    } else if (nums[i] < nums[i + 1]) {
      if (isAsc === null) {
        isAsc = true
      } else if (isAsc === false) {
        return false
      }
    } else if (nums[i] > nums[i + 1]) {
      if (isAsc === null) {
        isAsc = false
      } else if (isAsc === true) {
        return false
      }
    }
  }
  return true
};

console.log(isMonotonic([1, 2, 4, 5]))
