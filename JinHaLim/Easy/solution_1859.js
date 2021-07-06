/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(' ');
    return arr.reduce((acc,curr) => {
        acc[curr[curr.length-1]-1] = curr.slice(0,curr.length-1);
        return acc;
    },new Array(arr.length)).join(' ');
};
console.log(sortSentence("is2 sentence4 This1 a3"));