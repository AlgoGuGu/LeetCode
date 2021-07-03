/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let largeSize = 0;
    let arr = new Array(n).fill(0).map(x => new Array());
    for (let i = 1; i <= n; i++) {
        let sum = i.toString().split('').reduce((acc,curr) => {
            acc += +(curr);
            return acc;
        },0);
        arr[sum-1].push(i);
        if (arr[sum-1].length > largeSize) {
            largeSize = arr[sum-1].length;
        }
    }
    return arr.reduce((acc,curr) => {
        if (largeSize === curr.length) {
            acc += 1;
        }
        return acc;
    },0);
};
console.log(countLargestGroup(13))