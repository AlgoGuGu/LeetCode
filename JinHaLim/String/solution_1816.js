/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let string = s.split(" ");
    string = string.slice(0,k);
    return string.join(" ");
};
console.log(truncateSentence("Hello how are you Contestant",4));