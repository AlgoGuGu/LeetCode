/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    arr.sort((a,b) => a-b);
    target.sort((a,b) => a-b);
    return target.every((item,index) => arr[index] === item) ;
};
console.log(canBeEqual([1,2,3,4],[2,4,1,3]))