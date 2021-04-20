/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = [];
    let maxLenth = (word1.length < word2.length? word1.length :word2.length);
    while (word1.length + word2.length > 0) {
        result.push(word1[0]);
        word1 = word1.substring(1,word1.length);
        result.push(word2[0]);
        word2 =  word2.substring(1,word2.length);
    }
    return result.join('');
};
console.log(mergeAlternately("abc","pqr"))