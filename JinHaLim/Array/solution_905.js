/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return nums.filter(v => v % 2 === 0).concat(nums.filter(v => v % 2 !== 0)) ;
};
console.log(sortArrayByParity([3,1,2,4]));