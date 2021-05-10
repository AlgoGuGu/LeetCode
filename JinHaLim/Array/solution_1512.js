/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = nums.reduce((acc,curr) =>{
        if(acc[curr] !== undefined) acc[curr] += 1;
        else acc[curr] = 1;
        return acc;
    },new Map());
    let sum = 0;
    for (const key in count) {
        if(count[key] > 1){
            sum += count[key] * (count[key]-1) / 2;
        }
    }
    return sum;
    
};
console.log(numIdenticalPairs([1,2,3,1,1,3]))