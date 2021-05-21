/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes (nums: number[]): void {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0)
      nums.splice(i, 1)
    }
  }
};

moveZeroes([1])
