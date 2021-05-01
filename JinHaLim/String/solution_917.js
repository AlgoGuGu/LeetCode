/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let letters = S.split(/[^a-zA-Z]/);
    let re = new RegExp(/[a-zA-Z]/,'gi');
    let other = S.replace(re,'').split('');
    // console.log(letters)
    // console.log(other)
    re = new RegExp('-','gi');
    let reverseLetters = letters.join('').split('');
    
    let resultArr = [];
    for (let i = 0; i < letters.length; i++) {
        let result = '';
        let len = letters[i].length;
        while (len > 0) {
            result = result + reverseLetters.pop();
            --len;
        }
        resultArr.push(result);
        resultArr.push(other[i]);
    }
    return resultArr.join('');
};
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))