/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let box = [];
    let max = 1;
    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = String(String(i).split('').reduce((a,b) => (+a) + (+b)));
        if(box[sum] === undefined) box[sum] = 1;
        else {
            box[sum] +=  1;
            if(max < box[sum] ) max = box[sum];
        }
    }
    return max;
};
console.log(countBalls(1,10))