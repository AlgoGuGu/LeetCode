/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let accList= [];
    nums.reduce((acc,curr,index) => {
        acc += curr;
        accList.push(acc);
        return acc;
    },0);
    return accList;
};
console.log(runningSum([1,2,3,4]))