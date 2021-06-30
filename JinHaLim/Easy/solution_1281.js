/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digit = n.toString().split('').reduce((acc,curr) => {
        acc[0] *= curr;
        acc[1] += +curr;
        return acc;
    },[1,0]);
    return digit[0] - digit[1];
};
console.log(subtractProductAndSum(234))