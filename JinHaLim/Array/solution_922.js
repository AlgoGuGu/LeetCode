/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let result = [];
    const even  = nums.filter(v => v % 2 === 0 );
    const odd = nums.filter(v => v % 2 === 1 );
    for (let i = 0; i < even.length; i++) {
        result.push(even[i]);
        result.push(odd[i]);
    }
    return result;
};
console.log(sortArrayByParityII([4,2,5,7]))