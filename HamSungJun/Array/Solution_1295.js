/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
  return nums.reduce((acc, curr) => {
    if ((''+curr).length % 2 === 0) {
      acc += 1;
    }
    return acc;
  }, 0);
};
