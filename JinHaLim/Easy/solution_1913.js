/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b) => b-a);
    return (nums[0] * nums[1]) - (nums[nums.length-1] * nums[nums.length-2]);
};
console.log(maxProductDifference([5,6,2,7,4]))