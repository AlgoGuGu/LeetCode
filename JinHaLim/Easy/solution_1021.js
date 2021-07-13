/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = [];
    let cnt = 0;
    let openIndex = 0;
    s.split('').forEach((v,i)=> {
        if (v === '(') {
            if (cnt === 0) {
                openIndex = i;
            }
            ++cnt;
        }
        if (v === ')') {
            --cnt;
        }   
        if (cnt === 0) {
            result.push(s.slice(openIndex+1,i));
        }
    });
    return result.join('');
};
console.log(removeOuterParentheses("(()())(())"))