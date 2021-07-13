/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let arr = s.split('');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if (typeof(+arr[i+1]) === 'number' && i+1 < arr.length ) {
        result.push(String.fromCharCode(arr[i].charCodeAt() + +(arr[i+1])));
        i += 1;
        }
    }
    return result.join('');
};
console.log(replaceDigits("a1b2c3d4e"))