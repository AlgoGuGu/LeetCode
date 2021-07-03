/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length/2; i++) {
        const [freq,val] = [nums[2*i], nums[2*i+1]];
        for (let j = 0; j < freq; j++) {
            arr.push(val);
        }
    }
    return arr;
};
console.log(decompressRLElist([1,2,3,4]))