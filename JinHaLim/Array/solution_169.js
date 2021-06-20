/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maximum = 0;
    let num = 0;
    let majority = nums.reduce((acc,curr) => {
        if (acc.has(curr)) {
            acc.set(curr,acc.get(curr)+1);
        }
        else{
            acc.set(curr,1);
        }
        if(acc.get(curr) > maximum){
            maximum = acc.get(curr);
            num = curr;
        }
        return acc;
    },new Map());
    return num;
};
console.log(majorityElement([3,2,3]))