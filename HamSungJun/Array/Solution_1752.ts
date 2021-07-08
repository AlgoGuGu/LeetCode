function check (nums: number[]): boolean {
  if (isEqualAsc(nums)) return true
  for (let i = 0; i < nums.length; i++) {
    nums.push(nums.shift() as number)
    if (isEqualAsc(nums)) {
      return true
    }
  }
  return false
};

function isEqualAsc (nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false
    }
  }
  return true
}

console.log(check([2, 1, 3, 4]))
