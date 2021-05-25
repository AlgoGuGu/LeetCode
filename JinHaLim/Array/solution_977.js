/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.sort((a,b) => a*a-b*b).reduce((acc,curr)=>{
        acc.push(curr*curr);
        return acc;
    },[]);
};
console.log(sortedSquares([-4,-1,0,3,10]));