/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let string1 = word1.reduce((acc,curr) => {
        return acc+curr
    });
    let string2 = word2.reduce((acc,curr) => {
        return acc+curr
    });
    return (string1 === string2);
};

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]));