/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let arr = nums.slice(0);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = nums[nums[i]]
        
    }
    return arr;
};
console.log((buildArray([0,2,1,5,3,4])))