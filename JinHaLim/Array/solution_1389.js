/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    return index.reduce((acc,curr,i) => {
        acc.splice(curr,0,nums[i]);
        return acc;
    },[]);
};
console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))