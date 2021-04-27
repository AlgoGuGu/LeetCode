/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
  return recCTA(nums, index, [], 0);
};

const recCTA = (nums, index, target, p) => {
  if (p === nums.length) {
    return target;
  }
  target.splice(index[p], 0, nums[p]);
  return recCTA(nums, index, target, p+1);
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
