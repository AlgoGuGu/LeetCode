/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let old = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (old !== null && i- old < k + 1 ) {
                return false;
            }
            old = i;
        }
    }
    return true;
};
// console.log(kLengthApart([1,0,0,0,1,0,0,1,0],2))
// console.log(kLengthApart([1,0,0,0],1))
console.log(kLengthApart([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],100))