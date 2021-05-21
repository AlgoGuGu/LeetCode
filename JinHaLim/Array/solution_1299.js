/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = [];
    let max = 0;
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if(maxIndex <= i){
            max = Math.max.apply(null,arr.slice(i));
            maxIndex = arr.indexOf(max);
        }
        result.push(max);
    }
    result.push(-1);
    return result;
};
console.log(replaceElements([17,18,5,4,6,1]));