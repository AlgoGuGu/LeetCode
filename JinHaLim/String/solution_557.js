/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let string = s.split(' ');
    return string.reduce((arr,curr) => {
        arr.push(curr.split('').reverse().join(''));
        return arr;
    },[]).join(' ');
};
console.log(reverseWords("Let's take LeetCode contest")); 