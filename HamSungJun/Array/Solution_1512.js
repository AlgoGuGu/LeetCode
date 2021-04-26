/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  const numsLen = nums.length;
  if (numsLen === 1 || isAllUnique(nums)) return 0;
  if (isAllSame(nums)) {
    return (numsLen) * (numsLen - 1) / 2;
  }
  let pairCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        pairCount += 1;
      }
    }
  }
  return pairCount;
};

const isAllSame = (nums) => {
  const result = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[0] !== nums[i]) {
      return false;
    }
  }
  return result;
};

const isAllUnique = (nums) => new Set(nums).size === nums.length;

