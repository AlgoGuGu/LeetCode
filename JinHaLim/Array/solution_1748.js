/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return nums.reduce((acc,curr,index) => {
        const arr = nums.filter(v => v === curr);
        if (arr.length === 1) acc += curr; 
        return acc;
    },0);
};
console.log(sumOfUnique([1,2,3,2]));