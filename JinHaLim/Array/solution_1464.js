/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const max1  = Math.max.apply(null,nums);
    nums.splice(nums.indexOf(max1),1);
    const max2  = Math.max.apply(null,nums);
    nums.splice(nums.indexOf(max2),1);
    // console.log(max1,max2)
    return (max1 - 1) * (max2 - 1);
};
console.log(maxProduct([3,4,5,2]))