/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1;
    let sum = startValue;
    for (let i = 0; i < nums.length; i++) {
        // console.log(sum,nums[i],startValue)
        sum += nums[i];
        if (sum < 1) {
            startValue++;
            i = -1;
            sum = startValue;
        }
    }
    return startValue;
};
console.log(minStartValue([-3,2,-3,4,2]))
// console.log(minStartValue([1,-2,-3]))