/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr1 = nums.slice(0,n);
    const arr2 = nums.slice(n,nums.length);
    return arr1.reduce((acc,curr,index) => {
        acc.push(curr);
        acc.push(arr2[index])
        return acc;
    },[]);
};
console.log(shuffle([2,5,1,3,4,7],3))