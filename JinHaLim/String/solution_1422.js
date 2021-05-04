/**
 * @param {string} s
 * @return {number}
 */
let leftZero = ele => {
    return ele.match(/0/g) !== null ?ele.match(/0/g).length: 0;
};
let rightOne =  ele => {
    return ele.match(/1/g) !== null ?ele.match(/1/g).length: 0;
};
var maxScore = function(s) {
    let maxSum = 0;
    for (let i = 1; i < s.length; i++) {
        const left = s.substring(0,i);
        const right = s.substring(i,s.length);
        let sum = leftZero(left) + rightOne(right);
        if(maxSum < sum) maxSum = sum;
    }
    return maxSum;
};
console.log(maxScore("011101"))