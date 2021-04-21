/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    // return String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    return n % 2 === 0 ? 'x'.repeat(n - 1) + 'y' : 'x'.repeat(n)
    //repeat를 이용하여 단순히 지정된 값들을 홀수개 가져 온다.
};
console.log(generateTheString(7));
