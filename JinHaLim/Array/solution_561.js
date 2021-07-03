/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let arr = nums.sort((a,b) => a-b);
    let sum = 0;
    console.log(arr)
    for (let i = 0; i < arr.length/2; i ++) {
        sum += Math.min(arr[i*2],arr[i*2+1]);
    }
    return sum;
};
console.log(arrayPairSum([-470, 66, -4835, -5623]))