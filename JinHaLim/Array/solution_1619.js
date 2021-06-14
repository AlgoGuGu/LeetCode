/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const cutSize = arr.length*0.05;
    arr.sort((a,b)=> a-b);
    arr = arr.splice(cutSize,arr.length);
    arr = arr.splice(0,arr.length-cutSize);
    return arr.reduce((acc,curr) => {
        acc += +(curr);
        return acc;
    },0) / arr.length;
};
// console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]))