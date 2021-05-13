/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for (let i = 1; i <= arr.length; i = i + 2 ) {
        for (let j = 0; j < arr.length; j++) {
            if (j+i > arr.length) {
                continue; 
            }
            // console.log(i,j+i-1,arr.length)
            // console.log(arr.slice(j,j+i))
            sum += arr.slice(j,j+i).reduce((acc,curr) => {
                acc += curr;
                return acc;
            },0);
        }
    }
    return sum;
};
console.log(sumOddLengthSubarrays( [6,9,14,5,3,8,7,12,13,1]));