/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((acc,curr) => {
        if(String(curr).length % 2 === 0) acc += 1;
        return acc;
    },0);
};
console.log(findNumbers([12,345,2,6,7896]))