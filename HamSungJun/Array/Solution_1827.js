/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function(nums) {
  if (nums.length === 1) return 0;
  let increaseAcc = 0;
  for (let i = 1; i < nums.length; i++) {
    const left = nums[i-1];
    const right = nums[i];
    if (left >= right) {
      increaseAcc += (left + 1 - right);
      right = left + 1;
    }
  }
  return increaseAcc;
};
