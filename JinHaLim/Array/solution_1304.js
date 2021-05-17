/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = new Array(n).fill(0);
    let halfLen = Math.floor(n/2);
    for (let i = 0; i < halfLen; i++) {
        arr[i] = (halfLen-i) * (-1);
        arr[n-i-1] = (halfLen-i);
    }
    return arr;
};
console.log(sumZero(4))