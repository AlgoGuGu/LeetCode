/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let result = arr1.length;
    for (let i = 0; i < arr1.length; i++) {
        const ele = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            
            if (Math.abs(ele-arr2[j]) <= d ) {
                result -= 1; 
                break;
            }
        }
    }
    return result;
};
// console.log(findTheDistanceValue([4,5,8],[10,9,1,8],2))
console.log(findTheDistanceValue(
    [2,1,100,3],[-5,-2,10,-3,7],6))