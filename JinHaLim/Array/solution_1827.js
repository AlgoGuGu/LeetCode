/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i],nums[i+1],nums[i] < nums[i+1])
        if(nums[i] >= nums[i+1]) {
            let calc = nums[i] -nums[i+1] +1;
            nums[i+1] += calc;
            count += calc;
        }
    }
    return count;
};
console.log(minOperations([1,1,1]))